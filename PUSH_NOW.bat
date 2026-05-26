@echo off
echo ========================================
echo PUSH ALL CHANGES TO GITHUB
echo ========================================

cd /d "D:\Claude Project\Backyard\backyard-studio"

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
git commit -m "Fix: ESLint config invalid next/typescript — use next/core-web-vitals only"

echo Pushing to GitHub...
git push origin main

echo ========================================
echo DONE! Check Vercel for auto-deploy.
echo ========================================
pause
