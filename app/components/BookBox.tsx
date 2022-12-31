import React from "react"
import Image from "next/image"
import BookNowButton from "./BookNowButton"

export default function BookBox({ imgName }: { imgName: string }) {
  return (
    <div
      className={`flex w-4/5 relative flex-col md:flex-row md:max-w-4xl rounded-3xl bg-[url(/${imgName})] bg-cover shadow-lg`}
    >
      {/* <Image
        className="-z-999 "
        src={imgName}
        alt={""}
        height={100}
        width={100}
      /> */}

      <div className="md:w-5/6 hidden md:block w-full h-56 md:h-auto object-cover md:w- rounded-t-lg md:rounded-none "></div>
      <div className="p-9 bg-black bg-opacity-30 md:w-screen pt-28 pb-28 text-textPrimary flex flex-col justify-start rounded-3xl">
        <div className="">
          <h1 className="text-2xl">Book A Session With Me</h1>
          <BookNowButton className="mt-3 mb-3 ">Book Now</BookNowButton>
          <p className="text-2xl">Or Call (562) 471-8888</p>
        </div>
      </div>
    </div>
  )
}
