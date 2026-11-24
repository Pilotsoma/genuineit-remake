/**
 * Company-wide facts. Update contact details here once and every page,
 * the footer, structured data and the PHP form handler config follow.
 * Source: genuineitllc.com footer and /contact.php (retrieved 2026-11-24).
 * Status: pending owner verification — see docs/owner-approval-required.md.
 */
export const site = {
  name: "GenuineIT LLC",
  shortName: "GenuineIT",
  legalName: "GenuineIT LLC",
  tagline: "Technology. Talent. Transformation.",
  /** from the official logo artwork */
  logoTagline: "A Guaranteed Commitment to Deliver Desired Results",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://genuineitllc.com").replace(/\/$/, ""),
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "/api/inquiry.php",
  description:
    "GenuineIT LLC provides enterprise IT consulting, staff augmentation, application development, cloud services and technology solutions from Houston, Texas.",
  address: {
    street: "9894 Bissonnet Street",
    suite: "Suite 827",
    city: "Houston",
    region: "TX",
    postalCode: "77036",
    country: "United States",
    countryCode: "US",
  },
  /** Mailing address as printed in the legacy job postings — keep verbatim for legal text */
  jobMailingAddress: "GenuineIT, 9894 Bissonnet St., # 827, Houston, TX 77036.",
  phone: { display: "+1 713-230-8558", href: "tel:+17132308558" },
  email: { general: "info@genuineitllc.com", careers: "careers@genuineitllc.com" },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=9894+Bissonnet+St+%23827%2C+Houston%2C+TX+77036",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/genuine-itllc" },
    { label: "Facebook", href: "https://www.facebook.com/pages/Genuine-It/1462392847356700" },
    { label: "X (Twitter)", href: "https://twitter.com/gitconsultin" },
  ],
  /** "Copyright © 2009" on the legacy site — kept as the copyright start year only */
  copyrightStartYear: 2009,
} as const;

export const documents = {
  brochure: { title: "Corporate Brochure", href: "/images/docs/git-brocture.pdf", size: "PDF" },
  flyer: { title: "Company Flyer", href: "/images/GenuineIT-Flyer.pdf", size: "PDF" },
} as const;
