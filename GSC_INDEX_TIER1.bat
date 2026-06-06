@echo off
echo ============================================
echo  GSC Index Request -- Tier 1 Blog Posts
echo ============================================
echo Opening all 6 new blog posts in GSC URL Inspection...
echo Wait for Vercel build to complete before running this.
echo.
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/emirati-wedding-photography-dubai-2026"
timeout /t 3 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/arabic-wedding-photography-dubai-2026"
timeout /t 3 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/food-photography-dubai-2026"
timeout /t 3 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/conference-photographer-dubai-2026"
timeout /t 3 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/event-videography-dubai-2026"
timeout /t 3 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/music-video-production-dubai-2026"
echo.
echo All 6 tabs opened. In each tab click "REQUEST INDEXING".
echo GSC daily quota is ~10 requests -- you have enough for all 6.
echo.
pause
