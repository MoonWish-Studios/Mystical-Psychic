import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function InfoBlock({
  reverse,
  title,
  children,
  bottomText,
  img,
}: {
  reverse: boolean
  title: string
  children: string
  bottomText: boolean
  img: string
}) {
  let textState = reverse ? "md:flex-row-reverse" : "md:flex-row space-x-5"
  let imgState = reverse ? "lg:mr-16 md:mr-5" : ""

  return (
    <div className="w-screen flex justify-center mb-16">
      <div
        className={`w-screen flex flex-col ${textState} md:container items-center  justify-center lg:pr-10 lg:pl-10 text-textPrimary`}
      >
        <div className="textSection flex flex-col w-4/5 text-center md:text-left md:pl-0 mb-4 md:w-1/2 justify-center tracking-wider">
          <h1 className="lg:text-4xl text-3xl text-highlight font-bold mb-4">
            {/* What is <span className="text-highlight">spirituality?</span>{" "} */}
            {title}
          </h1>
          <p className="lg:text-xl text-lg font-light tracking-wide">
            {children}{" "}
          </p>
          {bottomText ? (
            <p className="lg:text-xl text-lg tracking-wide mt-4">
              Need guidance? Take a look at my{" "}
              <span className="underline text-highlight">
                <Link href="/services">services</Link>
              </span>
            </p>
          ) : (
            ""
          )}
        </div>

        <Image
          className={`imageSection flex items-center justify-center ${imgState}`}
          src={img}
          width={400}
          height={400}
          alt={""}
        />
      </div>
    </div>
  )
}
