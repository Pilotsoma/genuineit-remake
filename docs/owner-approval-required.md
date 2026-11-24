# Owner approval required

Everything listed here is **outdated, ambiguous or unverifiable** information that was found during the audit of
genuineitllc.com (crawled 24 Nov 2026). Nothing below was invented. Each item says what the new site does now, so
you can approve it or send a correction. Items marked **⚖ Legal** need review by authorized company or legal staff
before launch.

## 1. Company facts and contact details

| # | Item | Source | What the new site does | Decision needed |
|---|---|---|---|---|
| 1.1 | Address: 9894 Bissonnet St, Suite 827, Houston, TX 77036 | Footer, /contact.php, brochure ("77036-8229") | Shown site-wide from `src/content/site.ts` | Confirm it is still current |
| 1.2 | Phone: 713-230-8558 (listed as "+001 713-230-8558" on /contact.php) | Footer, /contact.php | Shown as **+1 713-230-8558** with a tap-to-call link | Confirm |
| 1.3 | info@genuineitllc.com, careers@genuineitllc.com | Footer, /careers.php | Used for all contact routes | Confirm both mailboxes are monitored |
| 1.4 | Fax 512-949-5092, contact@genuineitllc.com, plus two named staff emails in the flyer | Brochure / flyer PDFs only | **Not published** on pages (the PDFs are still downloadable) | Confirm whether the PDFs should be updated or retired |
| 1.5 | "Copyright © 2009" | Legacy footer | Footer shows "© 2009–{current year}". **Not** used as a founding date anywhere | Confirm the founding year if you want it shown |
| 1.6 | Tenure claims that conflict: "over 13yrs of IT industry experience" (Company Profile), "more than 15 Years" (IT Outsourcing), "15 years of hands on experience" (Utilities), "for this industry for 15 years" (brochure), "over a decade" (several pages) | Various | **All withheld** — they cannot be dated and contradict each other | Supply one verified statement (e.g. "founded in YYYY") |
| 1.7 | Offices "USA · India · Singapore · Europe" | Brochure header | **Not published** | Confirm current office locations |
| 1.8 | "Global Delivery Centers", "SAP Global Delivery Center", "Microsoft COE", "SOA Center of Excellence", "dedicated testing labs", "secure data center" | Data Mgmt, SAP, MS Dynamics, SOA, QA, Cloud pages | Location/facility claims withheld; COE kept only on SOA page as source text — please confirm | Confirm which facilities exist |
| 1.9 | Social profiles (Facebook page, Twitter @gitconsultin, LinkedIn genuine-itllc) | Legacy header | Linked in the footer | Confirm the accounts are still owned and active |
| 1.10 | `/gitdocs/` "Sign In" area (Employees / Clients / Vendors / Associates) | Legacy menu | Returned **HTTP 500** during the audit. Not linked from the new navigation; not touched by redirects | Is this system still in use? If yes, we will add a link back |

## 2. Logo and brand

| # | Item | What the new site does | Decision needed |
|---|---|---|---|
| 2.1 | New official logo supplied in the request (transparent PNG, white "Genuine" wordmark) | Used in the header, footer, Open Graph image and Organization schema. Because the wordmark is white, the header and footer are always navy | Please supply an **SVG/vector master** and, if available, a dark-on-light variant for light backgrounds and print |
| 2.2 | Old logo `/images/logo.png` | No longer displayed; file kept so the old URL still works | Approve retiring it later |
| 2.3 | Proposed tagline "Technology. Talent. Transformation." | Used as the home page hero headline | Approve |

## 3. Certifications and program references ⚖

| # | Item | What the new site does | Decision needed |
|---|---|---|---|
| 3.1 | "Certified Minority Owned Business" (MBE logo, no link) | Shown as a neutral "program reference", **not** described as a current certification | Provide certificate name, issuing body, number and expiry — or remove |
| 3.2 | WBENC "Certified Women's Business Enterprise" logo linking to wbenc.org | Same neutral treatment | Same — note this is a different certification from MBE |
| 3.3 | "We are an E-Verified company" (Training page) + E-Verify logo | E-Verify logo and link retained; sentence quoted as a past statement | Confirm current E-Verify enrollment |
| 3.4 | "Oracle Certified Implementation Services", "Siebel-certified consultants", "80% Team is Certified" (Salesforce) | Reworded to "implementation services" / "consultants"; the 80% figure withheld | Provide evidence if you want these restored |
| 3.5 | "As a partner of industry-leading technology providers", "partnership with SOA industry leaders", "alliances with best of breed technology providers" | Withheld (no partners named) | Name verified vendor partnerships, if any |

