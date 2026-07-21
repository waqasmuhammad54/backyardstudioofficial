@echo off
REM ============================================================
REM  SAFE DEPLOY - Price reconciliation + drone removal (pricing page)
REM  Fixes wedding prices across all city/emirate pages to match
REM  your main /pricing (7,500 / 15,500 / 22,500 / 65,000),
REM  removes drone from /pricing, and corrects llms.txt.
REM  Rebases on top of latest GitHub main so your blog posts stay.
REM ============================================================
cd /d "C:\Users\Precision\Documents\Claude\Projects\backyardstudioofficial.com\live-site"

echo.
echo [1/6] Fetching latest from GitHub (your admin blog posts)...
git fetch origin main

echo.
echo [2/6] Staging changes...
git add -A

echo.
echo [3/6] These files will be committed:
git status --short

echo.
echo [4/6] Committing...
git commit -m "fix(pricing): reconcile all wedding pages to canonical tiers; remove drone from pricing + llms.txt"

echo.
echo [5/6] Rebasing on top of latest main (keeps all your recent blog posts)...
git pull --rebase origin main
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo ============================================================
  echo  STOPPED: rebase conflict. NOTHING pushed. Work is safe.
  echo  Run: git rebase --abort   then tell Claude.
  echo ============================================================
  pause
  exit /b 1
)

echo.
echo [6/6] Pushing to GitHub (triggers Vercel auto-deploy)...
git push origin main
if %ERRORLEVEL% EQU 0 (
  echo.
  echo ============================================================
  echo  PUSHED. Vercel rebuilds in ~2 min. Verify:
  echo  /pricing  (no drone section)
  echo  /services/wedding-photography-sharjah  (from AED 7,500)
  echo  /locations/dubai/wedding-photography    (from AED 7,500)
  echo  /llms.txt  (wedding from AED 7,500, no drone session)
  echo ============================================================
) else (
  echo ERROR: push failed. Tell Claude - your commit is safe locally.
)
pause
