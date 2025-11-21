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
    "@type": "ProfessionalService",
    "@id": "https://cpectexas.com/",
    name: "CounterPoint Electrical Consulting Texas",
    alternateName: "CPEC Texas",
    description:
      "Professional electrical estimating services in Fort Worth, Texas. Accurate takeoffs, detailed cost estimates, and competitive bid preparation for electrical contractors.",
    url: "https://cpectexas.com/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Worth",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    priceRange: "$$",
    knowsAbout: ["Electrical Estimating", "Cost Analysis", "Bid Preparation", "Material Takeoffs", "Labor Calculations"],
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
