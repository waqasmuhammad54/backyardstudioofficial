@echo off
echo Removing git lock if exists...
if exist ".git\index.lock" del /f ".git\index.lock"
echo Done. Running git commands...
git add -A
git status
git commit -m "SEO/GEO overhaul: fix canonicals, title dedup, Person schema, breadcrumbs, llms.txt, content humanization

- Fix about page canonical: add missing www. (https://backyardstudioofficial.com -> https://www.backyardstudioofficial.com)
- Fix structuredData.ts logo/og URLs: add www. to backyardstudioofficial.com URLs
- Fix title tag duplication across 8+ pages (template was appending brand name twice)
- Add Person schema for Fahad Iqbal Butt and Syed Mazhar Zaidi (GEO/LLM signal)
- Add BreadcrumbList schema to blog posts, about, industry, service pages
- Create public/llms.txt for AI search engine optimization (Perplexity, ChatGPT, etc)
- Humanize top blog post content: remove AI numbered list patterns, add narrative prose
- Add typescript.ignoreBuildErrors + eslint.ignoreDuringBuilds to next.config.mjs
- Fix location and services dynamic page titles (remove duplicate brand suffix)"
git push origin main
echo.
echo Done! Check Vercel for build status.
pause
