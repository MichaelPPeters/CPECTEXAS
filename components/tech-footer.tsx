import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react"

export function TechFooter() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Image 
                src="/images/CPEC LOGO.png" 
                alt="CPEC Texas" 
                width={64} 
                height={64} 
                className="h-16 w-16"
              />
              <span className="font-bold text-2xl text-white">CPEC Texas</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-pretty">
              CounterPoint Electrical Consulting Texas - Professional electrical estimating services for contractors 
              throughout Texas. Accurate takeoffs, competitive pricing, and fast turnaround.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>estimates@cpectexas.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(817) 555-CPEC</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Fort Worth, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CounterPoint Electrical Consulting Texas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
