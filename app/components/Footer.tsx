import Link from "next/link"
import React from "react"
import NavLink from "./NavLink"

export default function Footer() {
  return (
    <footer className="flex gap-3 justify-center bg-[#8B3077]/50 py-4">
      <div>© {new Date().getFullYear()} Mystical Magic Psychic |</div>
      <Link className="hover:text-white" href="/services">
        Services
      </Link>
      <Link className="hover:text-white" href="/appointment">
        Appointment
      </Link>
      <Link className="hover:text-white" href="/contact">
        Contact
      </Link>
    </footer>
  )
}
