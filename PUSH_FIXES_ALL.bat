@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
echo Clearing git locks...
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\index.lock" del /f ".git\index.lock"

echo Staging all fixes...
git add app/sitemap.ts
git add app/ru/blog/fotografiya-edy-dubai-2026/page.tsx
git add app/ru/blog/fotosyomka-feropriiatiy-dubai-2026/page.tsx
git add app/ru/blog/rily-socsietey-dubai-2026/page.tsx
git add app/zh/blog/fangchan-paizhao-dubai-2026/page.tsx
git add app/zh/blog/shejiao-meiti-neirong-dubai-2026/page.tsx
git add app/zh/blog/qiye-shipin-dubai-2026/page.tsx
git add app/zh/blog/huodong-paizhao-dubai-2026/page.tsx
git add app/zh/blog/meishi-paizhao-dubai-2026/page.tsx
git add app/ar/blog/page.tsx
git add app/ru/blog/page.tsx
git add app/zh/blog/page.tsx

git status
echo.
git commit -m "Fix: add Article schema + real images to RU/ZH posts, fix meta desc, update sitemap (13 new URLs), commit blog index pages"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Vercel building now.
  echo.
  echo Changes pushed:
  echo   - Article schema added to all 5 ZH blog posts
  echo   - Real Unsplash images on all 8 RU/ZH posts
  echo   - RU food description fixed (was 158 chars, now ~140)
  echo   - sitemap.ts: +6 AR, +3 RU, +4 ZH new URLs
  echo   - AR/RU/ZH blog index pages committed
) else (
  echo FAILED - check output above
)
pause
