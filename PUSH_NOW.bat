@echo off
echo ========================================
echo PUSH ALL CHANGES TO GITHUB
echo ========================================

cd /d "D:\Claude Project\Backyard\backyard-studio"

echo Clearing any git lock files...
if exist .git\index.lock del /f /q .git\index.lock
if exist .git\HEAD.lock del /f /q .git\HEAD.lock

echo Removing broken git state...
if exist .git rmdir /s /q .git

echo Initialising fresh git on main...
git init -b main

echo Configuring git identity...
git config user.email "waqasmuhammad54@gmail.com"
git config user.name "Waqas Muhammad"

echo Adding remote...
git remote add origin https://github.com/waqasmuhammad54/backyardstudioofficial.git

echo Fetching remote history...
git fetch origin main

echo Resetting to remote (keeps all local files)...
git reset origin/main --mixed

echo Staging all changes...
git add -A

echo Committing...
git commit -m "feat: Chinese social media content — 4 Xiaohongshu posts, 2 WeChat articles, 5 Zhihu Q&As (WK1+WK2 Chinese track complete)"

echo Pushing to GitHub...
git push origin main

echo ========================================
echo DONE! Check Vercel for auto-deploy.
echo ========================================
pause
