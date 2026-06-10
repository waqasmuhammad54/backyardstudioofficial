@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
echo Clearing git locks...
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\index.lock" del /f ".git\index.lock"

echo Staging Tier 2 blog posts...
git add lib/blogPosts.ts

git status
echo.
git commit -m "Add: 9 Tier 2 EN blog posts (business headshots, executive portraits, exhibition, interior, architecture, jewelry, TVC, explainer video, school photography)"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Vercel building now.
  echo.
  echo New pages (9 posts):
  echo   /blog/business-headshots-dubai-2026
  echo   /blog/executive-portraits-dubai-2026
  echo   /blog/exhibition-photography-dubai-2026
  echo   /blog/interior-photography-dubai-2026
  echo   /blog/architecture-photography-dubai-2026
  echo   /blog/jewelry-photography-dubai-2026
  echo   /blog/tvc-production-dubai-2026
  echo   /blog/explainer-video-dubai-2026
  echo   /blog/school-photography-dubai-2026
  echo.
  echo After Vercel deploys, run IndexNow:
  echo   python C:\Users\Precision\Desktop\indexnow_fix.py
) else (
  echo FAILED - check output above
)
pause
