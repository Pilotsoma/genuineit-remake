import type { ClientLogo } from "@/types/content";

/**
 * Third-party logos are displayed with their original artwork and colours (no filters or
 * recolouring) inside uniform containers, preserving each image's aspect ratio.
 */
export function ClientLogoGrid({ logos, className = "", compact = false }: { logos: ClientLogo[]; className?: string; compact?: boolean }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-3 ${
        compact ? "md:grid-cols-4 lg:grid-cols-6" : "md:grid-cols-4 xl:grid-cols-5"
      } ${className}`}
    >
      {logos.map((l) => (
        <li key={l.id} className="group relative flex items-center justify-center bg-white p-5 sm:p-6" style={{ minHeight: compact ? 104 : 128 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={l.src}
            alt={l.name}
            width={l.width}
            height={l.height}
            loading="lazy"
            decoding="async"
            className="max-h-[64px] w-auto max-w-[78%] object-contain"
          />
          {!compact && (
            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-ink-900/90 px-3 py-1.5 text-center text-[0.72rem] font-medium text-white transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true">
              {l.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
