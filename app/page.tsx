import { TechHeader } from "@/components/tech-header"
import { TechHero } from "@/components/tech-hero"
import { TechServices } from "@/components/tech-services"
import { TechAbout } from "@/components/tech-about"
import { TechContact } from "@/components/tech-contact"
import { TechFooter } from "@/components/tech-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const companyStructuredData = {
    "@context": "https://schema.org",
    "@type": "TechnologyCompany",
    "@id": "https://tctechnologies.com/",
    name: "Technology Central",
    description:
      "Fort Worth's leading technology partner, delivering fast support, smooth onboarding, and reliable systems that keep your team productive.",
    url: "https://tctechnologies.com/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Worth",
      addressRegion: "TX",
      addressCountry: "US",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Fort Worth, Texas",
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <TechHeader />
        <TechHero />
        <TechServices />
        <TechAbout />
        <TechContact />
        <TechFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="company-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companyStructuredData),
        }}
      />
    </>
  )
}
