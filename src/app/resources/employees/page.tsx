import { ArrowUpRight, Download, CircleExclamationPoint } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { employeeDocuments, employeeLinks } from "@/content/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Employee Resources",
  description: "Forms and links for GenuineIT employees: time card, expense report, leave request, weekly reports and more.",
  path: "/resources/employees/",
  noindex: true,
});

export default function EmployeesPage() {
  return (
    <>
      <PageHero tone="light" eyebrow="Employees" title="Employee resources" lead="Forms and links for GenuineIT employees." crumbs={[{ label: "Resources", href: "/resources/" }, { label: "Employees" }]} />
      <section className="bg-white py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <div className="container-x">
          <p className="flex max-w-3xl gap-3 rounded-[12px] border border-[#f2d9a6] bg-[#fff8eb] p-4 text-[0.92rem] leading-relaxed text-[#6b4700]">
            <CircleExclamationPoint aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            Government forms below are the 2018 versions published on our previous website. Use the current I-9 (uscis.gov), W-4 and
            W-9 (irs.gov) forms unless HR instructs otherwise.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {employeeDocuments.map((d) => (
              <li key={d.href}>
                <a href={d.href} className="group flex min-h-16 items-center justify-between gap-4 rounded-[12px] border border-line p-4 transition-shadow hover:shadow-card">
                  <span className="font-semibold text-ink-900 group-hover:text-blue-600">{d.title}</span>
                  <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-text-subtle">
                    <Download aria-hidden="true" className="size-4" /> {d.type}
                  </span>
                </a>
              </li>
            ))}
            {employeeLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-16 items-center justify-between gap-4 rounded-[12px] border border-line p-4 transition-shadow hover:shadow-card">
                  <span className="font-semibold text-ink-900 group-hover:text-blue-600">{l.title}</span>
                  <ArrowUpRight aria-hidden="true" className="size-4 text-text-subtle" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
