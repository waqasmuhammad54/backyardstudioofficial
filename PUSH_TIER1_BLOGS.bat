@echo off
setlocal enabledelayedexpansion
echo ============================================
echo  Backyard Studio -- Push Tier 1 Blog Posts
echo ============================================
echo.
echo Adding 6 new Tier 1 blog posts...
echo.

cd /d "D:\Claude Project\Backyard\backyard-studio"

if exist ".git\index.lock" del /f ".git\index.lock"

git add lib/blogPosts.ts
git commit -m "Add 6 Tier 1 blog posts: Emirati wedding, Arabic wedding, food photography, event photography, event videography, music video production Dubai 2026"

echo.
echo Pushing to GitHub...
git push origin main
set PUSH_RESULT=!ERRORLEVEL!
echo.

if !PUSH_RESULT! == 0 (
  echo SUCCESS! Vercel build starting...
  echo.
  echo New live pages after build:
  echo   /blog/emirati-wedding-photography-dubai-2026
  echo   /blog/arabic-wedding-photography-dubai-2026
  echo   /blog/food-photography-dubai-2026
  echo   /blog/event-photography-dubai-2026
  echo   /blog/event-videography-dubai-2026
  echo   /blog/music-video-production-dubai-2026
  echo.
  echo Submit these to GSC after Vercel build completes.
) else (
  echo PUSH FAILED - Exit code: !PUSH_RESULT!
  echo Try running: git push origin main --force
)
echo.
pause
endlocal
