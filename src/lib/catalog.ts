import { services, serviceGroups } from "@/content/services";
import { solutions, solutionGroups } from "@/content/solutions";
import { industries, industryGroups } from "@/content/industries";
import type { DetailPage } from "@/types/content";

export type Section = "services" | "solutions" | "industries";

export const catalog: Record<Section, { label: string; singular: string; pages: DetailPage[]; groups: typeof serviceGroups }> = {
  services: { label: "Services", singular: "Service", pages: services, groups: serviceGroups },
  solutions: { label: "Solutions", singular: "Solution", pages: solutions, groups: solutionGroups },
  industries: { label: "Industries", singular: "Industry", pages: industries, groups: industryGroups },
};

export function findPage(section: Section, slug: string) {
  return catalog[section].pages.find((p) => p.slug === slug);
}

export function resolveRelated(page: DetailPage) {
  return (page.related ?? [])
    .map((r) => {
      if (r.section === "services" && r.slug === "it-staffing") {
        return { section: r.section, page: undefined, href: "/services/it-staffing/", title: "IT Staffing & Staff Augmentation", summary: "Technology professionals for contract, project and full-time needs.", icon: "Users" };
      }
      const p = findPage(r.section, r.slug);
      return p ? { section: r.section, page: p, href: `/${r.section}/${p.slug}/`, title: p.title, summary: p.summary, icon: p.icon } : null;
    })
    .filter(Boolean) as { section: Section; href: string; title: string; summary: string; icon?: string }[];
}

export function groupTitle(section: Section, groupId: string) {
  return catalog[section].groups.find((g) => g.id === groupId)?.title ?? "";
}
