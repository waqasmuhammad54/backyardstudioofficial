@echo off
echo Pushing Sprint 33A (Blog admin panel + dynamic posts + IndexNow update)...
git -C "%~dp0." push origin main --force-with-lease
echo.
echo Running IndexNow ping (546 URLs including 87 new services pages)...
python "%~dp0indexnow_fix.py"
echo.
echo DONE. Check Vercel dashboard for build status.
echo.
echo After deploy, your blog admin is live at:
echo   https://www.backyardstudioofficial.com/admin/blog/new
echo.
echo IMPORTANT: Add GITHUB_TOKEN to Vercel environment variables before publishing posts.
echo   Vercel Dashboard ^> Settings ^> Environment Variables ^> Add GITHUB_TOKEN
echo   Value: your GitHub Personal Access Token (needs repo write permission)
pause
