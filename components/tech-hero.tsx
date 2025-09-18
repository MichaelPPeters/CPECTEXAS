import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield } from "lucide-react"

export function TechHero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 py-8">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 text-balance leading-none">
            Fort Worth's Leading
            <span className="block tech-gradient bg-clip-text text-transparent pb-2">Technology Partner</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Fast support, smooth onboarding, and reliable systems that keep your team productive. 
            From "one call and it's fixed" help desk to bulletproof email setup—we solve the tech problems 
            that slow you down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="tech-gradient text-white hover:opacity-90 transition-opacity">
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <a href="#services">See What We Deliver</a>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="tech-glass rounded-xl p-6 text-center animate-float">
            <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold font-space-grotesk mb-2">Fast Support & Smooth Onboarding</h3>
            <p className="text-muted-foreground">New hires set up in under a day. "One call and it's fixed" help desk for printers, audio, and computer glitches.</p>
          </div>

          <div className="tech-glass rounded-xl p-6 text-center animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold font-space-grotesk mb-2">Reliable Email & Domain Setup</h3>
            <p className="text-muted-foreground">Clean cutovers to professional work email—no downtime, no bounce backs. Bulletproof deliverability.</p>
          </div>

          <div className="tech-glass rounded-xl p-6 text-center animate-float" style={{ animationDelay: "0.4s" }}>
            <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold font-space-grotesk mb-2">Simple, Secure Collaboration</h3>
            <p className="text-muted-foreground">Shared drives that "just work." Clear access rules to protect sensitive docs while keeping projects moving.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
