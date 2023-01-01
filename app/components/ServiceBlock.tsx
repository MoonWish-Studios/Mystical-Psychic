import React from "react"
import Image from "next/image"

export default function ServiceBlock({
  price,
  title,
  children,
  img,
}: {
  price: string
  title: string
  children: string
  img: string
}) {
  return (
    <div className="flex justify-center mt-11 mb-11">
      <div className="flex flex-col md:flex-row container items-center md:mt-10 sm:items-center ">
        <Image
          // lg:mr-20 md:mr-10
          className=" md:mb-0 mb-10 lg:mr-16 md:mr-10"
          height={130}
          width={130}
          src={img}
          alt={""}
        />

        <div className="textSection text-center md:text-left">
          <div className="font-abril text-highlight lg:text-5xl text-5xl mb-2">
            {price}
          </div>
          <div className="font-amarante text-highlight lg:text-8xl text-7xl mb-6 md:mr-0 md:ml-0 mr-5 ml-5 ">
            {title}
          </div>
          <div className="text-xl lg:w-3/4 md:w-9/12 tracking-wide leading-7 text-textPrimary md:mr-5 md:ml-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
