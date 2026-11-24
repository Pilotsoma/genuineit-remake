// Minimal static server for previewing/testing the export in out/ (Apache-like behaviour):
//  - /path/ -> /path/index.html, unknown paths -> 404.html with status 404
//  - legacy redirects from docs/legacy-redirects.json (301)
//  - POST /api/inquiry.php -> 503 {"error":"not_configured"} (mirrors the PHP handler with no
//    MAIL_TRANSPORT configured; PHP is not executed by this preview server)
// Usage: node scripts/serve-static.mjs [port]
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, createReadStream } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.argv[2] || process.env.PORT || 4173);
const redirects = new Map(JSON.parse(readFileSync("docs/legacy-redirects.json", "utf8")).redirects.map((r) => [r.from, r.to]));
const types = {
  ".html": "text/html; charset=utf-8", ".js": "application/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".woff2": "font/woff2", ".pdf": "application/pdf", ".xml": "application/xml", ".txt": "text/plain",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  let path = decodeURIComponent(url.pathname);
  if (path === "/api/inquiry.php") {
    if (req.method !== "POST") { res.writeHead(405, { Allow: "POST" }); return res.end(); }
    res.writeHead(503, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: false, error: "not_configured" }));
  }
  if (redirects.has(path)) {
    res.writeHead(301, { Location: redirects.get(path) });
    return res.end();
  }
  let file = normalize(join(root, path));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!path.endsWith("/")) { res.writeHead(308, { Location: path + "/" + url.search }); return res.end(); }
    file = join(file, "index.html");
  } else if (!existsSync(file) && existsSync(file + ".html")) {
    file += ".html";
  }
  if (!existsSync(file) || php(file)) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    return createReadStream(join(root, "404.html")).pipe(res);
  }
  res.writeHead(200, { "Content-Type": types[extname(file).toLowerCase()] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Serving out/ on http://localhost:${port}`));

function php(f) {
  return f.endsWith(".php");
}
