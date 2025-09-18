import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Mail, FolderOpen, Wifi, Rocket, Zap, BarChart, Shield, ArrowRight, CheckCircle } from "lucide-react"

export function TechServices() {
  const services = [
    {
      icon: Users,
      title: "Fast Support & Smooth Onboarding",
      description: "New hires set up in under a day: email, devices, shared folders, and apps—ready to work on Day 1.",
      features: ["Day-1 ready employee setup", "One call and it's fixed help desk", "Printer and audio support", "Computer glitch resolution"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Reliable Email & Domain Setup",
      description: "Clean cutovers to professional work email on your domain—no downtime, no bounce backs.",
      features: ["Zero-loss email migrations", "Bulletproof deliverability", "SPF/DKIM/DMARC setup", "Professional domain management"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: FolderOpen,
      title: "Simple, Secure Collaboration",
      description: "Shared drives and team spaces that 'just work,' so everyone finds the right file the first time.",
      features: ["Shared drives that work", "Clear access rules", "File organization", "Team collaboration tools"],
      color: "from-blue-600 to-cyan-400",
    },
    {
      icon: Wifi,
      title: "Network & Device Readiness",
      description: "Office Wi-Fi and workstations tuned for speed and stability—less waiting, more doing.",
      features: ["Optimized office Wi-Fi", "Workstation tuning", "Remote support", "Network stability"],
      color: "from-cyan-400 to-blue-600",
    },
    {
      icon: Rocket,
      title: "Launching Apps Without the Headache",
      description: "Get your internal tools or portals live quickly—deployed, versioned, and easy to update.",
      features: ["Quick app deployment", "Version control", "Easy updates", "Staging to production"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automatic reminders and alerts tied to due dates and milestones—your team stays ahead of deadlines.",
      features: ["Auto-reminder workflows", "Inbox-to-task automation", "Deadline tracking", "Weekly summaries"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: BarChart,
      title: "Data & Conversion Improvements",
      description: "Track the right events across your site/app to see what's working (and what's not).",
      features: ["Event tracking setup", "A/B testing", "Conversion optimization", "Performance analytics"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Practical Security Hygiene",
      description: "MFA and least-privilege access set up without killing productivity.",
      features: ["MFA setup", "Least-privilege access", "Phishing-resistant email", "Security training"],
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
            What We <span className="tech-gradient bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We solve the tech problems that slow you down. From fast support to bulletproof systems, 
            we focus on outcomes that keep your team productive and your business moving forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="tech-glass border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="font-space-grotesk text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
