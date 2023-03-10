"use client"
import Link from "next/link"
import React from "react"
import { InlineWidget } from "react-calendly"

export default function Page() {
  return (
    <div className="min-h-screen mb-16">
      <InlineWidget
        styles={{
          height: "1000px",
        }}
        url="https://calendly.com/theonlyhamstertoh/appointment"
      />
      <div className="mx-auto w-max flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Or Call Me At{" "}
          <Link
            className="font-medium hover:underline underline-offset-2"
            href="tel:562-471-8888"
          >
            (562) 471-8888
          </Link>
        </h1>
        <p>
          For More Details, check out{" "}
          <Link
            className="font-medium underline-offset-1 underline hover:text-white"
            href="/contact"
          >
            Contacts
          </Link>
        </p>
      </div>
    </div>
  )
}
