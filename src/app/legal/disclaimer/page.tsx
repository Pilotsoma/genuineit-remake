import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description: "Terms and conditions of use for the GenuineIT LLC website.",
  path: "/legal/disclaimer/",
});

/**
 * Preserved from /disclaimer.php. Text is reproduced as published (including the
 * truncated final sentence and the "www.ineitllc.com" typo) pending legal review —
 * see docs/owner-approval-required.md. Do not edit without approval.
 */
const paragraphs = [
  "By placing any order or obtaining any services with GenuineIT llc, it is confirmed that you are in agreement with us and bound by our terms and conditions. GenuineIT llc can revise these terms and conditions at any time. We do not take any responsibility for any copyright disclosures caused by business material submitted by the client to the company. We reserve the right to refuse any business strategy or material of a copyrighted nature unless adequate proof is given.",
  "The following terms and conditions will be deemed to have been accepted by the User on usage of the website - www.ineitllc.com. You are requested to read them carefully before using the services of this site.",
  "All content present on this site is the exclusive property of GenuineIT llc. The software's, texts, images, graphics, videos and audios used on this site belong to GenuineIT llc. No material from this site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from the company. All rights not expressly granted herein are reserved.",
  "Unauthorized use of the materials appearing on this site may violate copyright, trademark and other applicable laws, and could result in criminal or civil penalties. Our logo is a registered trademark of GenuineIT llc. This trademark may not be used in any manner without prior written consent from GenuineIT llc.",
  "The information, material or services included in or available through this site may include inaccuracies or typographical errors. Advice received via this site should not be relied upon for personal, medical, legal or financial decisions and you should consult an appropriate professional for specific advice tailored to your situation. GenuineIT llc does not make any warranties, express or implied, including, without limitation, those of merchantability and fitness for a particular purpose, with respect to any information, data, statements or products made available on the Site.",
  "The Site, and all content, materials, information, software, products and services provided on the Site, are provided on an \"as is\" and \"as available\" basis. GenuineIT llc expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
  "GenuineIT llc shall have no responsibility for any damage to User's computer system or loss of data that results from the download of any content, materials, information from the Site. GenuineIT llc may change or discontinue any aspect of its website at any time, including, its content or features. GenuineIT llc reserves the right to change the terms and conditions applicable to use of the Site. Such changes shall be effective immediately upon notice, which shall be placed on the",
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero tone="light" eyebrow="Legal" title="Disclaimer" crumbs={[{ label: "Legal" }, { label: "Disclaimer" }]} />
      <section className="bg-white py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <div className="container-x">
          <div className="max-w-3xl space-y-5 text-[1.02rem] leading-[1.75] text-ink-800">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
