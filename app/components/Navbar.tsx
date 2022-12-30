import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Navbar() {
  return (
    <div className="bg-transparent py-4 flex justify-between">
      <Image
        src="/assets/logo-with-text.png"
        alt="Mystical Magic Logo"
        width="200"
        height="100"
        className="ml-4"
      />
      <div className="flex gap-3 px-4">
        <Link href="/services" about="Services Link">
          Services
        </Link>
        <Link href="/appointment" about="Appointment Link">
          Appointment
        </Link>
        <Link href="/contact" about="Contact Link">
          Contact
        </Link>
      </div>
    </div>
  )
}
