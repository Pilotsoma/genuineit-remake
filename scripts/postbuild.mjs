// Post-build steps for the static export (out/):
//  - copy the Apache .htaccess (redirects, headers) into out/
//  - verify every LCA PDF referenced by content exists in out/
import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const out = "out";
if (!existsSync(out)) {
  console.error("postbuild: out/ not found");
  process.exit(1);
}
if (existsSync("deploy/apache/.htaccess")) {
  copyFileSync("deploy/apache/.htaccess", join(out, ".htaccess"));
  console.log("postbuild: copied .htaccess");
}
const lca = JSON.parse(readFileSync("src/content/compliance/lca-records.json", "utf8"));
const missing = lca.filter((r) => r.document?.available && !existsSync(join(out, decodeURI(r.document.path))));
if (missing.length) {
  console.error("postbuild: LCA documents missing from export:", missing.map((m) => m.document.path));
  process.exit(1);
}
console.log(`postbuild: ${lca.length} LCA records, all available documents present`);
