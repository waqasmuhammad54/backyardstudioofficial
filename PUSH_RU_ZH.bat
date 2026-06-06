@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
echo Clearing git locks...
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\index.lock" del /f ".git\index.lock"

git add app/ru/blog/page.tsx
git add app/ru/blog/rily-socsietey-dubai-2026
git add app/ru/blog/fotosyomka-feropriiatiy-dubai-2026
git add app/ru/blog/fotografiya-edy-dubai-2026
git add app/zh/blog/page.tsx
git add app/zh/blog/fangchan-paizhao-dubai-2026
git add app/zh/blog/shejiao-meiti-neirong-dubai-2026
git add app/zh/blog/qiye-shipin-dubai-2026
git add app/zh/blog/huodong-paizhao-dubai-2026
git add app/zh/blog/meishi-paizhao-dubai-2026

git commit -m "Add: 3 RU blog posts (reels, events, food) + 5 ZH blog posts (real estate, social media, corporate video, events, food)"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Vercel building now.
  echo.
  echo New RU URLs:
  echo   /ru/blog/rily-socsietey-dubai-2026
  echo   /ru/blog/fotosyomka-feropriiatiy-dubai-2026
  echo   /ru/blog/fotografiya-edy-dubai-2026
  echo.
  echo New ZH URLs:
  echo   /zh/blog/fangchan-paizhao-dubai-2026
  echo   /zh/blog/shejiao-meiti-neirong-dubai-2026
  echo   /zh/blog/qiye-shipin-dubai-2026
  echo   /zh/blog/huodong-paizhao-dubai-2026
  echo   /zh/blog/meishi-paizhao-dubai-2026
) else (
  echo FAILED - try: git push origin main --force
)
pause
