@echo off
echo Pushing Sprint 33B (Image upload button in blog admin)...
git -C "%~dp0." push origin main --force-with-lease
echo.
echo DONE. Check Vercel dashboard for build status.
echo.
echo Blog admin with image upload is live at:
echo   https://www.backyardstudioofficial.com/admin/blog/new
echo.
pause
