"""Build structured data files from the legacy mirror.

Outputs
  src/content/compliance/lca-records.json  - every LCA row from /lca.php, in original order
  docs/archived-job-postings.json          - job postings found inside HTML comments on /careers.php
                                             (not publicly displayed on the legacy site)

Usage: python -I scripts/build_content_data.py <mirror_dir> <project_root>
"""
import html
import json
import os
import re
import sys

MIRROR, ROOT = sys.argv[1], sys.argv[2]


def clean(fragment: str) -> str:
    text = re.sub(r"<[^>]+>", " ", fragment)
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def build_lca():
    src = open(os.path.join(MIRROR, "pages", "lca.php"), encoding="utf-8", errors="ignore").read()
    body = src[src.find("<tbody>"): src.find("</tbody>")]
    records = []
    for order, row in enumerate(re.findall(r"<tr>(.*?)</tr>", body, re.S), start=1):
        cells = [clean(c) for c in re.findall(r"<t[hd][^>]*>(.*?)</t[hd]>", row, re.S)]
        href = re.search(r'href="([^"]+)"', row)
        legacy_path = "/" + href.group(1).lstrip("/") if href else None
        local = os.path.join(ROOT, "public", *legacy_path.lstrip("/").split("/")) if legacy_path else None
        corrected = None
        if legacy_path and not os.path.exists(local):
            # The legacy link for at least one row has a typo; fall back to <LCA number>.pdf if present.
            alt = os.path.join(ROOT, "public", "images", "lca_docs", cells[1] + ".pdf")
            if os.path.exists(alt):
                corrected = "/images/lca_docs/" + cells[1] + ".pdf"
        records.append({
            "id": f"lca-{order:03d}",
            "order": order,
            "serial": cells[0],
            "lcaNumber": cells[1],
            "title": cells[2],
            "location": cells[3],
            "status": cells[4],
            "document": {
                "path": corrected or legacy_path,
                "legacyPath": legacy_path,
                "available": bool(corrected or (local and os.path.exists(local))),
            } if legacy_path else None,
        })
    out = os.path.join(ROOT, "src", "content", "compliance", "lca-records.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    json.dump(records, open(out, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    missing = [r for r in records if not (r["document"] and r["document"]["available"])]
    print(f"LCA records: {len(records)}; documents missing at source: {len(missing)}")


def build_archived_jobs():
    src = open(os.path.join(MIRROR, "pages", "careers.php"), encoding="utf-8", errors="ignore").read()
    jobs = []
    for comment in re.findall(r"<!--(.*?)-->", src, re.S):
        for block in re.split(r'<div class="set">', comment)[1:]:
            title = re.search(r"Job Title\s*:\s*</strong>\s*([^<]+)<", block)
            if not title:
                continue
            openings = re.search(r"No of Openings:\s*</strong>\s*([^<]+)<", block)
            items = [clean(li) for li in re.findall(r"<li>(.*?)</li>", block, re.S)]
            paras = [clean(p) for p in re.findall(r"<p>(.*?)</p>", block, re.S)]
            jobs.append({
                "title": clean(title.group(1)),
                "openings": clean(openings.group(1)) if openings else None,
                "responsibilities": [i for i in items if i],
                "paragraphs": [p for p in paras if p],
                "source": "https://genuineitllc.com/careers.php (inside HTML comment; not displayed)",
            })
    out = os.path.join(ROOT, "docs", "archived-job-postings.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    json.dump(jobs, open(out, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    print(f"Archived (hidden) job postings: {len(jobs)}")


if __name__ == "__main__":
    build_lca()
    build_archived_jobs()
