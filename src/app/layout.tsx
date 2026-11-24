import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealController } from "@/components/ui/RevealController";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";

// Self-hosted variable fonts (SIL Open Font License, see src/fonts/LICENSE-*.txt).
// No third-party font requests at runtime.
const inter = localFont({ src: "../fonts/inter-latin-var.woff2", variable: "--font-inter", display: "swap", weight: "100 900" });
const manrope = localFont({ src: "../fonts/manrope-latin-var.woff2", variable: "--font-manrope", display: "swap", weight: "200 800" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GenuineIT LLC | IT Consulting, Staffing & Technology Solutions",
    template: "%s | GenuineIT LLC",
  },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/favicon.ico" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#081426",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealController />
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${site.url}/#organization`,
              name: site.legalName,
              url: site.url,
              logo: `${site.url}/images/brand/genuineit-logo.png`,
              email: site.email.general,
              telephone: site.phone.display,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.street}, ${site.address.suite}`,
                addressLocality: site.address.city,
                addressRegion: site.address.region,
                postalCode: site.address.postalCode,
                addressCountry: site.address.countryCode,
              },
              sameAs: site.social.map((s) => s.href),
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              name: site.name,
              url: site.url,
              publisher: { "@id": `${site.url}/#organization` },
            },
          ]}
        />
      </body>
    </html>
  );
}
