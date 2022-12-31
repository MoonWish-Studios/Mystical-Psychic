"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  let [open, setOpen] = useState(false)
  return (
    <div className=" w-full  relative top-0 left-0 ">
      <div className="md:flex md:px-10 px-7 mb-0 items-center justify-between  py-4">
        <div className="cursor-pointer flex items-center">
          <Link className="flex flex-row items-center space-x-3" href="/">
            <Image src="/logo.svg" width={50} height={50} alt={""} />
            <Image src="/logoText.svg" width={200} height={200} alt={""} />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" absolute right-6 text-white top-7 z-[99999] cursor-pointer md:hidden"
        >
          {open ? (
            <Image src="../icons/close.svg" width={25} height={25} alt={""} />
          ) : (
            <Image src="../icons/menu.svg" width={28} height={28} alt={""} />
          )}
        </div>
        <div
          className={`md:flex md:opacity-100 opacity-100 md:items-center md:static text-xl md:text-base pb-0 absolute text-textPrimary md:space-x-8
         md:z-auto z-[99] md:pt-0 pt-10 md:pl-0 pl-8 left-0 w-full md:w-auto ${
           open ? `top-0 opacity-100 bg-black` : `top-[-490px]`
         }`}
        >
          <div className="md:pb-0 pb-12">
            <Link href="/services" className="md:hidden hover:text-highlight">
              Home
            </Link>
          </div>
          <div className="md:pb-0 pb-12">
            <Link href="/services" className=" hover:text-highlight">
              Services
            </Link>
          </div>
          <div className="md:pb-0 pb-12">
            <Link href="/contact" className=" hover:text-highlight">
              Appointment
            </Link>
          </div>

          <div className="md:pb-0 pb-12">
            <Link className="hover:text-highlight" href="">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
