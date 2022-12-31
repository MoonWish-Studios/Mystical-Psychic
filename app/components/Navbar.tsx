"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

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
          }  rounded-lg mx-3 p-2 transition-colors duration-200`}
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
            !open && "opacity-0"
          } absolute left-1/2 top-36 transform -translate-x-1/2 transition-all -translate-y-1/2  flex flex-col gap-2  bg-black p-4 w-[90%] rounded-lg`}
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
        <nav className="hidden sm:flex sm:flex-row sm:gap-3 px-4">
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

interface NavLinkTypes {
  href: string
  text: string
  currentPath: string | null
}
function NavLink({ href, text, currentPath }: NavLinkTypes) {
  return (
    <Link
      href={href}
      className={`text-xl font-medium   px-3 py-1 hover:bg-gradient rounded-lg sm:rounded-full transition-[background]  ${
        href === currentPath && "bg-gradient"
      }`}
      about={`${text} Link`}
    >
      {text}
    </Link>
  )
}
