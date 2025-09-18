// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Technology Central",
    url: "https://tctechnologies.com",
    logo: "https://tctechnologies.com/logo.png",
    description:
      "Technology Central is Fort Worth's leading technology partner, providing fast support, smooth onboarding, and reliable systems that keep teams productive.",
    sameAs: [
      "https://www.linkedin.com/company/technology-central",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Worth",
      addressRegion: "TX",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-661-714-1593",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Fort Worth" },
      { "@type": "Place", name: "Dallas" },
      { "@type": "Place", name: "Texas" },
    ],
  };

  return (
    <>
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Technology Central
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Fort Worth's technology partner focused on outcomes that keep your business moving forward.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Fast Support & Smooth Onboarding",
              desc: "New hires set up in under a day. 'One call and it's fixed' help desk for printers, audio, and computer glitches.",
            },
            {
              title: "Reliable Email & Domain Setup",
              desc: "Clean cutovers to professional work email—no downtime, no bounce backs. Bulletproof deliverability.",
            },
            {
              title: "Simple, Secure Collaboration",
              desc: "Shared drives that 'just work.' Clear access rules to protect sensitive docs while keeping projects moving.",
            },
            {
              title: "Network & Device Readiness",
              desc: "Office Wi-Fi and workstations tuned for speed and stability—less waiting, more doing.",
            },
            {
              title: "Workflow Automation",
              desc: "Automatic reminders and alerts tied to due dates and milestones—your team stays ahead of deadlines.",
            },
            {
              title: "Clear Documentation & Ownership",
              desc: "Easy SOPs and checklists so the process survives vacations and turnover.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Solve Your Tech Problems?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Let Technology Central get your team productive with fast support and reliable systems.
        </p>
        <a
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          Get Your Free Consultation
        </a>
      </section>
    </>
  );
}
