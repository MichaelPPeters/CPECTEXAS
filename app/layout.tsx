import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import Plasma from "@/components/plasma"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Technology Central | Fort Worth Technology Solutions",
  description:
    "Leading technology company in Fort Worth providing innovative software solutions, cloud services, and digital transformation for businesses.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/tc-logo.png" />

        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/SpaceGrotesk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="fixed inset-0 z-0 bg-gradient-to-br from-background via-muted/20 to-background">
            <Plasma color="#00BFFF" speed={0.6} direction="forward" scale={1.2} opacity={0.3} mouseInteractive={true} />
          </div>
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
