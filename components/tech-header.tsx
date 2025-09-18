"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Briefcase, Tag, HelpCircle, FileText, Info } from "lucide-react"

export function TechHeader() {
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#about", label: "About", icon: Info },
    { href: "#contact", label: "Contact", icon: HelpCircle },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/tc-logo.png"
              alt="Technology Central logo"
              width={20}
              height={20}
              className="h-5 w-5 rounded"
            />
            <span className="font-semibold tracking-wide text-white">Technology Central</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-blue-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-blue-500 text-white font-medium rounded-lg px-6 py-2.5
                         hover:bg-blue-400 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="#contact">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/tc-logo.png"
                    alt="Technology Central logo"
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded"
                  />
                  <span className="font-semibold tracking-wide text-white text-lg">Technology Central</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-blue-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-blue-500 text-white font-medium rounded-lg px-6 py-2.5
                               hover:bg-blue-400 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="#contact" onClick={handleLinkClick}>Get Free Consultation</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
