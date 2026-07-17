@echo off
echo ============================================================
echo  PUSH SEO + BLOG FIXES (2 commits)
echo  8949a0b - fix markdown artifacts in 13 dynamic posts
echo  b6a701b - llms.txt update + VideoObject schema + sameAs
echo ============================================================
cd /d "D:\Claude Project\Backyard\backyard-studio"

echo.
echo Pushing 2 commits to GitHub now...
echo.
git push origin main

echo.
if %ERRORLEVEL% EQU 0 (
  echo ============================================================
  echo  PUSHED! Vercel will rebuild in ~2 minutes.
  echo.
  echo  Verify these blog posts render cleanly (no # * - artifacts):
  echo  https://www.backyardstudioofficial.com/blog/comparing-video-production-agencies-in-the-uae-for-a-product-launch-2026
  echo  https://www.backyardstudioofficial.com/blog/corporate-videography-uae-pricing-process-booking-guide-2026
  echo  https://www.backyardstudioofficial.com/blog/social-media-video-production-uae-pricing-process-strategy-guide-2026
  echo.
  echo  Then verify llms.txt updated:
  echo  https://www.backyardstudioofficial.com/llms.txt
  echo ============================================================
) else (
  echo ERROR: Push failed. Try: git push origin main
)
pause
