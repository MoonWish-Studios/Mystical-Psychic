import "./styles/globals.css"
import Navbar from "./components/Navbar"
import { Outfit } from "@next/font/google"
import Image from "next/image"
import { Outfit } from "@next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
const outfit = Outfit({ subsets: ["latin"] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="text-textPrimary">
        <Navbar />
        <div className="fixed h-screen m-0 p-0 top-0 left-0 w-screen -z-50">
          <Image
            className="object-cover"
            src="/assets/nebula.gif"
            priority={true}
            alt="nebula background gif"
            fill
          />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
