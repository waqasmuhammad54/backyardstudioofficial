<#
  SUBMIT_INDEXNOW.ps1
  --------------------------------------------------------------------------
  Pushes every URL in the sitemap to IndexNow, which notifies BING and YANDEX
  (and Seznam, Naver) immediately rather than waiting for them to crawl.

  Google does NOT use IndexNow -- Google is handled via Search Console and the
  sitemap ping. Baidu does not use it either; Baidu needs its own console.

  Run this AFTER a deploy has finished, not before -- otherwise the engines
  re-crawl and find the old content.

  Usage:  right-click -> Run with PowerShell
      or: powershell -ExecutionPolicy Bypass -File SUBMIT_INDEXNOW.ps1
#>

$ErrorActionPreference = "Stop"
$host_        = "www.backyardstudioofficial.com"
$key          = "314c7e9d7ba045308e8f73c0bb9136b4"
$keyLocation  = "https://$host_/$key.txt"
$sitemapUrl   = "https://$host_/sitemap.xml"

Write-Host ""
Write-Host "=== IndexNow submission for $host_ ===" -ForegroundColor Cyan
Write-Host ""

# --- 1. Confirm the key file is actually reachable ------------------------
Write-Host "[1/4] Checking key file at $keyLocation ..." -NoNewline
try {
    $k = (Invoke-WebRequest -Uri $keyLocation -UseBasicParsing -TimeoutSec 30).Content.Trim()
    if ($k -ne $key) {
        Write-Host " MISMATCH" -ForegroundColor Red
        Write-Host "      File contains '$k' but expected '$key'. Aborting." -ForegroundColor Red
        Read-Host "Press Enter to exit"; exit 1
    }
    Write-Host " OK" -ForegroundColor Green
} catch {
    Write-Host " FAILED" -ForegroundColor Red
    Write-Host "      Could not fetch the key file. IndexNow will reject the submission." -ForegroundColor Red
    Read-Host "Press Enter to exit"; exit 1
}

# --- 2. Pull every URL out of the sitemap ---------------------------------
Write-Host "[2/4] Reading sitemap ..." -NoNewline
$xml  = [xml](Invoke-WebRequest -Uri $sitemapUrl -UseBasicParsing -TimeoutSec 60).Content
$urls = @($xml.urlset.url | ForEach-Object { $_.loc } | Where-Object { $_ })
Write-Host " $($urls.Count) URLs" -ForegroundColor Green

if ($urls.Count -eq 0) { Write-Host "No URLs found. Aborting." -ForegroundColor Red; Read-Host; exit 1 }

# --- 3. Submit in batches (IndexNow caps at 10,000 per request) -----------
Write-Host "[3/4] Submitting to IndexNow ..."
$endpoints = @(
    "https://api.indexnow.org/indexnow",   # shared endpoint, fans out to all participants
    "https://www.bing.com/indexnow",       # Bing direct
    "https://yandex.com/indexnow"          # Yandex direct
)
$batchSize = 9000
for ($i = 0; $i -lt $urls.Count; $i += $batchSize) {
    $batch = $urls[$i..([Math]::Min($i + $batchSize - 1, $urls.Count - 1))]
    $body  = @{
        host        = $host_
        key         = $key
        keyLocation = $keyLocation
        urlList     = $batch
    } | ConvertTo-Json -Depth 3

    foreach ($ep in $endpoints) {
        $name = ([Uri]$ep).Host
        try {
            $r = Invoke-WebRequest -Uri $ep -Method POST -Body $body `
                    -ContentType "application/json; charset=utf-8" `
                    -UseBasicParsing -TimeoutSec 60
            Write-Host ("      {0,-22} HTTP {1}  ({2} URLs)" -f $name, $r.StatusCode, $batch.Count) -ForegroundColor Green
        } catch {
            $code = $_.Exception.Response.StatusCode.value__
            if ($code -eq 202 -or $code -eq 200) {
                Write-Host ("      {0,-22} HTTP {1}  ({2} URLs)" -f $name, $code, $batch.Count) -ForegroundColor Green
            } else {
                Write-Host ("      {0,-22} HTTP {1}  {2}" -f $name, $code, $_.Exception.Message) -ForegroundColor Yellow
            }
        }
    }
}

# --- 4. Ping sitemap to Google + Bing -------------------------------------
Write-Host "[4/4] Pinging sitemap ..."
$enc = [uri]::EscapeDataString($sitemapUrl)
foreach ($p in @("https://www.google.com/ping?sitemap=$enc",
                 "https://www.bing.com/ping?sitemap=$enc")) {
    $name = ([Uri]$p).Host
    try {
        $r = Invoke-WebRequest -Uri $p -UseBasicParsing -TimeoutSec 30
        Write-Host ("      {0,-22} HTTP {1}" -f $name, $r.StatusCode) -ForegroundColor Green
    } catch {
        Write-Host ("      {0,-22} skipped (endpoint deprecated -- harmless)" -f $name) -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "Done. $($urls.Count) URLs pushed to Bing + Yandex." -ForegroundColor Cyan
Write-Host ""
Write-Host "Still needs doing manually (IndexNow cannot cover these):" -ForegroundColor Yellow
Write-Host "  - Google  : Search Console -> Sitemaps -> resubmit (no daily quota)"
Write-Host "  - Baidu   : ziyuan.baidu.com -> register, then submit sitemap"
Write-Host "  - Yandex  : webmaster.yandex.com -> register to see the results of this push"
Write-Host ""
Read-Host "Press Enter to close"
