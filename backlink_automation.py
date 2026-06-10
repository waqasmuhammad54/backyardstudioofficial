#!/usr/bin/env python3
"""Comprehensive Backyard Studio backlink automation — runs on real Chrome CDP."""
import json, urllib.request, ssl, sys, asyncio, time

CDP = 'http://localhost:9222'
SITE = 'https://www.backyardstudioofficial.com'
KEY = 'backyardstudioofficial2026'
PAGES = [SITE, f'{SITE}/services', f'{SITE}/portfolio', f'{SITE}/pricing', f'{SITE}/industries', f'{SITE}/about', f'{SITE}/contact', f'{SITE}/testimonials', f'{SITE}/blog', f'{SITE}/locations']

results = []

# ── PHASE 1: IndexNow ────────────────────────────────────────────────────
print('=== PHASE 1: IndexNow ===')
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Try with non-www host and key on non-www
payloads = [
    {"host": "backyardstudioofficial.com", "key": KEY, "keyLocation": f"https://backyardstudioofficial.com/{KEY}.txt"},
    {"host": "www.backyardstudioofficial.com", "key": KEY, "keyLocation": f"{SITE}/{KEY}.txt"},
]

for pl in payloads:
    data = json.dumps({**pl, "urlList": PAGES[:5]}).encode()
    req = urllib.request.Request('https://api.indexnow.org/indexnow', data=data, headers={'Content-Type': 'application/json; charset=utf-8'})
    try:
        r = urllib.request.urlopen(req, context=ctx, timeout=15)
        body = r.read().decode()[:200]
        results.append(f'IndexNow (host={pl["host"]}): {r.status} — {body}')
    except urllib.error.HTTPError as e:
        results.append(f'IndexNow (host={pl["host"]}): {e.code} — {e.read().decode()[:200]}')
    except Exception as e:
        results.append(f'IndexNow (host={pl["host"]}): ERROR {e}')

# ── PHASE 2: Chrome GSC ──────────────────────────────────────────────────
print('=== PHASE 2: Chrome CDP + GSC ===')

try:
    # Check Chrome
    with urllib.request.urlopen(f'{CDP}/json/list', timeout=5) as f:
        tabs = json.loads(f.read())
    page_tabs = [t for t in tabs if t['type'] == 'page']
    results.append(f'Chrome: {len(page_tabs)} page tabs')
    
    # Try GSC on each tab
    import websockets
    
    for tab in page_tabs[:3]:  # Try first 3 tabs
        ws_url = tab.get('webSocketDebuggerUrl')
        if not ws_url:
            continue
        
        try:
            async def try_gsc():
                async with websockets.connect(ws_url, timeout=15) as ws:
                    # Navigate to GSC inspect
                    gsc = f'https://search.google.com/search-console/inspect?resource_id={SITE}&id={SITE}'
                    await ws.send(json.dumps({'id': 1, 'method': 'Page.navigate', 'params': {'url': gsc}}))
                    await asyncio.sleep(5)
                    
                    # Check if signed in
                    await ws.send(json.dumps({'id': 2, 'method': 'Runtime.evaluate', 'params': {'expression': '''
                        (() => {
                            const title = document.title;
                            const needsSignin = (document.body?.innerText || '').includes('Sign in');
                            const btns = [...document.querySelectorAll('button, [role="button"]')];
                            const requestBtn = btns.find(b => (b.textContent||'').match(/request.indexing/i));
                            return {
                                title,
                                needsSignin,
                                hasRequestBtn: !!requestBtn,
                                url: window.location.href.substring(0, 80)
                            };
                        })()
                    ''', 'returnByValue': True}}))
                    resp = json.loads(await asyncio.wait_for(ws.recv(), timeout=10))
                    info = resp.get('result', {}).get('result', {}).get('value', {})
                    results.append(f'GSC tab "{tab["title"][:40]}": {json.dumps(info)}')
                    
                    if info.get('needsSignin'):
                        return
                    
                    # Click REQUEST INDEXING for all pages
                    for idx, page_url in enumerate(PAGES):
                        gsc_url = f'https://search.google.com/search-console/inspect?resource_id={SITE}&id={page_url}'
                        await ws.send(json.dumps({'id': 10+idx, 'method': 'Page.navigate', 'params': {'url': gsc_url}}))
                        await asyncio.sleep(3)
                        
                        await ws.send(json.dumps({'id': 20+idx, 'method': 'Runtime.evaluate', 'params': {'expression': '''
                            (() => {
                                const btns = [...document.querySelectorAll('button, [role="button"]')];
                                for (const b of btns) {
                                    if ((b.textContent||'').match(/request.indexing/i)) {
                                        b.click();
                                        return {clicked: true, page: window.location.href.substring(0, 80)};
                                    }
                                }
                                return {clicked: false};
                            })()
                        ''', 'returnByValue': True}}))
                        try:
                            resp = json.loads(await asyncio.wait_for(ws.recv(), timeout=8))
                            click_info = resp.get('result', {}).get('result', {}).get('value', {})
                            results.append(f'GSC page {idx+1}/{len(PAGES)}: {click_info}')
                        except:
                            results.append(f'GSC page {idx+1}/{len(PAGES)}: timeout')
                    
                    return
            
            asyncio.run(try_gsc())
            break  # Successfully used one tab
        except Exception as e:
            results.append(f'Chrome tab error: {e}')
            continue

except Exception as e:
    results.append(f'Chrome connection error: {e}')

# ── OUTPUT ────────────────────────────────────────────────────────────────
print('\n'.join(results))
