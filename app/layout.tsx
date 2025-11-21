import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Plasma from "@/components/plasma"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "CPEC Texas | Professional Electrical Estimating Services in Fort Worth",
  description:
    "CounterPoint Electrical Consulting Texas provides accurate electrical estimating, takeoffs, and bid preparation services for electrical contractors in Fort Worth and throughout Texas.",
  keywords: "electrical estimating, Fort Worth electrician, cost estimates, bid preparation, electrical takeoffs, Texas electrical contractors",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/images/CPEC LOGO.png" />

        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </head>
      <body>
        <div className="fixed inset-0 z-0 bg-black">
          <Plasma 
            color="#F59E0B" 
            speed={0.4} 
            direction="forward" 
            scale={1.0} 
            opacity={0.15} 
            mouseInteractive={false} 
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
