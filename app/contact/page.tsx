"use client"
import { GoogleMap } from "@react-google-maps/api"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const MapMarker = ({ text }: { text: string }) => <div>{text}</div>

export default function page() {
  return (
    <section className="h-screen w-fit my-auto mx-auto">
      <div className=" flex flex-col lg:flex-row justify-around lg:px-10 px-10 gap-20 pt-20 ">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Our Details
          </h1>
          <div className="flex gap-2 ml-2 text-xl hover:underline">
            <Image
              src="/assets/icons/phone.svg"
              width="15"
              height="15"
              alt="Phone Icon"
            />
            <Link href="tel:562-471-8888"> (562) 471-8888</Link>
          </div>
          <div className="flex gap-2 hover:underline ml-2 text-xl">
            <Image
              src="/assets/icons/location.svg"
              width="15"
              height="15"
              alt="Location Icon"
            />
            <Link target="_blank" href="https://goo.gl/maps/1W5fr4eeLVXjYT6DA">
              11511 Knott Ave, Cypress, CA 90630
            </Link>
          </div>
        </div>
        <Link
          target="_blank"
          href="https://goo.gl/maps/1W5fr4eeLVXjYT6DA"
          className="hover:outline-2 hover:outline-white shrink"
        >
          <Image
            src="/assets/icons/map.png"
            alt="Map Of Location"
            width="550"
            height="400"
          />
        </Link>
      </div>
    </section>
  )
}
