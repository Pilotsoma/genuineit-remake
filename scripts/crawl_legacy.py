"""Crawl the legacy genuineitllc.com site (same host only) and mirror pages + assets.

Usage: python -I scripts/crawl_legacy.py <output_dir>
Writes <output_dir>/pages/*.html, <output_dir>/assets/..., <output_dir>/crawl.json
"""
import json, os, re, sys, time, urllib.parse, urllib.request
from collections import deque
from html.parser import HTMLParser

BASE = "https://genuineitllc.com/"
HOSTS = {"genuineitllc.com", "www.genuineitllc.com"}
UA = "Mozilla/5.0 (compatible; GenuineIT-site-audit/1.0)"
OUT = sys.argv[1]
ASSET_EXT = re.compile(r"\.(png|jpe?g|gif|svg|ico|pdf|webp|docx?|pptx?|xlsx?|css|js|mp4|zip)$", re.I)


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        for k, v in attrs:
            if k in ("href", "src", "data-src", "action") and v:
                self.links.append((tag, k, v.strip()))
            if k == "style" and v and "url(" in v:
                for m in re.findall(r"url\(['\"]?([^'\")]+)", v):
                    self.links.append((tag, "style", m))


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            return r.status, r.geturl(), r.headers.get("Content-Type", ""), r.read()
    except urllib.error.HTTPError as e:
        return e.code, url, e.headers.get("Content-Type", "") if e.headers else "", b""
    except Exception as e:  # noqa
        return -1, url, str(e), b""


def norm(url):
    p = urllib.parse.urlparse(url)
    if p.scheme not in ("http", "https") or p.netloc.lower() not in HOSTS:
        return None
    path = p.path or "/"
    return urllib.parse.urlunparse(("https", "genuineitllc.com", path, "", p.query, ""))


def local_path(url, root):
    p = urllib.parse.urlparse(url)
    path = urllib.parse.unquote(p.path).lstrip("/") or "index.html"
    if path.endswith("/"):
        path += "index.html"
    if p.query:
        path += "__" + re.sub(r"[^A-Za-z0-9=_-]", "_", p.query)
    return os.path.join(root, *path.split("/"))


def main():
    os.makedirs(OUT, exist_ok=True)
    seen, queue = set(), deque([BASE])
    pages, assets, external, failures = {}, {}, set(), []
    edges = []
    while queue:
        url = queue.popleft()
        if url in seen:
            continue
        seen.add(url)
        is_asset = bool(ASSET_EXT.search(urllib.parse.urlparse(url).path))
        status, final, ctype, body = fetch(url)
        time.sleep(0.15)
        rec = {"url": url, "status": status, "final": final, "type": ctype, "bytes": len(body)}
        if status != 200:
            failures.append(rec)
        if is_asset or ("html" not in ctype and status == 200):
            if status == 200:
                lp = local_path(url, os.path.join(OUT, "assets"))
                os.makedirs(os.path.dirname(lp), exist_ok=True)
                open(lp, "wb").write(body)
                rec["local"] = os.path.relpath(lp, OUT)
            assets[url] = rec
            # parse css for url()
            if status == 200 and url.endswith(".css"):
                for m in re.findall(rb"url\(['\"]?([^'\")]+)", body):
                    n = norm(urllib.parse.urljoin(url, m.decode("utf-8", "ignore")))
                    if n and n not in seen:
                        queue.append(n)
            continue
        lp = local_path(url, os.path.join(OUT, "pages"))
        if not lp.endswith((".html", ".php")):
            lp += ".html"
        os.makedirs(os.path.dirname(lp), exist_ok=True)
        open(lp, "wb").write(body)
        rec["local"] = os.path.relpath(lp, OUT)
        pages[url] = rec
        if status != 200:
            continue
        parser = LinkParser()
        try:
            parser.feed(body.decode("utf-8", "ignore"))
        except Exception:
            pass
        rec["links"] = []
        for tag, attr, href in parser.links:
            if href.startswith(("#", "javascript:", "mailto:", "tel:")):
                if href.startswith(("mailto:", "tel:")):
                    rec["links"].append(href)
                continue
            absu = urllib.parse.urljoin(final, href)
            n = norm(absu)
            if n is None:
                if absu.startswith("http"):
                    external.add(absu)
                    rec["links"].append(absu)
                continue
            rec["links"].append(n)
            edges.append((url, n))
            if n not in seen:
                queue.append(n)
        print(f"{status} {url} ({len(queue)} queued)", flush=True)
    json.dump({"pages": pages, "assets": assets, "external": sorted(external), "failures": failures},
              open(os.path.join(OUT, "crawl.json"), "w"), indent=2)
    print("pages", len(pages), "assets", len(assets), "failures", len(failures))


if __name__ == "__main__":
    main()
