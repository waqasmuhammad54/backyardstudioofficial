import json, urllib.request, ssl, sys, asyncio, websockets

CDP = 'http://localhost:9222'
SITE = 'https://www.backyardstudioofficial.com'
PAGES = [SITE, f'{SITE}/services', f'{SITE}/portfolio', f'{SITE}/pricing',
         f'{SITE}/industries', f'{SITE}/about', f'{SITE}/contact', f'{SITE}/testimonials']

ctx = ssl.create_default_context()
ctx.check_hostname = False  
ctx.verify_mode = ssl.CERT_NONE

# First: IndexNow
print("=== INDEXNOW ===")
data = json.dumps({
    "host": "www.backyardstudioofficial.com",
    "key": "backyardstudioofficial2026", 
    "keyLocation": f"{SITE}/backyardstudioofficial2026.txt",
    "urlList": PAGES[:4]
}).encode()
req = urllib.request.Request('https://api.indexnow.org/indexnow', data=data,
    headers={'Content-Type': 'application/json; charset=utf-8'})
try:
    r = urllib.request.urlopen(req, context=ctx, timeout=15)
    print(f"Batch 1: {r.status} - {r.read().decode()[:200]}")
except Exception as e:
    print(f"Batch 1: {e}")

data2 = json.dumps({
    "host": "www.backyardstudioofficial.com",
    "key": "backyardstudioofficial2026",
    "keyLocation": f"{SITE}/backyardstudioofficial2026.txt",
    "urlList": PAGES[4:]
}).encode()
req2 = urllib.request.Request('https://api.indexnow.org/indexnow', data=data2,
    headers={'Content-Type': 'application/json; charset=utf-8'})
try:
    r2 = urllib.request.urlopen(req2, context=ctx, timeout=15)
    print(f"Batch 2: {r2.status} - {r2.read().decode()[:200]}")
except Exception as e:
    print(f"Batch 2: {e}")

# Now Chrome CDP + GSC
print("\n=== CHROME CDP + GSC ===")
try:
    with urllib.request.urlopen(f'{CDP}/json/list', timeout=5) as f:
        tabs = json.loads(f.read())
    print(f"Tabs: {len(tabs)}")
    
    page_tabs = [t for t in tabs if t['type'] == 'page']
    print(f"Page tabs: {len(page_tabs)}")
    
    for tab in page_tabs[:1]:
        ws = tab.get('webSocketDebuggerUrl')
        if not ws:
            continue
        
        async def do_gsc():
            async with websockets.connect(ws) as w:
                # Navigate to GSC
                await w.send(json.dumps({'id':1,'method':'Page.navigate',
                    'params':{'url':f'https://search.google.com/search-console/inspect?resource_id={SITE}&id={SITE}'}}))
                await asyncio.sleep(5)
                
                # Check page
                await w.send(json.dumps({'id':2,'method':'Runtime.evaluate',
                    'params':{'expression':'document.title','returnByValue':True}}))
                resp = json.loads(await asyncio.wait_for(w.recv(), timeout=10))
                title = resp.get('result',{}).get('result',{}).get('value','')
                print(f"GSC title: {title}")
                
                if 'Sign in' in str(title):
                    # Try to sign in
                    await w.send(json.dumps({'id':3,'method':'Runtime.evaluate',
                        'params':{'expression':'''
                            (()=>{
                                const inp = document.querySelector('input[type="email"]');
                                if(inp) { inp.value = "backyardstudioofficial@gmail.com"; return "typed_email"; }
                                return "no_email_field";
                            })()
                        ''','returnByValue':True}}))
                    resp = json.loads(await asyncio.wait_for(w.recv(), timeout=10))
                    print(f"Sign in attempt: {resp.get('result',{}).get('result',{}).get('value','')}")
        
        asyncio.run(do_gsc())
        
except Exception as e:
    print(f"Chrome error: {e}")

print("\nDONE")
