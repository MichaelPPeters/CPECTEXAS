"use client"

import { useState, useEffect } from "react"

interface ProtectedPhoneProps {
  className?: string
  showIcon?: boolean
}

export function ProtectedPhone({ className = "", showIcon = false }: ProtectedPhoneProps) {
  const [phone, setPhone] = useState<string>("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Obfuscated phone number - decoded on client side only
    // (661) 714-1593
    const parts = ["661", "714", "1593"]
    const decoded = `(${parts[0]}) ${parts[1]}-${parts[2]}`
    setPhone(decoded)
  }, [])

  if (!isClient) {
    // Server-side render: show placeholder to prevent scraping
    return (
      <span className={className} data-phone="protected">
        Contact for phone
      </span>
    )
  }

  // Client-side render: show actual number with click-to-call
  return (
    <a
      href={`tel:+1${phone.replace(/\D/g, "")}`}
      className={`${className} hover:text-amber-400 transition-colors`}
      aria-label="Call CPEC Texas"
    >
      {phone}
    </a>
  )
}

// Alternative version with even more protection
export function ProtectedPhoneDisplay({ className = "" }: { className?: string }) {
  const [show, setShow] = useState(false)
  const [phone, setPhone] = useState("")

  useEffect(() => {
    // Decode from base64-like obfuscation
    const encoded = ["54", "54", "49", "20", "55", "49", "52", "45", "49", "53", "57", "51"]
    const decoded = encoded.map((code) => String.fromCharCode(parseInt(code, 10) + 12)).join("")
    setPhone(`(${decoded})`)
  }, [])

  if (!show && phone) {
    return (
      <button
        onClick={() => setShow(true)}
        className={`${className} hover:text-amber-400 transition-colors underline cursor-pointer`}
        type="button"
      >
        Click to reveal phone
      </button>
    )
  }

  return phone ? (
    <a
      href={`tel:+1${phone.replace(/\D/g, "")}`}
      className={`${className} hover:text-amber-400 transition-colors`}
    >
      {phone}
    </a>
  ) : (
    <span className={className}>Loading...</span>
  )
}

