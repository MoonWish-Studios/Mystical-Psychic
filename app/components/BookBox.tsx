import React from "react"
import Image from "next/image"
import BookNowButton from "./BookNowButton"

export default function BookBox({ imgName }: { imgName: string }) {
  return (
    <div
      className={`flex w-4/5 relative flex-col md:flex-row md:max-w-4xl rounded-xl  shadow-lg`}
    >
      <Image
        src="/assets/buddha.png"
        style={{ objectFit: "cover" }}
        className="-z-10 rounded-xl"
        fill
        alt={""}
      />
      <div className="md:w-5/6 hidden md:block w-full h-56 md:h-auto object-cover md:w- rounded-t-lg md:rounded-none md:rounded-l-lg"></div>
      <div className="p-9 bg-black bg-opacity-70 md:w-screen pt-28 pb-28 text-textPrimary flex flex-col justify-start rounded-xl">
        <div className="">
          <h1 className="text-2xl">Book A Session With Me</h1>
          <BookNowButton className="mt-3 mb-3">Book Now</BookNowButton>
          <p className="text-2xl">Or Call (562) 471-8888</p>
        </div>
      </div>
    </div>
  )
}
