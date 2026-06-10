@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
if exist ".git\index.lock" del /f ".git\index.lock"
git add .gitattributes
git add public/backyardstudioofficial2026.txt
git commit -m "Fix: IndexNow key file - no CRLF, force binary in .gitattributes"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Wait for Vercel deploy then run IndexNow again.
) else (
  echo FAILED
)
pause
