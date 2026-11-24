/**
 * Corporate resources, certification references and employee documents from the legacy site.
 * File URLs are preserved exactly so existing links keep working.
 */

export const corporateDocuments = [
  {
    title: "Corporate Brochure",
    description: "Two-page overview of GenuineIT services, staffing programs and advantages.",
    href: "/images/docs/git-brocture.pdf",
    type: "PDF",
    bytes: 0,
  },
  {
    title: "Company Flyer",
    description: "One-page summary of GenuineIT staff augmentation services and headquarters contacts.",
    href: "/images/GenuineIT-Flyer.pdf",
    type: "PDF",
    bytes: 0,
  },
];

/**
 * Certification / program references shown in the legacy footer. Shown with their original
 * artwork and links, described neutrally. Current status MUST be confirmed by the owner
 * before they are presented as active certifications.
 */
export const certificationReferences = [
  {
    id: "e-verify",
    title: "E-Verify",
    description: "The legacy site linked to E-Verify and the Training page stated: “We are an E-Verified company.”",
    image: "/images/footer-images/foot-1.png",
    width: 250,
    height: 100,
    href: "https://www.uscis.gov/e-verify",
    linkLabel: "www.uscis.gov/e-verify",
  },
  {
    id: "wbenc",
    title: "WBENC — Women’s Business Enterprise",
    description: "Certified WBENC logo displayed on the legacy site with a link to the Women’s Business Enterprise National Council.",
    image: "/images/footer-images/foot-2.png",
    width: 250,
    height: 100,
    href: "https://www.wbenc.org/",
    linkLabel: "www.wbenc.org",
  },
  {
    id: "mbe",
    title: "Minority Business Enterprise",
    description: "Legacy site label: “Certified Minority Owned Business.”",
    image: "/images/footer-images/foot-3.jpg",
    width: 128,
    height: 91,
    href: null,
    linkLabel: null,
  },
] as const;

/** /employees.php — employee forms and links (2018 versions). */
export const employeeDocuments = [
  { title: "Time Card", href: "/images/docs-2018/GIT-TimeSheet.pdf", type: "PDF" },
  { title: "Mileage Log Sheet", href: "/images/docs-2018/Mileage_logsheet.xlsx", type: "XLSX" },
  { title: "I-9 Form (2018 version)", href: "/images/docs-2018/I9-2018.pdf", type: "PDF", governmentForm: true },
  { title: "GIT Expense Report", href: "/images/docs-2018/GIT_Expense_report.pdf", type: "PDF" },
  { title: "W-4 Form (2018 version)", href: "/images/docs-2018/W4-2018.pdf", type: "PDF", governmentForm: true },
  { title: "W-9 Form (2018 version)", href: "/images/docs-2018/W9-2018.pdf", type: "PDF", governmentForm: true },
  { title: "Leave Request Form", href: "/images/docs-2018/GenuineIT_Leave.pdf", type: "PDF" },
  { title: "GIT Weekly Reports", href: "/images/docs-2018/GIT-weekly-reports.pdf", type: "PDF" },
  { title: "Performance Report (sample)", href: "/images/docs-2018/Performance-Report-Sample.docx", type: "DOCX" },
  { title: "Direct Deposit Form", href: "/images/docs-2018/Direct-Deposit-Form-2018.pdf", type: "PDF" },
];

export const employeeLinks = [{ title: "ADP Login", href: "https://myaccess.adp.com/" }];
