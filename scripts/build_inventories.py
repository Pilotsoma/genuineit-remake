"""Build docs/content-inventory.json and docs/asset-inventory.json from the legacy crawl.

Usage: python -I scripts/build_inventories.py legacy-mirror .
"""
import json
import os
import sys

MIRROR, ROOT = sys.argv[1], sys.argv[2]
crawl = json.load(open(os.path.join(MIRROR, "crawl.json")))
extracted = json.load(open(os.path.join(MIRROR, "extracted.json"), encoding="utf-8"))
redirects = {r["from"]: r["to"] for r in json.load(open(os.path.join(ROOT, "docs", "legacy-redirects.json")))["redirects"]}

pages = []
for url, rec in sorted(crawl["pages"].items()):
    path = url.replace("https://genuineitllc.com", "") or "/"
    local = os.path.basename(rec.get("local", ""))
    ex = extracted.get(local, {})
    heading = next((b["text"] for b in ex.get("blocks", []) if b["tag"] in ("h3", "h1")), None)
    words = sum(len(b["text"].split()) for b in ex.get("blocks", []))
    dest = "/" if path in ("/", "/index.php") else redirects.get(path)
    status = "migrated" if dest else ("not-migrated" if rec["status"] != 200 else "review")
    note = None
    if path == "/gitdocs/":
        status, note = "out-of-scope", "Sign-in area (employees/clients/vendors/associates). Returned HTTP 500 during audit; not crawled further, no authentication attempted. Left untouched by redirects."
    pages.append({
        "legacyUrl": url,
        "path": path,
        "httpStatus": rec["status"],
        "title": ex.get("title"),
        "heading": heading,
        "metaDescription": ex.get("description"),
        "approxWords": words,
        "images": [i["src"] for i in ex.get("images", [])],
        "newUrl": dest,
        "status": status,
        "note": note,
    })

json.dump({"source": "https://genuineitllc.com (crawled 2026-11-24)", "pageCount": len(pages), "pages": pages},
          open(os.path.join(ROOT, "docs", "content-inventory.json"), "w", encoding="utf-8"), indent=2, ensure_ascii=False)

assets = []
for url, rec in sorted(crawl["assets"].items()):
    path = url.replace("https://genuineitllc.com", "")
    ext = path.rsplit(".", 1)[-1].lower() if "." in path.rsplit("/", 1)[-1] else ""
    kind = {"pdf": "document", "xlsx": "document", "docx": "document", "css": "code", "js": "code"}.get(ext, "image" if ext in ("png", "jpg", "jpeg", "gif", "ico", "svg") else "other")
    public = os.path.join(ROOT, "public", *path.lstrip("/").split("/"))
    retained = os.path.exists(public)
    if kind == "code" or "captcha.php" in path:
        disposition = "retired (replaced by new build)"
    elif retained:
        disposition = "retained at original URL"
    elif rec["status"] != 200:
        disposition = "missing at source (HTTP %s)" % rec["status"]
    else:
        disposition = "not reused (legacy design asset)"
    assets.append({"url": url, "type": kind, "httpStatus": rec["status"], "bytes": rec["bytes"], "disposition": disposition,
                   "license": "GenuineIT-owned (legacy site)" if "git-clients" not in path else "Third-party trademark — displayed as provided on legacy site"})

new_assets = [
    {"path": "/images/brand/genuineit-logo.png", "source": "Supplied by the site owner in the redesign request (2026-11-24); transparent PNG, trimmed only", "license": "GenuineIT-owned"},
    {"path": "/og/genuineit-og.png", "source": "Generated for this project (scripts: scratch og.py) from the official logo", "license": "GenuineIT-owned"},
    {"path": "src/fonts/inter-latin-var.woff2", "source": "@fontsource-variable/inter 5.3.0", "license": "SIL Open Font License 1.1"},
    {"path": "src/fonts/manrope-latin-var.woff2", "source": "@fontsource-variable/manrope 5.3.0", "license": "SIL Open Font License 1.1"},
    {"path": "SVG artwork (NetworkGlobe, PatternArt)", "source": "Original, generated in code for this project", "license": "GenuineIT-owned"},
    {"path": "Icons", "source": "lucide-react 1.69.0", "license": "ISC"},
]
json.dump({"legacyAssetCount": len(assets), "legacyAssets": assets, "newAssets": new_assets,
           "externalLinksFound": crawl["external"]},
          open(os.path.join(ROOT, "docs", "asset-inventory.json"), "w", encoding="utf-8"), indent=2, ensure_ascii=False)

from collections import Counter
print("pages", Counter(p["status"] for p in pages))
print("assets", Counter(a["disposition"] for a in assets))
