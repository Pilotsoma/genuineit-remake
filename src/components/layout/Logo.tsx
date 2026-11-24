import Link from "next/link";
import { site } from "@/content/site";

/**
 * Official GenuineIT logo supplied by the owner (public/images/brand/genuineit-logo.png,
 * 659×152, transparent background). The "Genuine" wordmark and tagline are white, so the
 * logo must only be placed on dark (navy) surfaces — the header and footer are navy for
 * this reason. The artwork is used unmodified at its native proportions.
 * The previous logo (/images/logo.png) is kept on disk only so its legacy URL still resolves.
 */
export const LOGO = { src: "/images/brand/genuineit-logo.png", width: 659, height: 152 } as const;

export function Logo({ className = "", priority = false, size = "md" }: { className?: string; priority?: boolean; size?: "md" | "lg" }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label={`${site.name} — home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO.src}
        alt="GenuineIT — making it happen"
        width={LOGO.width}
        height={LOGO.height}
        className={size === "lg" ? "h-[52px] w-auto sm:h-[60px]" : "h-[40px] w-auto sm:h-[46px]"}
        fetchPriority={priority ? "high" : undefined}
      />
    </Link>
  );
}
