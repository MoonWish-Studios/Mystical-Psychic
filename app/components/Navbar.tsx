"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import NavLink from "./NavLink"

export default function Navbar() {
  const pathname = usePathname()
  // set menu state
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log(open)
  })
  return (
    <>
      <header className=" flex py-4 justify-between  items-center">
        {/* Logo */}
        <Image
          src="/assets/logo-with-text.png"
          alt="Mystical Magic Logo"
          width="200"
          height="100"
          className="ml-4"
        />
        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className={`${
            open && "bg-black"
          }  rounded-lg mx-3 p-2 transition-colors duration-200 sm:hidden`}
        >
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu Icon"
            width="25"
            height="25"
          />
        </div>

        {/* Mobile Navbar */}
        <nav
          className={`${
            !open && "hidden"
          } absolute left-1/2 top-36 transform -translate-x-1/2  -translate-y-1/2  flex flex-col gap-2  bg-black p-4 w-[90%] rounded-lg`}
        >
          <NavLink href="/services" text="Services" currentPath={pathname} />
          <NavLink
            href="/appointment"
            text="Appointment"
            currentPath={pathname}
          />
          <NavLink href="/contact" text="Contact" currentPath={pathname} />
        </nav>
        {/* Desktop Navbar */}
        <nav className="hidden sm:flex sm:flex-row sm:gap-3 sm:px-4">
          <NavLink href="/services" text="Services" currentPath={pathname} />
          <NavLink
            href="/appointment"
            text="Appointment"
            currentPath={pathname}
          />
          <NavLink href="/contact" text="Contact" currentPath={pathname} />
        </nav>
      </header>
    </>
  )
}
