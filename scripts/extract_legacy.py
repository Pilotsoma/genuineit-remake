"""Extract main content blocks from mirrored legacy pages into JSON + readable text.

Usage: python -I scripts/extract_legacy.py <mirror_dir>
"""
import json, os, re, sys
from html.parser import HTMLParser
from html import unescape

MIRROR = sys.argv[1]
PAGES = os.path.join(MIRROR, "pages")
START = "<!-- /.header_bottom -->"
END = '<section class="footer-section">'

BLOCK = {"h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "td", "th", "dt", "dd", "label", "option", "button", "caption", "blockquote"}


class Blocks(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.stack, self.buf, self.links, self.imgs = [], [], [], [], []
        self.skip = 0

    def flush(self):
        t = re.sub(r"\s+", " ", "".join(self.buf)).strip()
        if t and self.stack:
            self.out.append({"tag": self.stack[-1], "text": t})
        elif t:
            self.out.append({"tag": "text", "text": t})
        self.buf = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("script", "style"):
            self.skip += 1
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])
        if tag == "img":
            self.imgs.append({"src": a.get("src"), "alt": a.get("alt")})
        if tag == "br":
            self.buf.append(" ")
        if tag in BLOCK:
            self.flush()
            self.stack.append(tag)
        if tag == "tr":
            self.flush()
            self.out.append({"tag": "tr", "text": ""})
        if tag in ("div", "section", "ul", "ol", "table", "form"):
            self.flush()

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self.skip -= 1
        if tag in BLOCK:
            self.flush()
            if tag in self.stack:
                while self.stack and self.stack.pop() != tag:
                    pass
        if tag in ("div", "section", "ul", "ol", "table"):
            self.flush()

    def handle_data(self, data):
        if not self.skip:
            self.buf.append(data)


def main():
    result = {}
    txt = []
    for fn in sorted(f for f in os.listdir(PAGES) if os.path.isfile(os.path.join(PAGES, f))):
        html = open(os.path.join(PAGES, fn), encoding="utf-8", errors="ignore").read()
        title = re.search(r"<title>(.*?)</title>", html, re.S)
        desc = re.search(r'<meta[^>]+name="description"[^>]+content="([^"]*)"', html)
        s = html.find(START)
        e = html.find(END)
        body = html[s + len(START): e if e > 0 else None] if s > 0 else html
        p = Blocks()
        p.feed(body)
        p.flush()
        result[fn] = {"title": unescape(title.group(1).strip()) if title else None,
                      "description": desc.group(1) if desc else None,
                      "blocks": p.out, "links": p.links, "images": p.imgs}
        txt.append(f"\n===== {fn} =====")
        for b in p.out:
            if b["tag"] == "tr":
                txt.append("--row--")
            else:
                txt.append(f"[{b['tag']}] {b['text']}")
        txt.append("IMAGES: " + ", ".join(f"{i['src']}|{i['alt']}" for i in p.imgs))
    json.dump(result, open(os.path.join(MIRROR, "extracted.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    open(os.path.join(MIRROR, "extracted.txt"), "w", encoding="utf-8").write("\n".join(txt))


if __name__ == "__main__":
    main()
