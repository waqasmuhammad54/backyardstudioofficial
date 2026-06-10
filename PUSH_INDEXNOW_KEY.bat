@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
if exist ".git\index.lock" del /f ".git\index.lock"
git add public/backyardstudioofficial2026.txt
git commit -m "Add: IndexNow key file for site verification"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Wait for Vercel to deploy, then run IndexNow again.
  echo Check: https://www.backyardstudioofficial.com/backyardstudioofficial2026.txt
) else (
  echo FAILED - check output above
)
pause
