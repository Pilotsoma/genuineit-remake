import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { PatternArt } from "@/components/graphics/PatternArt";

export const metadata = { title: "Page not found", robots: { index: false } };

const popular = [
  { label: "Services", href: "/services/" },
  { label: "IT Staffing", href: "/services/it-staffing/" },
  { label: "Careers", href: "/careers/" },
  { label: "LCA Notices", href: "/compliance/lca/" },
  { label: "Contact", href: "/contact/" },
];

export default function NotFound() {
  return (
    <section className="on-dark relative isolate flex min-h-[80svh] items-center overflow-hidden bg-ink-900 pt-[var(--header-h)] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-60">
        <PatternArt seed="404" variant="contour" className="h-full w-full" />
      </div>
      <div className="container-x py-20">
        <p className="eyebrow">Error 404</p>
        <h1 className="h-page mt-4 max-w-2xl">We couldn’t find that page.</h1>
        <p className="lead mt-5 max-w-xl">
          The page may have moved as part of our new website. Try one of these destinations, or head back to the home page.
        </p>
        <div className="mt-9">
          <LinkButton href="/">Back to home</LinkButton>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2">
          {popular.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="inline-flex min-h-10 items-center rounded-full bg-white/10 px-4 text-sm font-medium ring-1 ring-white/15 hover:bg-white/15">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