## 4. Clients, partners and testimonials ⚖

| # | Item | What the new site does | Decision needed |
|---|---|---|---|
| 4.1 | 44 logos shown under "Business Partners & Clients: We are partnered with below clients to supply IT resources" | All shown (except 4.2) on /company/clients-partners/, grouped by **organization type** (public sector / enterprise / staffing & IT services). The page states that grouping does not describe the relationship. Original disclaimer kept | Confirm every organization may still be shown, and whether each relationship is direct or via a staffing partner |
| 4.2 | `gitc4.png` — a U.S. flag graphic with no name | **Hidden** pending identification | Identify or remove |
| 4.3 | Logo names were identified visually (e.g. gitc8 = Texas Office of Court Administration, gitc15 = "URI", gitc18 = "BOSS") | Used as alt text | Confirm names |
| 4.4 | 25 logos referenced as `/images/clients/client-1…25` | Already **404 on the legacy server** — could not be migrated | Supply the files if they should appear |
| 4.5 | Flyer: "In May 2010, GIT partnered with all 14 Departments of State of Texas and Texas Concrete"; "direct clients HP, Deloitte, State of Texas, Texas Concrete, Capital One, Progressive"; "clientele include many of Fortune 500 companies" | **Not published** on pages | Confirm before any of this is used |
| 4.6 | /it-services.php text list (GenesisIT, Procom, AgreeYa, … Freddie Mac, JPMorgan Chase & Co., Deloitte Consulting) | Shown on Clients & Partners under the original wording | Confirm |
| 4.7 | Two testimonials ("Micheal J., Project Manager – Autoliv"; "Sammy, Manager – TEXAS CONCRETE") | Kept on /company/testimonials/ only; **not** featured on the home page | Confirm permission to publish and the spelling "Micheal" |

## 5. Careers ⚖

| # | Item | What the new site does | Decision needed |
|---|---|---|---|
| 5.1 | 8 postings displayed on /careers.php, none dated | All 8 migrated as separate postings (two are both titled "Software Developer" and kept separate). Marked "please confirm availability". **No JobPosting structured data** emitted | Confirm which postings are open; send posting/expiry dates to enable Google Jobs markup |
| 5.2 | 46 more postings exist only inside HTML comments on /careers.php (hidden) | **Not published.** Archived verbatim in `docs/archived-job-postings.json` | Confirm they are closed |
| 5.3 | One hidden posting includes a $1,000 employee referral award statement | Archived only | Legal review if it is ever republished |
| 5.4 | Typographical corrections inside postings (see migration report §6) — acronym capitalization only, e.g. "ApI"→"API", "SOAp"→"SOAP", "pyathon"→"Python" | Applied | Confirm no legally material change |
| 5.5 | "We have the following urgent positions Open in our Houston Office" | Reworded so the site does not assert positions are currently open | Confirm |
| 5.6 | Legacy careers page had a résumé upload form (with CAPTCHA) | **Removed** — applications go to careers@ email / postal mail as the postings instruct. No personal files are stored | Approve, or choose an applicant-tracking system |
| 5.7 | Domestic careers Google Form | Linked (opens Google Forms) instead of embedded | Confirm the form is still active |
| 5.8 | Mission page: "We sponsor H-1B work permit visa, GC to consultants and have many US Citizens who work on our W2 payroll" | Preserved on /company/mission-values/ | ⚖ Confirm this immigration/employment statement is accurate and approved |
| 5.9 | Training page: "Competitive Salary Package", "Visa Processing", "Job Support" | Preserved | ⚖ Confirm |

## 6. LCA compliance ⚖

