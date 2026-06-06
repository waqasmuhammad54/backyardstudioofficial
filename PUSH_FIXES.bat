@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
echo Clearing git locks...
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\index.lock" del /f ".git\index.lock"
git add lib/blogPosts.ts GSC_INDEX_TIER1.bat public/backyardstudioofficial2026.txt app/ar/blog/page.tsx app/ar/blog/taswir-zifaf-emirati-dubai-2026 app/ar/blog/taswir-zifaf-arabi-dubai-2026 app/ar/blog/taswir-taaam-dubai-2026 app/ar/blog/taswir-muatamart-dubai-2026 app/ar/blog/tasjil-video-faaliyat-dubai-2026 app/ar/blog/intaj-klip-musiqi-dubai-2026
git commit -m "Add: 6 AR Tier 1 blog posts + 6 EN wedding niche posts (Pakistani/Indian/Desi/Moroccan/Russian/British) + fix Tier 1 meta + rename POST 37"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Vercel building now.
  echo.
  echo 6 Live URLs after build:
  echo   /blog/emirati-wedding-photography-dubai-2026
  echo   /blog/arabic-wedding-photography-dubai-2026
  echo   /blog/food-photography-dubai-2026
  echo   /blog/conference-photographer-dubai-2026
  echo   /blog/event-videography-dubai-2026
  echo   /blog/music-video-production-dubai-2026
) else (
  echo FAILED - try: git push origin main --force
)
pause
