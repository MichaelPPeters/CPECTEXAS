import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Plasma from "@/components/plasma"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Technology Central | Fort Worth Technology Solutions",
  description:
    "Fort Worth's leading technology partner, delivering fast support, smooth onboarding, and reliable systems that keep your team productive.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/tc-logo.png" />

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
            color="#00BFFF" 
            speed={0.4} 
            direction="forward" 
            scale={1.0} 
            opacity={0.2} 
            mouseInteractive={false} 
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
