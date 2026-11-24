"use client";

import { useMemo, useState } from "react";
import { FileDown, FileX, Search, X } from "lucide-react";
import type { LcaRecord } from "@/types/content";

/**
 * Searchable LCA directory. All records render server-side in their original order, so the
 * full directory is available without JavaScript; search/filter progressively enhance it.
 * Records are never de-duplicated (serial and LCA numbers repeat in the source).
 */
export function LcaExplorer({ records }: { records: LcaRecord[] }) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const statuses = useMemo(() => Array.from(new Set(records.map((r) => r.status))), [records]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return records.filter((r) => {
      if (status !== "All" && r.status !== status) return false;
      if (!needle) return true;
      return r.lcaNumber.toLowerCase().includes(needle) || r.title.toLowerCase().includes(needle) || r.serial.toLowerCase().includes(needle);
    });
  }, [records, q, status]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="relative w-full md:max-w-md">
          <label htmlFor="lca-search" className="mb-1.5 block text-[0.88rem] font-semibold text-ink-800">
            Search by LCA number, serial number or job title
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute bottom-3.5 left-4 size-5 text-text-subtle" />
          <input
            id="lca-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="e.g. I-200-25199 or Developer"
            className="block min-h-12 w-full rounded-[10px] border border-line-strong bg-white pl-12 pr-10 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/15"
          />
          {q && (
            <button type="button" onClick={() => setQ("")} className="absolute bottom-1.5 right-2 grid size-9 place-items-center rounded-md text-text-subtle hover:bg-mist" aria-label="Clear search">
              <X aria-hidden="true" className="size-4" />
            </button>
          )}
        </div>
        {statuses.length > 1 && (
          <div>
            <label htmlFor="lca-status" className="mb-1.5 block text-[0.88rem] font-semibold text-ink-800">
              Status
            </label>
            <select id="lca-status" value={status} onChange={(e) => setStatus(e.target.value)} className="min-h-12 rounded-[10px] border border-line-strong bg-white px-4">
              <option>All</option>
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <p aria-live="polite" className="mt-5 text-[0.9rem] text-text-subtle">
        Showing {results.length} of {records.length} records
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-[14px] border border-dashed border-line-strong bg-white p-10 text-center">
          <p className="font-display text-lg font-bold text-ink-900">No records match “{q}”.</p>
          <button type="button" onClick={() => setQ("")} className="mt-3 font-semibold text-blue-600 link-u">
            Clear search
          </button>
        </div>
      ) : (
        <>
          {/* Desktop / tablet table */}
          <div className="relative mt-6 hidden overflow-x-auto rounded-[14px] border border-line bg-white md:block">
            <table className="w-full min-w-[860px] border-collapse text-left text-[0.92rem]">
              <caption className="sr-only">Labor Condition Applications — {results.length} records</caption>
              <thead className="bg-platinum text-[0.76rem] uppercase tracking-[0.1em] text-text-muted">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-semibold">S.No</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">LCA Number</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Title</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">End Client Location</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {results.map((r) => (
                  <tr key={r.id} className="align-top hover:bg-blue-50/50">
                    <th scope="row" className="whitespace-nowrap px-4 py-3.5 font-semibold text-ink-900">{r.serial}</th>
                    <td className="whitespace-nowrap px-4 py-3.5 font-mono text-[0.86rem] text-ink-800">{r.lcaNumber}</td>
                    <td className="px-4 py-3.5 text-ink-800">{r.title}</td>
                    <td className="px-4 py-3.5 text-text-muted">{r.location}</td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={r.status} />
                    </td>
                    <td className="px-4 py-3.5">
                      <DocLink r={r} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <ul className="mt-6 grid gap-3 md:hidden">
            {results.map((r) => (
              <li key={r.id} className="rounded-[14px] border border-line bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-ink-900">{r.serial}</p>
                  <StatusBadge status={r.status} />
                </div>
                <p className="mt-1 font-display text-[1.05rem] font-bold text-ink-900">{r.title}</p>
                <dl className="mt-3 space-y-2 text-[0.9rem]">
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-text-subtle">LCA Number</dt>
                    <dd className="font-mono text-ink-800">{r.lcaNumber}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-text-subtle">End Client Location</dt>
                    <dd className="text-text-muted">{r.location}</dd>
                  </div>
                </dl>
                <div className="mt-4">
                  <DocLink r={r} />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#e7f6ee] px-2.5 py-1 text-[0.78rem] font-semibold text-success ring-1 ring-success/20">{status}</span>
  );
}

function DocLink({ r }: { r: LcaRecord }) {
  if (r.document?.available) {
    return (
      <a
        href={encodeURI(r.document.path)}
        target="_blank"
        rel="noopener"
        className="inline-flex min-h-10 items-center gap-2 rounded-[8px] bg-blue-600 px-3 text-[0.85rem] font-semibold text-white hover:bg-blue-700"
      >
        <FileDown aria-hidden="true" className="size-4" /> PDF
        <span className="sr-only">for LCA {r.lcaNumber} (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle" title="The linked document returned “not found” on the legacy website.">
      <FileX aria-hidden="true" className="size-4" /> Document pending
    </span>
  );
}
