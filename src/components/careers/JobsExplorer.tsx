"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { JobPosting } from "@/types/content";

export function JobsExplorer({ jobs, categories }: { jobs: JobPosting[]; categories: string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return jobs.filter((j) => {
      if (cat !== "All" && j.category !== cat) return false;
      if (!needle) return true;
      return [j.title, j.category, ...j.skills, ...j.responsibilities].join(" ").toLowerCase().includes(needle);
    });
  }, [jobs, q, cat]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <label htmlFor="job-search" className="sr-only">
            Search positions by title or skill
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-text-subtle" />
          <input
            id="job-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title or skill (e.g. Sitecore, Azure)"
            className="block min-h-12 w-full rounded-[10px] border border-line-strong bg-white pl-12 pr-10 text-[0.98rem] focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/15"
          />
          {q && (
            <button type="button" onClick={() => setQ("")} className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-md text-text-subtle hover:bg-mist" aria-label="Clear search">
              <X aria-hidden="true" className="size-4" />
            </button>
          )}
        </div>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-10 rounded-full px-4 text-[0.88rem] font-semibold transition-colors ${
                cat === c ? "bg-ink-900 text-white" : "bg-white text-ink-800 ring-1 ring-line-strong hover:bg-mist"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 text-[0.9rem] text-text-subtle">
        Showing {results.length} of {jobs.length} positions
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-[14px] border border-dashed border-line-strong bg-white p-10 text-center">
          <p className="font-display text-lg font-bold text-ink-900">No positions match your search.</p>
          <p className="mt-2 text-text-muted">Try a different keyword, or send your resume to careers@genuineitllc.com.</p>
          <button type="button" onClick={() => { setQ(""); setCat("All"); }} className="mt-4 font-semibold text-blue-600 link-u">
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-3">
          {results.map((j) => (
            <li key={j.id}>
              <Link
                href={`/careers/${j.id}/`}
                className="group grid gap-4 rounded-[14px] border border-line bg-white p-6 transition-[border-color,box-shadow] hover:border-blue-600/30 hover:shadow-card md:grid-cols-[1fr_auto] md:items-center md:p-7"
              >
                <div>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-blue-600">{j.category}</p>
                  <h3 className="mt-1.5 font-display text-[1.25rem] font-bold text-ink-900 group-hover:text-blue-700">{j.title}</h3>
                  <p className="mt-1 text-[0.88rem] text-text-subtle">
                    Houston, TX office · {j.openings} opening · Ref. {j.id.toUpperCase()}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {j.skills.slice(0, 6).map((s) => (
                      <li key={s} className="rounded-md bg-platinum px-2.5 py-1 text-[0.8rem] font-medium text-ink-700 ring-1 ring-line">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  View details <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
