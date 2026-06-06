@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
echo Clearing git locks...
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\index.lock" del /f ".git\index.lock"

echo Staging fixed lib/blogPosts.ts...
git add lib/blogPosts.ts

git commit -m "Fix: move closing ]; to correct position in blogPosts.ts (wedding posts were outside array)"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Vercel will rebuild now.
  echo Build should pass. Check https://vercel.com/dashboard
) else (
  echo FAILED - check git status and try again
)
pause
