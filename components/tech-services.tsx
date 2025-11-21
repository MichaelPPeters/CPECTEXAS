import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, ClipboardList, Ruler, DollarSign, Zap, Building2, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export function TechServices() {
  const services = [
    {
      icon: Calculator,
      title: "Complete Material Takeoffs",
      description: "Detailed material counts from plans and specifications—wire, conduit, devices, panels, and fixtures.",
      features: ["Conduit & wire calculations", "Panel & breaker schedules", "Device & fixture counts", "Equipment specifications"],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Ruler,
      title: "Labor Cost Estimation",
      description: "Accurate labor hour calculations based on project scope, complexity, and current labor rates.",
      features: ["Man-hour calculations", "Labor rate analysis", "Productivity factors", "Crew size optimization"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing Analysis",
      description: "Market-based pricing with real-time material costs to keep your bids competitive and profitable.",
      features: ["Current material pricing", "Supplier cost comparison", "Markup optimization", "Profit margin analysis"],
      color: "from-amber-600 to-orange-400",
    },
    {
      icon: FileText,
      title: "Professional Bid Packages",
      description: "Comprehensive, organized bid documents that showcase your professionalism and win projects.",
      features: ["Detailed scope of work", "Itemized pricing sheets", "Exclusions & assumptions", "Professional formatting"],
      color: "from-orange-400 to-amber-600",
    },
    {
      icon: Building2,
      title: "Commercial & Industrial Projects",
      description: "Expertise in large-scale commercial, industrial, and institutional electrical systems.",
      features: ["Office buildings", "Retail & hospitality", "Industrial facilities", "Schools & healthcare"],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: ClipboardList,
      title: "Plan Review & Analysis",
      description: "Thorough review of plans and specs to identify potential issues and value engineering opportunities.",
      features: ["Code compliance review", "Constructability analysis", "Value engineering", "RFI preparation"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick, accurate estimates when you need them—from simple projects to complex bid packages.",
      features: ["24-48 hour turnaround", "Rush service available", "Preliminary budgets", "Design-build estimates"],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Change Order Support",
      description: "Quick pricing for change orders and additions to keep your projects moving and profitable.",
      features: ["Change order pricing", "Additional work quotes", "Project modifications", "Value analysis"],
      color: "from-orange-500 to-amber-500",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Electrical <span className="text-amber-400">Estimating Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            From material takeoffs to complete bid packages, we provide accurate electrical estimates 
            that help you win more work and maximize profitability on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-border rounded-xl p-6 hover:glass-border-enhanced transition-all duration-300 group"
            >
              <div className="text-center">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-amber-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-all bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
