import Link from "next/link"
import React from "react"
import NavLink from "./NavLink"

export default function Footer() {
  return (
    <footer className="flex flex-col pl-6 py-8 sm:flex-row gap-3 justify-center bg-[#8B3077]/50 sm:py-4 text-xl sm:text-base">
      <div className="mr-12">
        © {new Date().getFullYear()} Mystical Magic Psychic{" "}
      </div>
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
