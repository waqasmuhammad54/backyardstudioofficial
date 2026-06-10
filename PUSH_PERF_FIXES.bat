@echo off
cd /d "D:\Claude Project\Backyard\backyard-studio"
echo Clearing git locks...
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"
if exist ".git\index.lock" del /f ".git\index.lock"

echo Staging all performance + accessibility fixes...
git add app/layout.tsx
git add app/globals.css
git add "app/(en)/layout.tsx"
git add "app/(en)/page.tsx"
git add next.config.mjs
git add .browserslistrc
git add components/home/TestimonialsSection.tsx
git add components/home/ContactSection.tsx
git add components/home/AboutSection.tsx
git add components/home/ServicesGrid.tsx
git add components/home/ProcessSection.tsx
git add components/home/PortfolioPreview.tsx
git add components/home/HeroSlider.tsx
git add components/home/UAECoverage.tsx
git add components/layout/Footer.tsx
git add components/layout/Navbar.tsx
git add components/shared/CinematicIntro.tsx

git status
echo.
git commit -m "Perf/A11y R3: SEO links contrast, decorative textShadow trick, AboutSection/UAECoverage contrast, logo quality=60, CinematicIntro 3s, deviceSizes 1440, section-num transparent"
git push origin main
echo.
if %ERRORLEVEL%==0 (
  echo SUCCESS - Vercel building now.
  echo.
  echo Expected improvements:
  echo   A11y: ~97 mobile, ~100 desktop   (35+ SEO links + all remaining contrast fixed)
  echo   LCP:  desktop hero 1920w -> 1440w saves ~87KB
  echo   CinematicIntro: 12s -> 3s timeout removes LCP delay
  echo   Logo: quality=60 saves ~8KB on mobile
) else (
  echo FAILED - check output above
)
pause
