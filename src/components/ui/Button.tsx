import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

const base =
  "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[10px] px-5 py-3 text-[0.95rem] font-semibold tracking-[-0.005em] transition-[background-color,color,box-shadow,transform] duration-200 ease-out active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-blue-600 text-white shadow-[0_8px_24px_-10px_rgb(20_85_217/0.7)] hover:bg-blue-700",
  secondary: "bg-ink-900 text-white hover:bg-ink-800",
  ghost: "text-ink-900 hover:bg-mist",
  light: "bg-white text-ink-900 hover:bg-blue-50",
  "outline-light": "text-white ring-1 ring-inset ring-white/30 hover:bg-white/10 hover:ring-white/60",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

type Props = { href: string; variant?: Variant; children: ReactNode; arrow?: boolean; className?: string } & Omit<
  ComponentProps<"a">,
  "href"
>;

export function LinkButton({ href, variant = "primary", children, arrow = true, className = "", ...rest }: Props) {
  const external = /^(https?:|mailto:|tel:)/.test(href) || /\.(pdf|docx?|xlsx)$/i.test(href);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={buttonClass(variant, className)} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)} {...rest}>
      {inner}
    </Link>
  );
}

export function TextLink({ href, children, className = "", dark = false }: { href: string; children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group/tl inline-flex items-center gap-1.5 font-semibold ${dark ? "text-cyan-400" : "text-blue-600"} ${className}`}
    >
      <span className="link-u">{children}</span>
      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover/tl:translate-x-0.5" />
    </Link>
  );
}
