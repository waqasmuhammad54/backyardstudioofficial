@echo off
echo ============================================
echo  GSC Index Request -- All New Posts
echo  Run AFTER Vercel build completes
echo ============================================
echo.
echo BATCH 1 -- Tier 1 EN posts (6 URLs)
echo Opening 6 Tier 1 posts...
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/emirati-wedding-photography-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/arabic-wedding-photography-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/food-photography-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/conference-photographer-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/event-videography-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/music-video-production-dubai-2026"
echo.
echo GSC daily quota ~10 -- click REQUEST INDEXING in each tab, then close them all.
echo Press any key when done with Batch 1 to open Batch 2...
pause
echo.
echo BATCH 2 -- Tier 2 Wedding Niche EN posts (6 URLs)
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/pakistani-wedding-photographer-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/indian-wedding-photographer-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/desi-wedding-photographer-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/moroccan-wedding-photographer-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/russian-wedding-photographer-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/blog/british-western-wedding-photographer-dubai-2026"
echo.
echo Press any key when done with Batch 2 to open Batch 3 (AR posts)...
pause
echo.
echo BATCH 3 -- AR Tier 1 posts (6 URLs)
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-emirati-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-arabi-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ar/blog/taswir-taaam-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ar/blog/taswir-muatamart-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ar/blog/tasjil-video-faaliyat-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ar/blog/intaj-klip-musiqi-dubai-2026"
echo.
echo Press any key when done with Batch 3 to open Batch 4 (RU posts)...
pause
echo.
echo BATCH 4 -- RU new posts (3 URLs)
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ru/blog/rily-socsietey-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ru/blog/fotosyomka-feropriiatiy-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/ru/blog/fotografiya-edy-dubai-2026"
echo.
echo Press any key when done with Batch 4 to open Batch 5 (ZH posts)...
pause
echo.
echo BATCH 5 -- ZH new posts (5 URLs)
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/zh/blog/fangchan-paizhao-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/zh/blog/shejiao-meiti-neirong-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/zh/blog/qiye-shipin-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/zh/blog/huodong-paizhao-dubai-2026"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/zh/blog/meishi-paizhao-dubai-2026"
echo.
echo All 5 batches done. Total: 26 new URLs submitted.
echo Daily GSC quota is ~10 -- run this over 3 days.
echo.
pause
