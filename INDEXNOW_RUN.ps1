# INDEXNOW_RUN.ps1 - submit every sitemap URL to Bing + Yandex via IndexNow.
#
# ASCII ONLY. Windows PowerShell 5.1 reads a UTF-8 file with no BOM as ANSI,
# so an em dash or a curly quote decodes into bytes that include a double-quote
# character and the whole script fails to parse. Keep this file plain ASCII.
#
# Why a file and not a one-liner: an earlier attempt ran IndexNow through nested
# powershell -Command "...", the variables were mangled, an EMPTY urlList was
# posted, and Bing still returned HTTP 200. A no-op looked exactly like success.
# Only Yandex's 422 gave it away. So: file (no re-quoting), regex parsing of
# <loc> (the [xml] cast silently returned zero rows here), and a hard abort if
# the URL count is 0.

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$siteHost    = "www.backyardstudioofficial.com"
$key         = "314c7e9d7ba045308e8f73c0bb9136b4"
$keyLocation = "https://$siteHost/$key.txt"
$sitemapUrl  = "https://$siteHost/sitemap.xml"
$ua          = "Mozilla/5.0 (compatible; IndexNowSubmitter/1.0)"

Write-Host "Fetching $sitemapUrl ..."
$xml = (Invoke-WebRequest -Uri $sitemapUrl -UseBasicParsing -UserAgent $ua).Content

$locs = [regex]::Matches($xml, '<loc>\s*([^<]+?)\s*</loc>') | ForEach-Object { $_.Groups[1].Value }

if ($xml -match '<sitemapindex') {
    Write-Host "Sitemap index detected. Expanding child sitemaps..."
    $all = @()
    foreach ($child in $locs) {
        try {
            $c = (Invoke-WebRequest -Uri $child -UseBasicParsing -UserAgent $ua).Content
            $all += [regex]::Matches($c, '<loc>\s*([^<]+?)\s*</loc>') | ForEach-Object { $_.Groups[1].Value }
        } catch {
            Write-Host "  WARN child sitemap failed: $child"
        }
    }
    $locs = $all
}

$urls = @($locs | Where-Object { $_ -like "https://$siteHost/*" } | Select-Object -Unique)
$count = $urls.Count
Write-Host "Parsed $count unique URLs on $siteHost"

if ($count -eq 0) {
    Write-Host "ABORT: parsed 0 URLs. An empty urlList returns HTTP 200 from Bing and does nothing."
    exit 1
}

Write-Host ("  first: " + $urls[0])
Write-Host ("  last : " + $urls[$count - 1])
Write-Host ""

$endpoints = @(
    @{ name = "Bing";   url = "https://www.bing.com/indexnow" },
    @{ name = "Yandex"; url = "https://yandex.com/indexnow"   }
)

$batchSize = 10000
for ($i = 0; $i -lt $count; $i += $batchSize) {
    $end   = [Math]::Min($i + $batchSize - 1, $count - 1)
    $batch = @($urls[$i..$end])

    $payload = @{
        host        = $siteHost
        key         = $key
        keyLocation = $keyLocation
        urlList     = $batch
    } | ConvertTo-Json -Depth 4 -Compress

    foreach ($ep in $endpoints) {
        $label = $ep.name + " batch " + $i + "-" + $end + " (" + $batch.Count + " urls)"
        try {
            $r = Invoke-WebRequest -Uri $ep.url -Method Post -Body $payload -ContentType "application/json; charset=utf-8" -UseBasicParsing -UserAgent $ua
            Write-Host ($label + " -> HTTP " + $r.StatusCode)
        } catch {
            $code = "ERR"
            if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode }
            Write-Host ($label + " -> HTTP " + $code + "  " + $_.Exception.Message)
        }
    }
}

Write-Host ""
Write-Host "Done. $count URLs submitted to Bing and Yandex."
