import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, MapPin } from "lucide-react"

export function TechAbout() {
  const stats = [
    { icon: Users, label: "Teams Set Up", value: "150+" },
    { icon: Award, label: "Zero-Loss Migrations", value: "300+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
    { icon: MapPin, label: "Fort Worth Based", value: "Local" },
  ]

  const outcomes = [
    "Day-1 Ready Setup",
    "Zero-Loss Email Migrations",
    "Auto-Reminder Workflows",
    "Faster Site Updates",
    "Lower Security Risk",
    "Clear Documentation",
    "Bulletproof Deliverability",
    "One-Call Fixes",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why <span className="text-blue-400">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 text-pretty">
              We're Fort Worth's technology partner focused on outcomes, not just technology. We solve the problems 
              that slow you down: from "one call and it's fixed" support to bulletproof email migrations that 
              keep your business running smoothly.
            </p>
            <p className="text-lg text-gray-300 mb-8 text-pretty">
              Our clients get day-1 ready employee setups, zero-loss email migrations, and workflow automations 
              that keep deadlines from slipping through the cracks. We focus on the results that matter to your business.
            </p>

            {/* Client Outcomes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Sample Outcomes Clients Get</h3>
              <div className="flex flex-wrap gap-2">
                {outcomes.map((outcome, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                    {outcome}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-border text-center p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