| # | Item | What the new site does | Decision needed |
|---|---|---|---|
| 6.1 | 75 LCA rows (GIT-LCA-82 … GIT-LCA-9), original order | All 75 migrated, not de-duplicated (GIT-LCA-54 appears twice; LCA numbers I-200-25073-775037 and I-200-21055-097284 appear twice) | Confirm duplicates are intentional |
| 6.2 | 5 linked PDFs return **404** on the legacy server: I-200-24026-668946, I-200-21244-560252, I-200-21055-097284, I-200-21061-111264, I-200-20020-263695 | Rows kept; marked "Document pending" | **Supply these 5 PDFs** |
| 6.3 | GIT-LCA-69 linked to a mistyped file name (…-07185.pdf) | Linked to the real file (…-071855.pdf); old URL 301-redirects to it | Confirm |
| 6.4 | Several "End Client Location" values are residential-style addresses with apartment numbers; one PDF filename contains a person's name ("…322447 Ranga LCA certified.pdf") | Shown exactly as published (required for public access) and **not** repeated anywhere else on the site | ⚖ Confirm the public-access approach and whether these documents should remain online (record-retention period) |
| 6.5 | Small footer note added on the LCA page: "For questions about this page, contact GenuineIT LLC, [address], or info@…" | New wording | ⚖ Approve or remove |
| 6.6 | All rows show status "Certified" | Displayed as-is | Confirm statuses are current |

## 7. Legal pages ⚖

| # | Item | What the new site does | Decision needed |
|---|---|---|---|
| 7.1 | /disclaimer.php ends mid-sentence ("…which shall be placed on the") and names "www.ineitllc.com" | Reproduced **verbatim**, including both errors | Supply corrected text |
| 7.2 | Disclaimer says "Our logo is a registered trademark of GenuineIT llc" | Preserved | Confirm the registration |
| 7.3 | No privacy policy exists | None was created. Forms show a short consent line: "I agree that GenuineIT may use the information I provide to respond to this inquiry." | ⚖ Approve the consent wording and decide whether a privacy policy is needed |

## 8. Content that is outdated or doubtful

| # | Item | What the new site does | Decision needed |
|---|---|---|---|
| 8.1 | Numeric performance claims with no source (e.g. "TCO reductions of 20–30%", "cost savings of up to 60%", "TCO slashed by 40% and ROI doubled", "reduces IT budget by 3–4 times", "drive down IT infrastructure cost by as much as 40%", "over 85% of BI implementations fail") | **Withheld.** Each one is listed in that page's `reviewNotes` in `src/content/*.ts` | Provide evidence to restore any of them |
| 8.2 | Text that appears copied from other companies: "With Kennedy Sot, you can…" (Application Integration); "Real Estate & Infrastructure Clients" (Oil & Gas); "Insight Driven Health" (Insurance); consulting-style passages on Communications | Rewritten as neutral GenuineIT statements, or removed | Confirm |
| 8.3 | Discontinued platforms: BlackBerry, Windows Mobile 5–6.5, SharePoint 2003/MOSS 2007, Oracle DB 9i–11g, "500,000 App Store apps", "50,000 Android apps", Google Talk | Pages kept for completeness with an "earlier generation" notice; statistics removed | Refresh, archive or retire these pages |
| 8.4 | Retail page had headings with no content under them ("Methodology", "Best Practices") | Empty headings dropped | Supply the missing content |
| 8.5 | The Prototyping page reused two paragraphs from Sustenance Engineering | Duplicates kept on Sustenance Engineering only | Supply prototyping-specific copy if wanted |
| 8.6 | Brochure products: "BOSS Products Reseller", "HealthIT Products", "eTime card Expense" | Not published as offerings | Confirm whether these exist |
| 8.7 | Employee forms are the **2018** I-9, W-4 and W-9 | Kept at their original URLs; page warns users to get current forms from uscis.gov / irs.gov; page set to `noindex` | Replace or remove the outdated government forms |
| 8.8 | Supporting industries "Aerospace, Automotive, Engineering and Manufacturing, Industrial, Consumer goods" appear only in one sentence | Listed on the Industries page, with no separate pages created | Supply content if dedicated pages are wanted |

## 9. Go-live configuration (not content)

- Choose an email delivery method for the forms (`MAIL_TRANSPORT=resend` with an API key and a verified sender, or `sendmail`) — see `docs/deployment-guide.md`. Until then the forms honestly tell visitors to email or call.
- Confirm HTTPS is active on genuineitllc.com and www, then enable the commented HTTPS/HSTS rules in `.htaccess`.
- Decide whether to add analytics. None is installed.
