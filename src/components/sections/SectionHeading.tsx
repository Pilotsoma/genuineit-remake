import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
  action,
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  action?: ReactNode;
  as?: "h2" | "h3";
  id?: string;
}) {
  return (
    <div
      data-reveal
      className={`flex flex-col gap-6 ${align === "center" ? "mx-auto max-w-3xl items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}
    >
      <div className={align === "center" ? "" : "max-w-3xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag id={id} className={`h-section mt-4 ${dark ? "text-white" : "text-ink-900"}`}>
          {title}
        </Tag>
        {text && <p className="lead mt-5">{text}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
