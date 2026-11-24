"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive scroll reveal. Content is fully visible without JavaScript; this adds a
 * `js` class and fades `[data-reveal]` elements in as they enter the viewport.
 */
export function RevealController() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("js");
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => {
      // elements already in view on load: show immediately (avoids flash)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) el.classList.add("is-visible");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
