# FIX_DUPLICATE_POSTS.ps1
# Removes duplicate posts from content/posts.json on GitHub
# Uses your already-saved git credentials — no manual token needed

$OWNER = "waqasmuhammad54"
$REPO  = "backyardstudioofficial"
$FILE  = "content/posts.json"
$API   = "https://api.github.com/repos/$OWNER/$REPO/contents/$FILE"

# --- Get GitHub token from git's credential store automatically ---
Write-Host "Getting GitHub credentials from git credential store..." -ForegroundColor Cyan
$credInput = "protocol=https`nhost=github.com`n`n"
$credOutput = ($credInput | git credential fill 2>&1)
$GITHUB_TOKEN = ($credOutput | Where-Object { $_ -match "^password=" }) -replace "^password=",""

if (-not $GITHUB_TOKEN) {
    Write-Host "Could not auto-detect token. Please paste your GitHub PAT:" -ForegroundColor Yellow
    $GITHUB_TOKEN = Read-Host "GitHub Personal Access Token"
}

if (-not $GITHUB_TOKEN) {
    Write-Host "No token provided. Exiting." -ForegroundColor Red
    exit 1
}

Write-Host "Token obtained. Fetching posts.json from GitHub..." -ForegroundColor Cyan

$headers = @{
    Authorization = "Bearer $GITHUB_TOKEN"
    Accept        = "application/vnd.github+json"
    "X-GitHub-Api-Version" = "2022-11-28"
}

try {
    $response = Invoke-RestMethod -Uri $API -Headers $headers -Method GET -ErrorAction Stop
} catch {
    Write-Host "Failed to fetch posts.json: $_" -ForegroundColor Red
    exit 1
}

$sha = $response.sha
$rawContent = $response.content -replace "`n",""
$decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($rawContent))
$posts = $decoded | ConvertFrom-Json

Write-Host "Total posts found: $($posts.Count)" -ForegroundColor Yellow

# Deduplicate by slug — keep FIRST occurrence (newest, prepended on publish)
$seen   = @{}
$unique = [System.Collections.Generic.List[object]]::new()
foreach ($p in $posts) {
    if (-not $seen.ContainsKey($p.slug)) {
        $seen[$p.slug] = $true
        $unique.Add($p)
    } else {
        Write-Host "  Removing duplicate: $($p.slug)" -ForegroundColor Red
    }
}

Write-Host "Posts after dedup: $($unique.Count)" -ForegroundColor Green

if ($unique.Count -eq $posts.Count) {
    Write-Host "No duplicates found — nothing to fix." -ForegroundColor Green
    exit 0
}

# Commit the fixed version back to GitHub
$newJson    = ($unique | ConvertTo-Json -Depth 20 -Compress:$false)
$newContent = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($newJson))

$body = @{
    message = "fix: remove duplicate blog posts from posts.json"
    content = $newContent
    branch  = "main"
    sha     = $sha
} | ConvertTo-Json -Depth 5

Write-Host "Committing deduplicated posts.json to GitHub..." -ForegroundColor Cyan

try {
    Invoke-RestMethod -Uri $API -Headers $headers -Method PUT -Body $body -ContentType "application/json" -ErrorAction Stop
    Write-Host ""
    Write-Host "Done! Duplicates removed. Vercel will redeploy in ~60 seconds." -ForegroundColor Green
    Write-Host "Live blog: https://www.backyardstudioofficial.com/blog" -ForegroundColor Cyan
} catch {
    Write-Host "GitHub commit failed: $_" -ForegroundColor Red
    exit 1
}
