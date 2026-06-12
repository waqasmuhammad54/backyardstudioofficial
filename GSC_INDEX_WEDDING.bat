@echo off
echo ============================================
echo  GSC Index Request -- 7 Wedding Pages
echo  For each tab: wait for inspection to load,
echo  then click "REQUEST INDEXING"
echo ============================================
echo.
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/services/wedding-photography"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/services/wedding-videography"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/services/pre-wedding-shoot"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/wedding-packages"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/services/affordable-wedding-photography"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/services/flying-dress-photoshoot"
timeout /t 4 /nobreak >nul
start chrome "https://search.google.com/search-console/inspect?resource_id=sc-domain:backyardstudioofficial.com&id=https://www.backyardstudioofficial.com/services/wedding-photography-abu-dhabi"
echo.
echo All 7 wedding pages opened in Chrome.
echo Click "REQUEST INDEXING" in each tab.
pause
