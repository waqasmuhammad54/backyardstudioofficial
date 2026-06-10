@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
echo Clearing git locks...
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\index.lock" del /f ".git\index.lock"

echo Staging blog index page updates + bat files...
git add app/ar/blog/page.tsx
git add app/ru/blog/page.tsx
git add app/zh/blog/page.tsx
git add GSC_INDEX_ALL.bat
git add PUSH_BLOGFIX.bat
git add PUSH_FIXES.bat
git add PUSH_RU_ZH.bat

git status
echo.
git commit -m "Update: AR/RU/ZH blog index pages + add deployment bat files"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Vercel building now.
) else (
  echo FAILED - check output above
)
pause
