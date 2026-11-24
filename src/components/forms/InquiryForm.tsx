"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { CircleCheck, Info, LoaderCircle, Send } from "lucide-react";
import { AREAS_OF_INTEREST, ENGAGEMENT_TYPES, inquirySchema, type InquiryType } from "@/lib/inquirySchema";
import { site } from "@/content/site";

type Status = { state: "idle" | "submitting" | "success" | "error"; message?: string };

const fieldCls =
  "block w-full rounded-[10px] border border-line-strong bg-white px-4 py-3 text-[0.98rem] text-ink-900 placeholder:text-text-subtle transition-[border-color,box-shadow] focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/15 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/10";

/**
 * Shared inquiry form. Validates on the client (zod) for fast feedback; the PHP handler
 * re-validates, rate-limits and checks the honeypot/timing fields. The form NEVER shows
 * success unless the server confirms delivery.
 */
export function InquiryForm({
  type,
  defaultArea,
  heading,
  submitLabel = "Send inquiry",
}: {
  type: InquiryType;
  defaultArea?: string;
  heading?: string;
  submitLabel?: string;
}) {
  const uid = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const startedAt = useRef<number>(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const fallbackEmail = site.email.general;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      type,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      area: String(fd.get("area") ?? ""),
      engagement: String(fd.get("engagement") ?? ""),
      roles: String(fd.get("roles") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const parsed = inquirySchema.safeParse(raw);
    const extra: Record<string, string> = {};
    if ((type === "business" || type === "staffing") && !raw.company.trim()) extra.company = "Please enter your company name.";
    if (!parsed.success || Object.keys(extra).length) {
      const found: Record<string, string> = { ...extra };
      if (!parsed.success) for (const issue of parsed.error.issues) found[String(issue.path[0])] ??= issue.message;
      // keep errors in on-screen order so focus lands on the first invalid field
      const order = ["name", "email", "company", "phone", "engagement", "roles", "area", "subject", "message", "consent"];
      const errs: Record<string, string> = {};
      for (const k of order) if (found[k]) errs[k] = found[k];
      setErrors(errs);
      setStatus({ state: "error", message: `Please correct ${Object.keys(errs).length} highlighted field${Object.keys(errs).length > 1 ? "s" : ""}.` });
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus({ state: "submitting" });
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          website: String(fd.get("website") ?? ""), // honeypot
          elapsed: Date.now() - startedAt.current,
        }),
      });
      let data: { ok?: boolean; error?: string; fields?: Record<string, string> } = {};
      try {
        data = await res.json();
      } catch {
        /* non-JSON response */
      }
      if (res.ok && data.ok === true) {
        setStatus({ state: "success" });
        formRef.current?.reset();
        statusRef.current?.focus();
        return;
      }
      if (data.fields) setErrors(data.fields);
      const message =
        res.status === 429
          ? "Too many submissions from your connection. Please wait a few minutes and try again."
          : res.status === 503 || data.error === "not_configured"
            ? `Our online form is temporarily unavailable, so your message was not sent. Please email ${fallbackEmail} or call ${site.phone.display}.`
            : res.status === 422
              ? "Please review the highlighted fields."
              : `We couldn’t send your message. Please try again, or email ${fallbackEmail}.`;
      setStatus({ state: "error", message });
      statusRef.current?.focus();
    } catch {
      setStatus({
        state: "error",
        message: `We couldn’t reach our server, so your message was not sent. Please email ${fallbackEmail} or call ${site.phone.display}.`,
      });
      statusRef.current?.focus();
    }
  }

  if (status.state === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-[16px] border border-success/30 bg-[#effaf4] p-8 outline-none">
        <CircleCheck aria-hidden="true" className="size-9 text-success" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Thank you — your message was sent.</h3>
        <p className="mt-2 text-text-muted">A member of our team will follow up using the contact details you provided.</p>
        <button type="button" onClick={() => setStatus({ state: "idle" })} className="mt-6 font-semibold text-blue-600 link-u">
          Send another message
        </button>
      </div>
    );
  }

  const f = (name: string) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined,
  });
  const Err = ({ name }: { name: string }) =>
    errors[name] ? (
      <p id={`${uid}-${name}-err`} className="mt-1.5 text-[0.86rem] font-medium text-danger">
        {errors[name]}
      </p>
    ) : null;
  const Label = ({ name, children, optional }: { name: string; children: React.ReactNode; optional?: boolean }) => (
    <label htmlFor={`${uid}-${name}`} className="mb-1.5 block text-[0.9rem] font-semibold text-ink-800">
      {children} {optional ? <span className="font-normal text-text-subtle">(optional)</span> : <span aria-hidden="true" className="text-danger">*</span>}
    </label>
  );

  const companyRequired = type === "business" || type === "staffing";

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="relative" aria-labelledby={heading ? `${uid}-h` : undefined}>
      {heading && (
        <h2 id={`${uid}-h`} className="mb-6 font-display text-2xl font-bold text-ink-900">
          {heading}
        </h2>
      )}
      <p className="mb-6 text-[0.88rem] text-text-subtle">
        Fields marked <span className="text-danger">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label name="name">Full name</Label>
          <input {...f("name")} type="text" autoComplete="name" required maxLength={100} className={fieldCls} />
          <Err name="name" />
        </div>
        <div>
          <Label name="email">{type === "business" || type === "staffing" ? "Business email" : "Email"}</Label>
          <input {...f("email")} type="email" autoComplete="email" required maxLength={254} className={fieldCls} />
          <Err name="email" />
        </div>
        <div>
          <Label name="company" optional={!companyRequired}>
            Company name
          </Label>
          <input {...f("company")} type="text" autoComplete="organization" maxLength={150} className={fieldCls} />
          <Err name="company" />
        </div>
        <div>
          <Label name="phone" optional>
            Phone number
          </Label>
          <input {...f("phone")} type="tel" autoComplete="tel" maxLength={25} className={fieldCls} />
          <Err name="phone" />
        </div>

        {type === "staffing" ? (
          <>
            <div>
              <Label name="engagement" optional>
                Engagement type
              </Label>
              <select {...f("engagement")} defaultValue="" className={fieldCls}>
                <option value="">Select…</option>
                {ENGAGEMENT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <Label name="roles" optional>
                Roles or skills needed
              </Label>
              <input {...f("roles")} type="text" maxLength={300} placeholder="e.g. SAP FICO consultant, Java developers" className={fieldCls} />
              <Err name="roles" />
            </div>
          </>
        ) : type !== "partnership" ? (
          <>
            <div>
              <Label name="area" optional>
                Area of interest
              </Label>
              <select {...f("area")} defaultValue={defaultArea ?? ""} className={fieldCls}>
                <option value="">Select…</option>
                {AREAS_OF_INTEREST.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <Label name="subject" optional>
                Subject
              </Label>
              <input {...f("subject")} type="text" maxLength={150} className={fieldCls} />
              <Err name="subject" />
            </div>
          </>
        ) : null}

        <div className="sm:col-span-2">
          <Label name="message">{type === "staffing" ? "Describe your staffing requirements" : type === "partnership" ? "Your partnership interest" : "Message"}</Label>
          <textarea {...f("message")} rows={6} required maxLength={4000} className={`${fieldCls} resize-y`} />
          <Err name="message" />
        </div>

        {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
        <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
          <label htmlFor={`${uid}-website`}>Website</label>
          <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input
              {...f("consent")}
              type="checkbox"
              className="mt-1 size-5 shrink-0 rounded border-line-strong accent-blue-600"
            />
            <label htmlFor={`${uid}-consent`} className="text-[0.92rem] leading-relaxed text-text-muted">
              I agree that GenuineIT may use the information I provide to respond to this inquiry.{" "}
              <span aria-hidden="true" className="text-danger">*</span>
            </label>
          </div>
          <Err name="consent" />
        </div>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status.state === "error" && status.message && (
          <p role="alert" className="mt-6 flex gap-3 rounded-[10px] border border-danger/25 bg-[#fef3f2] p-4 text-[0.94rem] text-[#7a271a]">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0" /> {status.message}
          </p>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[10px] bg-blue-600 px-6 font-semibold text-white shadow-[0_8px_24px_-10px_rgb(20_85_217/0.7)] transition-colors hover:bg-blue-700 disabled:cursor-wait disabled:opacity-70"
        >
          {status.state === "submitting" ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              {submitLabel} <Send aria-hidden="true" className="size-4" />
            </>
          )}
        </button>
        <p className="text-[0.84rem] text-text-subtle">
          Prefer email? <a className="font-medium text-blue-600 link-u" href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>
        </p>
      </div>
    </form>
  );
}
