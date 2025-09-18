import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Zap, Mail, Shield } from "lucide-react"

export function TechHero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-blue-500 px-6 text-white hover:bg-blue-400">
      <a href="#contact" target="_blank" rel="noopener noreferrer">
        Get Free Consultation
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/tc-logo.png" alt="Technology Central logo" width={32} height={32} className="h-8 w-8 rounded" />
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300/80">technology central</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">FORT WORTH'S</span>
            <span className="block text-blue-400 drop-shadow-[0_0_20px_rgba(0,191,255,0.35)]">TECHNOLOGY PARTNER</span>
            <span className="block">FOR BUSINESS</span>
          </h1>
          <p className="mt-6 text-center text-lg text-gray-300 max-w-2xl mx-auto">
            Fast support, smooth onboarding, and reliable systems that keep your team productive. 
            From "one call and it's fixed" help desk to bulletproof email setup—we solve the tech problems 
            that slow you down.
          </p>
          <div className="mt-6">{buttonNew}</div>

          {/* Feature Cards Grid */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {featureData.map((feature, i) => {
              const visibility = i <= 2 ? "block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <FeatureCard 
                    title={feature.title} 
                    description={feature.description} 
                    icon={feature.icon}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  title = "Fast Support",
  description = "One call and it's fixed help desk",
  icon: IconComponent = Zap,
}: {
  title?: string
  description?: string
  icon?: any
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-6 animate-float">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        <div className="text-xl font-bold leading-snug text-white/90 mb-2">{title}</div>
        <p className="text-sm text-white/70">{description}</p>
        <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-blue-300">
          technology central
        </div>
      </div>
    </div>
  )
}

const featureData = [
  {
    title: "Fast Support & Onboarding",
    description: "New hires set up in under a day. One call and it's fixed help desk.",
    icon: Zap,
  },
  {
    title: "Reliable Email Setup",
    description: "Clean cutovers to professional work email—no downtime, no bounce backs.",
    icon: Mail,
  },
  {
    title: "Secure Collaboration",
    description: "Shared drives that 'just work.' Clear access rules to protect sensitive docs.",
    icon: Shield,
  },
]
