import React from "react"
import Image from "next/image"
import BookNowButton from "./BookNowButton"
import Link from "next/link"

export default function BookBox({ img }: { img: string }) {
  return (
    <div
      className={`flex w-4/5 relative flex-col md:flex-row  md:max-w-4xl rounded-2xl  bg-cover shadow-lg`}
    >
      <Image
        src={img}
        className="-z-10 rounded-2xl object-cover"
        alt={""}
        // height={100}
        // width={100}
        fill
      />

      <div className="md:w-5/6 hidden md:block w-full h-56 md:h-auto object-cover  "></div>
      <div className="p-9 bg-black bg-opacity-30 md:w-full pt-28 pb-28 text-textPrimary flex flex-col justify-start rounded-2xl">
        <div className="">
          <h1 className="text-2xl">Book A Session With Me</h1>
          <BookNowButton className="mt-3 mb-3 ">Book Now</BookNowButton>
          <p className="text-2xl">Or Call (562) 471-8888</p>
        </div>
      </div>
    </div>
  )
}
