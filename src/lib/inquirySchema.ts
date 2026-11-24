import { z } from "zod";

/**
 * Client-side mirror of the server rules in public/api/inquiry.php.
 * The PHP handler is the source of truth; keep limits in sync.
 */
export const INQUIRY_TYPES = ["business", "staffing", "partnership", "general"] as const;
export type InquiryType = (typeof INQUIRY_TYPES)[number];

export const AREAS_OF_INTEREST = [
  "IT Staffing & Staff Augmentation",
  "Professional Services",
  "Application Development & Integration",
  "Cloud & Managed Services",
  "Enterprise Applications (ERP / CRM)",
  "Data, BI & Content Management",
  "Quality Assurance & Testing",
  "Product Engineering",
  "Business & IT Consulting",
  "Partnership",
  "General Inquiry",
] as const;

export const ENGAGEMENT_TYPES = ["Contract", "Contract-to-hire", "Full-time", "Project-based team", "Not sure yet"] as const;

const phoneRe = /^[+()\d\s.-]{7,25}$/;

export const inquirySchema = z.object({
  type: z.enum(INQUIRY_TYPES),
  name: z.string().trim().min(2, "Please enter your full name.").max(100, "Name is too long."),
  email: z.string().trim().max(254).email("Please enter a valid email address."),
  company: z.string().trim().max(150, "Company name is too long.").optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(25)
    .refine((v) => v === "" || phoneRe.test(v), "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  area: z.string().max(80).optional().or(z.literal("")),
  engagement: z.string().max(40).optional().or(z.literal("")),
  roles: z.string().trim().max(300, "Please keep this under 300 characters.").optional().or(z.literal("")),
  subject: z.string().trim().max(150, "Subject is too long.").optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please tell us a little more (at least 20 characters).").max(4000, "Message is too long (4,000 characters max)."),
  consent: z.literal(true, { message: "Please confirm so we can respond to your inquiry." }),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
