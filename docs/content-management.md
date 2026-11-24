# Updating content

All business content is in `src/content/`. Edit, run `npm run build`, check with `npm start`, run `npm test`, deploy `out/`.

| Change | File | How |
|---|---|---|
| Address, phone, emails, social links | `src/content/site.ts` | Edit once; header, footer, contact pages, schema and job pages update. Also update `MAIL_TO_*` on the server if emails change |
| Service / solution / industry page | `src/content/services.ts`, `solutions.ts`, `industries.ts` | Each page is a `DetailPage` object: `title`, `summary` (cards + meta description), `lead` (hero), `blocks`, `related`, `technologies`. Blocks: `prose`, `list` (variants `check`, `grid`, `numbered`, `pills`, `columns`, `cards`), `quote`, `split` |
| Add a new service | same files | Add an object with a new `slug`, a `group` id and a `legacyPath` (use `""` if none — then remove it from `scripts/generate-redirects.mjs` input or give a real legacy URL). The menu, sitemap, overview grid and route are generated automatically |
| Mega-menu groups | `serviceGroups` / `solutionGroups` / `industryGroups` in the same files; extra links in `src/content/navigation.ts` | |
| Job postings | `src/content/careers.ts` | Copy an entry, give a new stable `id` (`git-job-009`). Keep legal wording exactly as approved. To remove a closed job, delete it **and** add a redirect for its URL to `/careers/` |
| LCA records | `src/content/compliance/lca-records.json` + PDF in `public/images/lca_docs/` | Add a record at the top (records display in file order). Set `document.path` to the PDF URL and `available: true`. `npm run build` fails if an "available" PDF is missing. To restore a "pending" PDF, copy it to the path shown and set `available: true` |
| Brochure / flyer | replace the file in `public/images/...` (keep the name) or edit `src/content/resources.ts` | |
| Client logos | `src/content/clients.ts` + image in `public/images/git-clients/` | Requires owner approval. `orgType` describes the organization, never the relationship |
| Company text, mission, values, tech expertise, testimonials | `src/content/company.ts` | |
| Certification references | `src/content/resources.ts` | |
| Redirects | `scripts/generate-redirects.mjs` (`manual` list) | Regenerated on every build |

`reviewNotes` fields are for editors only (not rendered). Remove a note once the owner has decided.

A headless CMS can replace these files later: components only consume the typed objects in `src/types/content.ts`.
