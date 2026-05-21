@echo off
echo ============================================
echo  Backyard Studio - Pushing to GitHub...
echo ============================================
cd /d "D:\Claude Project\Backyard\backyard-studio"
git init
git config user.email "info@backyardstudioofficial.com"
git config user.name "Backyard Studio Official"
git branch -M main
git add -A
git commit -m "feat: Backyard Studio Official - full production site launch"
git remote remove origin 2>nul
git remote add origin https://waqasmuhammad54:ghp_LE2YdS2FTyIDc6oXi1pdfSf7TQpDKV3hdNfF@github.com/waqasmuhammad54/backyardstudioofficial.git
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo ============================================
echo  DONE! Check GitHub to confirm upload.
echo ============================================
pause
