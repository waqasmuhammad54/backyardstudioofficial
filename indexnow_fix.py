import urllib.request
import json

API_KEY = "backyardstudioofficial2026"
HOST = "www.backyardstudioofficial.com"
KEY_LOCATION = f"https://{HOST}/{API_KEY}.txt"

URLS = [
    # English pages
    f"https://{HOST}/",
    f"https://{HOST}/about",
    f"https://{HOST}/services",
    f"https://{HOST}/pricing",
    f"https://{HOST}/contact",
    f"https://{HOST}/blog",
    f"https://{HOST}/testimonials",
    f"https://{HOST}/locations",
    f"https://{HOST}/portfolio",
    # English locations
    f"https://{HOST}/locations/dubai",
    f"https://{HOST}/locations/abu-dhabi",
    f"https://{HOST}/locations/sharjah",
    f"https://{HOST}/locations/ajman",
    f"https://{HOST}/locations/ras-al-khaimah",
    f"https://{HOST}/locations/fujairah",
    f"https://{HOST}/locations/umm-al-quwain",
    # Arabic pages
    f"https://{HOST}/ar/",
    f"https://{HOST}/ar/about",
    f"https://{HOST}/ar/services",
    f"https://{HOST}/ar/pricing",
    f"https://{HOST}/ar/contact",
    f"https://{HOST}/ar/blog",
    f"https://{HOST}/ar/testimonials",
    f"https://{HOST}/ar/locations",
    # Chinese pages
    f"https://{HOST}/zh/",
    f"https://{HOST}/zh/about",
    f"https://{HOST}/zh/services",
    f"https://{HOST}/zh/pricing",
    f"https://{HOST}/zh/contact",
    f"https://{HOST}/zh/blog",
    f"https://{HOST}/zh/testimonials",
    f"https://{HOST}/zh/locations",
    # Russian pages
    f"https://{HOST}/ru/",
    f"https://{HOST}/ru/about",
    f"https://{HOST}/ru/services",
    f"https://{HOST}/ru/pricing",
    f"https://{HOST}/ru/contact",
    f"https://{HOST}/ru/blog",
    f"https://{HOST}/ru/testimonials",
    f"https://{HOST}/ru/locations",
    # EN Blog posts
    f"https://{HOST}/blog/best-production-companies-dubai-2026",
    f"https://{HOST}/blog/how-much-does-video-production-cost-dubai-2026",
    f"https://{HOST}/blog/wedding-photography-dubai-2026",
    f"https://{HOST}/blog/drone-photography-dubai-2026",
    f"https://{HOST}/blog/real-estate-videography-dubai-2026",
    f"https://{HOST}/blog/brand-film-production-dubai-2026",
    f"https://{HOST}/blog/social-media-content-creation-dubai-2026",
    f"https://{HOST}/blog/corporate-photography-dubai-2026",
    f"https://{HOST}/blog/automotive-photography-dubai-2026",
    f"https://{HOST}/blog/hotel-photography-dubai-2026",
    f"https://{HOST}/blog/product-photography-dubai-2026",
    f"https://{HOST}/blog/youtube-video-production-dubai-2026",
    f"https://{HOST}/blog/fashion-photography-dubai-2026",
    # Tier 2 EN blogs
    f"https://{HOST}/blog/indian-wedding-photographer-dubai-2026",
    f"https://{HOST}/blog/arabic-wedding-videographer-dubai-2026",
    f"https://{HOST}/blog/destination-wedding-photographer-dubai-2026",
    f"https://{HOST}/blog/event-photography-dubai-2026",
    f"https://{HOST}/blog/food-photography-dubai-2026",
    f"https://{HOST}/blog/real-estate-photography-dubai-2026",
    f"https://{HOST}/blog/social-media-video-production-dubai-2026",
    f"https://{HOST}/blog/corporate-video-production-dubai-2026",
    f"https://{HOST}/blog/music-video-production-dubai-2026",
    # Tier 3 EN blogs
    f"https://{HOST}/blog/company-profile-video-dubai-2026",
    f"https://{HOST}/blog/testimonial-video-dubai-2026",
    f"https://{HOST}/blog/influencer-content-creator-dubai-2026",
    f"https://{HOST}/blog/downtown-dubai-photographer-2026",
    f"https://{HOST}/blog/restaurant-photography-dubai-2026",
    f"https://{HOST}/blog/luxury-lifestyle-photography-dubai-2026",
    f"https://{HOST}/blog/birthday-party-photographer-dubai-2026",
    f"https://{HOST}/blog/abu-dhabi-photographer-2026",
    f"https://{HOST}/blog/filipino-wedding-photographer-dubai-2026",
    f"https://{HOST}/blog/sports-photography-dubai-2026",
    f"https://{HOST}/blog/green-screen-studio-dubai-2026",
    # RU blogs
    f"https://{HOST}/ru/blog/korporativnoe-video-dubai-2026",
    f"https://{HOST}/ru/blog/semka-nedvizhimosti-dubai-2026",
    f"https://{HOST}/ru/blog/svadebnyi-fotograf-dubai-2026",
    f"https://{HOST}/ru/blog/stoimost-videosemki-dubai-2026",
    f"https://{HOST}/ru/blog/rily-socsietey-dubai-2026",
    f"https://{HOST}/ru/blog/fotosyomka-feropriiatiy-dubai-2026",
    f"https://{HOST}/ru/blog/fotografiya-edy-dubai-2026",
    # ZH blogs
    f"https://{HOST}/zh/blog/hunli-sheying-dubai-2026",
    f"https://{HOST}/zh/blog/wurenji-hangpai-dubai-2026",
    f"https://{HOST}/zh/blog/qiye-shipin-dubai-2026",
    f"https://{HOST}/zh/blog/fangchan-paizhao-dubai-2026",
    f"https://{HOST}/zh/blog/shejiao-meiti-neirong-dubai-2026",
    f"https://{HOST}/zh/blog/huodong-paizhao-dubai-2026",
    f"https://{HOST}/zh/blog/meishi-paizhao-dubai-2026",
]

def submit_indexnow(urls, batch_size=100):
    endpoint = "https://api.indexnow.org/indexnow"
    for i in range(0, len(urls), batch_size):
        batch = urls[i:i+batch_size]
        payload = json.dumps({
            "host": HOST,
            "key": API_KEY,
            "keyLocation": KEY_LOCATION,
            "urlList": batch,
        }).encode("utf-8")
        req = urllib.request.Request(
            endpoint,
            data=payload,
            headers={"Content-Type": "application/json; charset=utf-8"},
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                print(f"Batch {i//batch_size + 1}: HTTP {resp.status} — {len(batch)} URLs submitted")
        except urllib.error.HTTPError as e:
            print(f"Batch {i//batch_size + 1}: HTTP {e.code} — {e.reason}")
        except Exception as e:
            print(f"Batch {i//batch_size + 1}: Error — {e}")

if __name__ == "__main__":
    print(f"Submitting {len(URLS)} URLs to IndexNow...")
    submit_indexnow(URLS)
    print("Done.")
