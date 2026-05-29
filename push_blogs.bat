@echo off
echo ============================================
echo  Backyard Studio — Push All Updates
echo ============================================
echo.
echo Removing git lock if exists...
if exist ".git\index.lock" del /f ".git\index.lock"
echo.
echo Pushing to GitHub (2 new commits)...
git push origin main
echo.
if %ERRORLEVEL% == 0 (
  echo SUCCESS! Vercel build starting at https://vercel.com
  echo.
  echo Commit 1 — New Blog Posts:
  echo  /blog/youtube-video-production-dubai-2026
  echo  /blog/fashion-photography-dubai-2026
  echo.
  echo Commit 2 — Multilingual Site:
  echo  /ar/          Arabic homepage (RTL, Cairo font)
  echo  /ar/services  Arabic services page
  echo  /ar/pricing   Arabic pricing page
  echo  /ar/about     Arabic about page
  echo  /ar/contact   Arabic contact page
  echo  /ar/blog      Arabic blog index
  echo