import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function TechFooter() {
  return (
    <footer className="bg-muted/50 border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/tc-logo.png" alt="Technology Central" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-xl font-space-grotesk">Technology Central</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-pretty">
              Fort Worth's leading technology partner, delivering fast support, smooth onboarding, and reliable systems 
              that keep your team productive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold font-space-grotesk mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>mike@technologycentral.net</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(661) 714-1593</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Fort Worth, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Technology Central. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
