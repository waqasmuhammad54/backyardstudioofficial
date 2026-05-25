@echo off
title Push Backyard Studio to GitHub
cd /d "D:\Claude Project\Backyard\backyard-studio"

echo ============================================
echo  Backyard Studio - Fix Git + Push to GitHub
echo ============================================
echo.

echo [1/6] Removing broken .git folder...
rmdir /s /q .git

echo [2/6] Initializing fresh git repo on branch main...
git init -b main

echo [3/6] Adding GitHub remote...
git remote add origin https://github.com/waqasmuhammad54/backyardstudioofficial.git

echo [4/6] Fetching existing history from GitHub...
git fetch origin main

echo [5/6] Aligning with remote history...
git reset origin/main

echo [6/6] Staging all changes...
git add -A

echo Committing...
git commit -m "SEO overhaul: blog pages wired, pricing nav, sitemap fixed, CRM system"

echo Pushing to GitHub...
git push origin main

echo.
echo ============================================
echo  DONE! Check GitHub and Vercel will deploy.
echo ============================================
pause
