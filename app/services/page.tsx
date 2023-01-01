import React from "react"
import ServiceBlock from "../components/ServiceBlock"
import BookBox from "../components/BookBox"

export default function page() {
  return (
    <div className="flex flex-col w-screen">
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
        img={"/serviceImg/palm.svg"}
      >
        Psychic readings are a part of psychometry where I take a personal item
        of yours (Jewelry, Engagement Rings, Glasses, Driver Licenses, etc) and
        pick up energy from that object to tell you about love, marriage,
        success, and business.
      </ServiceBlock>
      <ServiceBlock
        price={"$120"}
        title={"COMBO READINGS"}
        img={"/serviceImg/palm.svg"}
      >
        A full combo reading is the combination of the three readings: palm,
        tarot, and psychic readings
      </ServiceBlock>

      <div className="w-screen flex justify-center md:mt-10 mb-10 md:mb-20">
        <div className="text-textPrimary text-xl md:text-2xl w-3/4 md:w-1/2 text-center">
          For <span> </span>
          <span className="text-highlight">Chakra Balancing </span> and{" "}
          <span className="text-highlight">Aura Cleansing</span>, contact me for
          price
        </div>
      </div>
      <div className="flex justify-center w-screen mb-20">
        <BookBox img="assets/chakra.png" />
      </div>
    </div>
  )
}
