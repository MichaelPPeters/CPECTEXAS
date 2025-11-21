import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calculator, FileText, TrendingUp } from "lucide-react"

export function TechHero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-amber-500 px-6 text-black hover:bg-amber-400 font-medium">
      <a href="#contact" rel="noopener noreferrer">
        Get Free Estimate
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-3">
            <Image src="/images/CPEC LOGO.png" alt="CPEC Texas logo" width={64} height={64} className="h-16 w-16" />
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300/80">CounterPoint Electrical</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">FORT WORTH'S</span>
            <span className="block text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.35)]">ELECTRICAL ESTIMATING</span>
            <span className="block">EXPERTS</span>
          </h1>
          <p className="mt-6 text-center text-lg text-gray-300 max-w-2xl mx-auto">
            Accurate takeoffs, detailed cost estimates, and competitive bid preparation for electrical contractors. 
            We deliver precise estimates that help you win more bids and maximize profitability on every project.
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
  title = "Accurate Estimates",
  description = "Detailed takeoffs and cost analysis",
  icon: IconComponent = Calculator,
}: {
  title?: string
  description?: string
  icon?: any
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-6 animate-float">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        <div className="text-xl font-bold leading-snug text-white/90 mb-2">{title}</div>
        <p className="text-sm text-white/70">{description}</p>
        <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-amber-300">
          CPEC Texas
        </div>
      </div>
    </div>
  )
}

const featureData = [
  {
    title: "Precise Takeoffs",
    description: "Accurate material counts and labor estimates from your plans and specs.",
    icon: Calculator,
  },
  {
    title: "Professional Bids",
    description: "Comprehensive, organized bid packages that win projects.",
    icon: FileText,
  },
  {
    title: "Win More Work",
    description: "Competitive estimates that maximize your profit margins.",
    icon: TrendingUp,
  },
]
