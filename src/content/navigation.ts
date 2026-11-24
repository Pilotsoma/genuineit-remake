import { services, serviceGroups } from "./services";
import { solutions, solutionGroups } from "./solutions";
import { industries, industryGroups } from "./industries";

export type NavLink = { label: string; href: string; description?: string };
export type NavColumn = { title: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href: string;
  /** mega menu columns */
  columns?: NavColumn[];
  feature?: { eyebrow: string; title: string; text: string; href: string; cta: string };
};

const short = (text: string, max = 78) => (text.length > max ? text.slice(0, text.lastIndexOf(" ", max)) + "…" : text);

const serviceColumns: NavColumn[] = [
  {
    title: "Talent & Staffing",
    links: [
      { label: "IT Staffing & Staff Augmentation", href: "/services/it-staffing/", description: "Contract, project and full-time technology talent." },
      ...services
        .filter((s) => s.group === "talent")
        .map((s) => ({ label: s.navTitle ?? s.title, href: `/services/${s.slug}/`, description: short(s.summary) })),
    ],
  },
  ...serviceGroups
    .filter((g) => g.id !== "talent")
    .map((g) => ({
      title: g.title,
      links: services.filter((s) => s.group === g.id).map((s) => ({ label: s.navTitle ?? s.title, href: `/services/${s.slug}/` })),
    })),
];

export const mainNav: NavItem[] = [
  {
    label: "Company",
    href: "/company/about/",
    columns: [
      {
        title: "About GenuineIT",
        links: [
          { label: "About GenuineIT", href: "/company/about/", description: "Houston-headquartered IT consulting and staffing." },
          { label: "Mission, Vision & Values", href: "/company/mission-values/", description: "How we execute and how we behave." },
          { label: "Technology Expertise", href: "/company/technology-expertise/", description: "Platforms our consultants work in." },
          { label: "Why GenuineIT", href: "/company/why-genuineit/", description: "The strengths behind our delivery." },
          { label: "Clients & Partners", href: "/company/clients-partners/", description: "Organizations we supply IT resources to." },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Corporate Resources", href: "/resources/" },
          { label: "Testimonials", href: "/company/testimonials/" },
          { label: "LCA Notices", href: "/compliance/lca/" },
          { label: "Employee Resources", href: "/resources/employees/" },
        ],
      },
    ],
    feature: {
      eyebrow: "Our promise",
      title: "A Guaranteed Commitment to Deliver Desired Results",
      text: "The line on our logo explains everything about our company.",
      href: "/company/about/",
      cta: "Discover GenuineIT",
    },
  },
  {
    label: "Services",
    href: "/services/",
    columns: serviceColumns,
    feature: {
      eyebrow: "Core offering",
      title: "IT Staffing & Staff Augmentation",
      text: "Experienced technology professionals for difficult-to-fill positions, project work and temporary spikes.",
      href: "/services/it-staffing/",
      cta: "Request talent",
    },
  },
  {
    label: "Solutions",
    href: "/solutions/",
    columns: solutionGroups.map((g) => ({
      title: g.title,
      links: solutions.filter((s) => s.group === g.id).map((s) => ({ label: s.navTitle ?? s.title, href: `/solutions/${s.slug}/`, description: short(s.summary, 64) })),
    })),
  },
  {
    label: "Industries",
    href: "/industries/",
    columns: industryGroups.map((g) => ({
      title: g.title,
      links: industries.filter((s) => s.group === g.id).map((s) => ({ label: s.navTitle ?? s.title, href: `/industries/${s.slug}/` })),
    })),
  },
  { label: "Clients & Partners", href: "/company/clients-partners/" },
  { label: "Careers", href: "/careers/" },
];

export const footerNav: NavColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About GenuineIT", href: "/company/about/" },
      { label: "Mission, Vision & Values", href: "/company/mission-values/" },
      { label: "Technology Expertise", href: "/company/technology-expertise/" },
      { label: "Why GenuineIT", href: "/company/why-genuineit/" },
      { label: "Clients & Partners", href: "/company/clients-partners/" },
      { label: "Testimonials", href: "/company/testimonials/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "IT Staffing", href: "/services/it-staffing/" },
      { label: "Professional Services", href: "/services/professional-services/" },
      { label: "Application Development", href: "/services/application-development/" },
      { label: "Application Integration", href: "/services/application-integration/" },
      { label: "Cloud Services", href: "/services/cloud-services/" },
      { label: "Quality Assurance", href: "/services/quality-assurance/" },
      { label: "All services", href: "/services/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      ...solutions.slice(0, 6).map((s) => ({ label: s.navTitle ?? s.title, href: `/solutions/${s.slug}/` })),
      { label: "All solutions", href: "/solutions/" },
    ],
  },
  {
    title: "Industries",
    links: [
      ...industries.slice(0, 6).map((s) => ({ label: s.navTitle ?? s.title, href: `/industries/${s.slug}/` })),
      { label: "All industries", href: "/industries/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Careers", href: "/careers/" },
      { label: "LCA Notices", href: "/compliance/lca/" },
      { label: "Corporate Resources", href: "/resources/" },
      { label: "Employee Resources", href: "/resources/employees/" },
      { label: "Contact", href: "/contact/" },
      { label: "Disclaimer", href: "/legal/disclaimer/" },
    ],
  },
];
