@echo off
echo ============================================================
echo  FIX FROM SCRATCH — Admin auth + dynamic posts pipeline
echo ============================================================
cd /d "D:\Claude Project\Backyard\backyard-studio"

:: Clear any lock files
del /f /q ".git\HEAD.lock" 2>nul
del /f /q ".git\refs\heads\main.lock" 2>nul
del /f /q ".git\index.lock" 2>nul

echo.
echo [1/4] Removing conflicting (en) login route...
:: app/(en)/api/admin/login/route.ts resolves to /api/admin/login
:: app/api/admin/login/route.ts ALSO resolves to /api/admin/login
:: (en) wins alphabetically, but returns no token -> admin gets Unauthorized
:: Removing the (en) copy so only the correct root route is served
git rm -f "app/(en)/api/admin/login/route.ts"
echo    Done.

echo.
echo [2/4] Staging updated files...
:: Updated publish route (now also regenerates lib/dynamicPosts.ts on every publish)
git add app/api/admin/publish/route.ts
:: Updated dynamicPosts.ts (inline data, no JSON import — guaranteed to work on Vercel)
git add lib/dynamicPosts.ts
:: Stage the bat file itself
git add FIX_FROM_SCRATCH.bat
echo    Done.

echo.
echo [3/4] Committing...
git commit -m "fix(admin): remove conflicting login route + inline dynamic posts data

ROOT CAUSE 1 — Unauthorized error:
  app/(en)/api/admin/login/route.ts and app/api/admin/login/route.ts
  both resolve to /api/admin/login. The (en) version wins alphabetically
  and returns {success:true} with NO token field. Admin panel stores
  authedToken='' -> publish calls send 'Bearer ' (empty) -> Unauthorized.
  Fix: delete the (en) login route so only the correct root route remains.

ROOT CAUSE 2 — Blog posts 404:
  lib/dynamicPosts.ts used import postsData from '../content/posts.json'
  but Vercel's webpack build cache served the old fs.readFileSync version,
  so getDynamicPosts() always returned []. 14 posts were invisible.
  Fix: inline all post data directly as a TypeScript literal in dynamicPosts.ts.
  No JSON import, no fs.readFileSync — data is compiled directly into the bundle.

FUTURE-PROOF:
  app/api/admin/publish/route.ts now regenerates lib/dynamicPosts.ts on
  every admin publish, so new posts automatically appear after Vercel rebuilds."

echo.
echo [4/4] Pushing to GitHub (triggers Vercel deploy)...
git push origin main

echo.
echo ============================================================
echo  Done! Vercel will rebuild in ~2 minutes.
echo.
echo  After rebuild (check Vercel dashboard), verify:
echo  Blog post: https://www.backyardstudioofficial.com/blog/comparing-video-production-agencies-in-the-uae-for-a-product-launch-2026
echo  Admin:     https://www.backyardstudioofficial.com/admin/blog/new
echo ============================================================
pause
