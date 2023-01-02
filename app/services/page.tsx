import React from "react"
import ServiceBlock from "../components/ServiceBlock"
import BookBox from "../components/BookBox"
import Image from "next/image"
import BookNowButton from "../components/BookNowButton"

export default function page() {
  return (
    <div className="flex flex-col w-full">
      <ServiceBlock
        price={"$35"}
        title={"PALM READINGS"}
        img={"/serviceImg/palm.svg"}
      >
        Your palm shows your personality, your characteristics, who you are,
        your health, strengths, and so much more. Based on the lines of your
        palms I’m able to connect with your energies and see the past, present,
        and future
      </ServiceBlock>

      <ServiceBlock
        price={"$50"}
        title={"TAROT READINGS"}
        img={"/serviceImg/tarotCard.svg"}
      >
        Tarot readings deals with the people in your life, what you can expect
        from them, and what they can expect from you. Are you looking to find
        out if a certain individual is heading on the right path?
      </ServiceBlock>

      <ServiceBlock
        price={"$65"}
        title={"PSYCHIC READINGS"}
        img={"/serviceImg/moon.png"}
      >
        Psychic readings are a part of psychometry where I take a personal item
        of yours (Jewelry, Engagement Rings, Glasses, Driver Licenses, etc) and
        pick up energy from that object to tell you about love, marriage,
        success, and business.
      </ServiceBlock>
      <ServiceBlock
        price={"$120"}
        title={"COMBO READINGS"}
        img={"/serviceImg/meditate.png"}
      >
        A full combo reading is the combination of the three readings: palm,
        tarot, and psychic readings
      </ServiceBlock>

      <div className="flex justify-center md:mt-10 mb-10 md:mb-20">
        <div className="text-textPrimary text-xl md:text-2xl w-3/4 md:w-1/2 text-center">
          For <span> </span>
          <span className="text-highlight">Chakra Balancing </span> and{" "}
          <span className="text-highlight">Aura Cleansing</span>, contact me for
          price
        </div>
      </div>
      <div className="flex justify-center  mb-20">
        <div
          className={`flex w-4/5 relative flex-col md:flex-row md:max-w-4xl rounded-4xl  bg-cover shadow-lg`}
        >
          <Image
            src={"/assets/chakra.png"}
            className="-z-10 rounded-xl object-cover bg-center"
            alt={""}
            // height={100}
            // width={100}
            fill
          />

          <div className="md:w-5/6 hidden md:block w-full h-56 md:h-auto object-cover rounded-t-lg md:rounded-none "></div>
          <div className="relative p-9 bg-black bg-opacity-30 md:w-screen pt-28 pb-28 text-textPrimary flex flex-col justify-start rounded-4xl">
            <Image
              src="/assets/chakra-2.png"
              className="-z-10 rounded-xl object-cover"
              alt={""}
              // height={100}
              // width={100}
              fill
            />
            <div className="">
              <h1 className="text-2xl">Book A Session With Me</h1>
              <BookNowButton className="mt-3 mb-3 ">Book Now</BookNowButton>
              <p className="text-2xl">Or Call (562) 471-8888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
