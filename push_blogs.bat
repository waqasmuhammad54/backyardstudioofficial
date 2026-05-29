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
  echo     /blog/youtube-video-production-dubai-2026
  echo     /blog/fashion-photography-dubai-2026
  echo.
  echo   Arabic site:
  echo     /ar/          - Homepage RTL
  echo     /ar/services  - Services
  echo     /ar/pricing   - Pricing
  echo     /ar/about     - About
  echo     /ar/contact   - Contact
  echo     /ar/blog/taswirzifaf-