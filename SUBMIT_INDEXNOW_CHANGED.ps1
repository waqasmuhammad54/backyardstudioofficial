<#
  SUBMIT_INDEXNOW_CHANGED.ps1
  --------------------------------------------------------------------------
  Submits ONLY the URLs changed by a specific deploy, rather than the whole
  sitemap. Non-interactive, so it can be run straight after a push.

  Reaches BING, YANDEX, Seznam and Naver. It does NOT reach Google -- Google
  only takes the sitemap and Search Console. Do not read a 200 here as
  "Google has been told".

  !! IndexNow returns a silent HTTP 200 for an EMPTY urlList, so an empty run
  looks identical to a successful one. This script therefore refuses to POST
  an empty list and prints the count it is sending.

  Run AFTER the deploy reports READY, never before, or the engines re-crawl
  and cache the old content.
#>

$ErrorActionPreference = "Stop"
$hostName    = "www.backyardstudioofficial.com"
$key         = "314c7e9d7ba045308e8f73c0bb9136b4"
$keyLocation = "https://$hostName/$key.txt"
$B           = "https://$hostName"

# Changed by commit 2a38d7b (13 Oct 2026):
#   - two drone pages un-retired (were 308 since August)
#   - four ar/ru pages newly declared in the sitemap
#   - eleven locale pages whose hreflang targets were repaired
#   - twenty retitled pages
#   - one post with the heading hierarchy fixed
$paths = @(
  # un-retired, highest priority -- these are new URLs as far as the engines know
  "/locations/dubai/drone-videography"
  "/locations/abu-dhabi/drone-videography"
  # newly declared in the sitemap
  "/ar/locations", "/ru/locations", "/ar/testimonials", "/ru/testimonials"
  # city hubs, because their link lists changed
  "/locations/dubai", "/locations/abu-dhabi"
  # hreflang repaired
  "/ar/blog/taswir-atfal-ihtirafiya-dubai-2026", "/ru/blog/fotografiya-detey-dubai-2026"
  "/ar/blog/taswir-haml-dubai-2026", "/ru/blog/fotografiya-beremennosti-dubai-2026"
  "/ar/blog/taswir-headshot-mihni-dubai-2026", "/ru/blog/headshot-fotografiya-dubai-2026"
  "/ar/blog/taswir-zifaf-hindi-dubai-2026", "/ru/blog/indiyskaya-svadba-fotografiya-dubai-2026"
  "/ru/blog/rily-socsietey-dubai-2026", "/zh/blog/shejiao-meiti-neirong-dubai-2026"
  "/ru/blog/fotosessiya-beremennosti-dubai-2026"
  # retitled
  "/how-to-choose-a-production-company-in-dubai", "/zh/about", "/ru/about", "/ru/contact"
  "/ru/services", "/ru/blog", "/ru/blog/fotografiya-edy-dubai-2026", "/services/live-streaming"
  "/locations/abu-dhabi/al-maryah-island", "/locations/abu-dhabi/personal-branding-photography"
  "/locations/abu-dhabi/social-media-content", "/services/wedding-photography-abu-dhabi"
  "/services/wedding-photography-ras-al-khaimah", "/services/wedding-photography-fujairah"
  "/services/wedding-photography-umm-al-quwain", "/services/flying-dress-photoshoot"
  "/ar/blog/asear-video-sharkati-dubai-2026", "/ar/blog/baqat-taswir-zifaf-dubai-asaar-2026"
  "/ar/blog/asear-tasswirvideo-dubai-2026", "/ru/blog/fotografiya-nedvizhimosti-dubai-2026"
  # heading hierarchy
  "/blog/corporate-video-production-dubai-2026"
)

$urls = $paths | ForEach-Object { $B + $_ } | Select-Object -Unique

Write-Host ""
Write-Host "=== IndexNow: $($urls.Count) changed URL(s) for $hostName ===" -ForegroundColor Cyan

if ($urls.Count -eq 0) {
  Write-Host "Refusing to POST an empty urlList -- IndexNow would answer 200 and do nothing." -ForegroundColor Red
  exit 1
}

# Confirm the key file is reachable, or the submission is rejected silently.
Write-Host "[1/3] key file ... " -NoNewline
$k = (Invoke-WebRequest -Uri $keyLocation -UseBasicParsing -TimeoutSec 30).Content.Trim()
if ($k -ne $key) { Write-Host "MISMATCH ($k)" -ForegroundColor Red; exit 1 }
Write-Host "OK" -ForegroundColor Green

# Confirm each URL actually returns 200 before announcing it. Submitting a
# redirect or a 404 is worse than submitting nothing.
Write-Host "[2/3] verifying every URL returns 200 ..."
$live = @()
foreach ($u in $urls) {
  try {
    $r = Invoke-WebRequest -Uri $u -Method Head -MaximumRedirection 0 -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
    if ($r.StatusCode -eq 200) { $live += $u } else { Write-Host "      skip $($r.StatusCode)  $u" -ForegroundColor Yellow }
  } catch {
    $code = $_.Exception.Response.StatusCode.value__
    if (-not $code) { $code = "ERR: " + $_.Exception.Message }
    Write-Host "      skip $code  $u" -ForegroundColor Yellow
  }
}
Write-Host "      $($live.Count) of $($urls.Count) return 200" -ForegroundColor Green
if ($live.Count -eq 0) { Write-Host "Nothing live to submit." -ForegroundColor Red; exit 1 }

$body = @{ host = $hostName; key = $key; keyLocation = $keyLocation; urlList = $live } | ConvertTo-Json -Depth 3

Write-Host "[3/3] POSTing to IndexNow ... " -NoNewline
try {
  $resp = Invoke-WebRequest -Uri "https://api.indexnow.org/IndexNow" -Method Post -Body $body -ContentType "application/json; charset=utf-8" -UseBasicParsing -TimeoutSec 60
  Write-Host "$($resp.StatusCode)" -ForegroundColor Green
  Write-Host "Submitted $($live.Count) URL(s) to Bing / Yandex / Seznam / Naver." -ForegroundColor Green
} catch {
  Write-Host "FAILED $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "Google was NOT notified -- IndexNow does not reach it." -ForegroundColor Yellow
Write-Host "Request indexing in Search Console for, in this order:" -ForegroundColor Yellow
Write-Host "  1. /locations/dubai/drone-videography" -ForegroundColor Yellow
Write-Host "  2. /locations/abu-dhabi/drone-videography" -ForegroundColor Yellow
Write-Host "  3. /ar/locations   4. /ru/locations" -ForegroundColor Yellow
Write-Host "  5. /ar/testimonials   6. /ru/testimonials" -ForegroundColor Yellow
Write-Host "(GSC allows roughly 5-10 manual requests per property per day.)" -ForegroundColor Yellow
