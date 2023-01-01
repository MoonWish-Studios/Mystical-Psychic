import BookBox from "./components/BookBox"
import LandingSection from "./components/LandingSection"
import InfoBlock from "./components/InfoBlock"
// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center">
        <LandingSection />
        {/* <BookBox imgName="buddha.png" /> */}
      </div>
      <div className="mt-16">
        <InfoBlock
          reverse={false}
          title={"What is spirituality"}
          bottomText={true}
          img={"/cross.svg"}
        >
          Spirituality is a key part of life. It helps keep you grounded and
          find faith, hope and belief in yourself. When you are distraught or
          agitated, your spirituality will provide you the guidance and support
          that you need. Im here to help you to tune into your energy and make
          sense of the past, present and future through your spiritual life.
        </InfoBlock>
        {/* <InfoBlock reverse={true} /> */}
        <InfoBlock
          reverse={true}
          title={"Tree Of Life"}
          bottomText={false}
          img={"/tree.png"}
        >
          The concept of the “Tree of Life” has appeared in various cultures and
          mythologies throughout history. While different religions/cultures
          have different interpretations it is often seen as a symbol of the
          interconnectedness of all living things, as well as the cycle of life,
          death, and rebirth. The tree is often depicted with branches reaching
          up towards the heavens and roots extending deep into the earth. In
          many traditions it is seen as a source of wisdom, knowledge, and
          understanding.
        </InfoBlock>
        <InfoBlock
          reverse={false}
          title={"Year of the Rabbit"}
          bottomText={false}
          img={"/rabbit.png"}
        >
          2023 is a year of the Rabbit, starting from January 22nd, 2023, and
          ending on February 9th, 2024. The sign of Rabbit is a symbol of
          longevity, peace, and prosperity in Chinese culture. 2023 is predicted
          to be a year of hope. To outsiders, the Rabbit’s kindness may make
          them seem soft and weak. In truth, the Rabbit’s quiet personality
          hides their strength and they steadily move towards their goal, no
          matter what negativity the others give them.
        </InfoBlock>
      </div>
    </div>
  )
}
