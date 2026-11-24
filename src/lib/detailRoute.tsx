import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/sections/DetailTemplate";
import { catalog, findPage, type Section } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

/** Shared implementation for /services/[slug], /solutions/[slug] and /industries/[slug]. */
export function detailRoute(section: Section) {
  type Params = { params: Promise<{ slug: string }> };
  return {
    generateStaticParams: () => catalog[section].pages.map((p) => ({ slug: p.slug })),
    generateMetadata: async ({ params }: Params) => {
      const { slug } = await params;
      const page = findPage(section, slug);
      if (!page) return {};
      return pageMetadata({
        title: page.seoTitle ?? (section === "industries" ? `${page.title} IT Services` : page.title),
        description: page.summary,
        path: `/${section}/${slug}/`,
      });
    },
    Page: async function Page({ params }: Params) {
      const { slug } = await params;
      const page = findPage(section, slug);
      if (!page) notFound();
      return <DetailTemplate section={section} page={page} />;
    },
  };
}
