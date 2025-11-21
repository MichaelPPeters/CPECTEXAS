import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Award, Clock, MapPin } from "lucide-react"

export function TechAbout() {
  const stats = [
    { icon: FileText, label: "Projects Estimated", value: "500+" },
    { icon: Award, label: "Accuracy Rate", value: "98%" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: MapPin, label: "Fort Worth Based", value: "Local" },
  ]

  const outcomes = [
    "Accurate Takeoffs",
    "Competitive Pricing",
    "Professional Bid Packages",
    "Fast Turnaround",
    "Value Engineering",
    "Code Compliance",
    "Change Order Support",
    "Win More Work",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why <span className="text-amber-400">Choose CPEC Texas</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 text-pretty">
              CounterPoint Electrical Consulting Texas is your partner for accurate, competitive electrical estimates. 
              With over 15 years of experience in electrical estimating, we help contractors win more bids while 
              maintaining healthy profit margins on every project.
            </p>
            <p className="text-lg text-gray-300 mb-8 text-pretty">
              Our clients get precise material takeoffs, detailed labor calculations, and professional bid packages 
              that showcase their expertise. We understand the electrical trade and deliver estimates you can trust.
            </p>

            {/* Client Outcomes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">What Our Clients Get</h3>
              <div className="flex flex-wrap gap-2">
                {outcomes.map((outcome, index) => (
                  <Badge key={index} variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
                    {outcome}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-border text-center p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
