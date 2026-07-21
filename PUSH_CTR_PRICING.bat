@echo off
REM ============================================================
REM  SAFE DEPLOY - CTR harvest: /pricing snippet
REM  Commits ONLY the pricing page, then rebases on top of the
REM  latest GitHub main so your admin blog posts are preserved.
REM ============================================================
cd /d "C:\Users\Precision\Documents\Claude\Projects\backyardstudioofficial.com\live-site"

echo.
echo [1/5] Fetching latest from GitHub (your blog posts)...
git fetch origin main

echo.
echo [2/5] Staging ONLY the pricing page change...
git add "app/(en)/pricing/page.tsx"

echo.
echo [3/5] Committing...
git commit -m "seo(pricing): add real AED price anchors to title + meta for CTR"

echo.
echo [4/5] Rebasing on top of latest main (keeps all your recent blog posts)...
git pull --rebase origin main
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo ============================================================
  echo  STOPPED: rebase hit a conflict. NOTHING was pushed.
  echo  Your work is 100%% safe. Run: git rebase --abort
  echo  Then tell Claude and we will resolve it together.
  echo ============================================================
  pause
  exit /b 1
)

echo.
echo [5/5] Pushing to GitHub (triggers Vercel auto-deploy)...
git push origin main
if %ERRORLEVEL% EQU 0 (
  echo.
  echo ============================================================
  echo  PUSHED. Vercel will rebuild in ~2 minutes.
  echo  Verify after deploy:
  echo  https://www.backyardstudioofficial.com/pricing
  echo  (view-source: title should show "From AED 2,500")
  echo ============================================================
) else (
  echo ERROR: push failed. Tell Claude - your commit is safe locally.
)
pause
