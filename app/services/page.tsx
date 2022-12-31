import React from "react"
import ServiceBlock from "../components/ServiceBlock"
import BookBox from "../components/BookBox"

export default function page() {
  return (
    <div className="flex flex-col w-screen">
      <div className="">
        <ServiceBlock
          price={"$35"}
          title={"PALM READINGS"}
          img={"/serviceImg/palm.svg"}
        >
          Your palm shows your personality, your characteristics, who you are,
          your health, strengths, and so much more. Based on the lines of your
          palms I’m able to connect with your energies and see the past,
          present, and future
        </ServiceBlock>
      </div>
      <ServiceBlock
        price={"$35"}
        title={"PALM READINGS"}
        img={"/serviceImg/tarotCard.svg"}
      >
        Your palm shows your personality, your characteristics, who you are,
        your health, strengths, and so much more. Based on the lines of your
        palms I’m able to connect with your energies and see the past, present,
        and future
      </ServiceBlock>
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
        price={"$35"}
        title={"PALM READINGS"}
        img={"/serviceImg/palm.svg"}
      >
        Your palm shows your personality, your characteristics, who you are,
        your health, strengths, and so much more. Based on the lines of your
        palms I’m able to connect with your energies and see the past, present,
        and future
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
        <BookBox imgName="/chakra.png" />
      </div>
    </div>
  )
}
