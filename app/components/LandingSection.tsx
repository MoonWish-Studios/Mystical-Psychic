import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function LandingSection() {
  return (
    <div className="my-40">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8  ">
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
    <div className={`${className} animate-fadeIn`}>
      <Link
        href="/services"
        className="sm:h-[550px] h-[450px] w-40 sm:w-48 relative flex justify-center items-center rounded-xl bg-black bg-opacity-50 shadow-lg sm:hover:scale-110  hover:outline duration-200 transition hover:bg-opacity-0"
      >
        <Image
          src={src}
          fill
          priority={true}
          className="-z-50 object-cover rounded-xl"
          quality={40}
          alt={text}
        />
        <p className="text-3xl text-center font-bold   text-white">{text}</p>
      </Link>
    </div>
  )
}
