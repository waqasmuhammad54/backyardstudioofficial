@echo off
setlocal enabledelayedexpansion
echo ============================================
echo  Backyard Studio -- Push All Updates
echo ============================================
echo.
echo Removing git lock if exists...
if exist ".git\index.lock" del /f ".git\index.lock"
echo.
echo Pushing to GitHub...
git push origin main
set PUSH_RESULT=!ERRORLEVEL!
echo.
if !PUSH_RESULT! == 0 (
  echo SUCCESS! Vercel build starting at https://vercel.com
  echo.
  echo Live pages after build:
  echo   English blog posts:
  echo     /blog/real-estate-videography-dubai-2026
  echo     /blog/drone-photography-dubai-2026
  echo     /blog/brand-film-production-dubai-2026
  echo.
  echo   Arabic site:
  echo     /ar/ - Homepage RTL
  echo     /ar/blog/video-sharikaat-dubai-2026
  echo     /ar/blog/taswiremolak-dubai-2026
  echo     /ar/blog/taswirzifaf-dubai-2026
  echo     /ar/blog/asear-tasswirvideo-dubai-2026
  echo.
  echo   Russian site:
  echo     /ru/ - Homepage
  echo     /ru/blog/korporativnoe-video-dubai-2026
  echo     /ru/blog/semka-nedvizhimosti-dubai-2026
  echo     /ru/blog/svadebnyi-fotograf-dubai-2026
  echo     /ru/blog/stoimost-videosemki-dubai-2026
  echo.
  echo All English URLs unchanged. sitemap.xml updated.
) else (
  echo.
  echo PUSH FAILED. Exit code: !PUSH_RESULT!
  echo Try: git push origin main --force
)
echo.
pause
endlocal
