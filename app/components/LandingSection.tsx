import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function LandingSection() {
  return (
    <div className="my-40">
      <div className="flex gap-5 ">
        <ReadingIcon
          className="-translate-y-16"
          src="/assets/tarot-reading.png"
          text="Tarot Readings"
        />
        <ReadingIcon
          className=""
          src="/assets/palm-reading.png"
          text="Palm Readings"
        />
        <ReadingIcon
          className="-translate-y-16"
          src="/assets/psychic-reading.png"
          text="Psychic Readings"
        />
        <ReadingIcon
          className=""
          src="/assets/combo-reading.png"
          text="Combo Readings"
        />
      </div>
    </div>
  )
}

function ReadingIcon({
  src,
  text,
  className,
}: {
  src: string
  text: string
  className: string
}) {
  return (
    <div className={className}>
      <Link
        href="/services"
        className="h-[550px] w-48 relative flex justify-center items-center rounded-xl bg-black bg-opacity-50 shadow-lg hover:scale-110 hover:outline duration-200 transition"
      >
        <Image
          src={src}
          fill
          className="-z-50 object-cover rounded-xl"
          alt={text}
        />
        <p className="text-3xl text-center font-bold   text-white">{text}</p>
      </Link>
    </div>
  )
}
