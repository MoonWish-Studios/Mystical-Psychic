import BookBox from "./components/BookBox"
import LandingSection from "./components/LandingSection"
// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="w-full px-12 flex items-center justify-center">
      <LandingSection />
      {/* <BookBox imgName="buddha.png" /> */}
    </div>
  )
}
