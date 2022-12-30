import BookBox from "./components/BookBox"
// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="w-full px-12 flex items-center justify-center">
      <BookBox imgName="buddha.png" />
    </div>
  )
}
