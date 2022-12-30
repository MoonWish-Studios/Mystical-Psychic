import "./styles/globals.css"
import Image from "next/image"
import { Outfit } from "@next/font/google"
import Navbar from "./components/Navbar"

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

      <body className="">
        <Navbar />
        <div className="fixed h-screen m-0 p-0 w-screen -z-50">
          <Image
            className="object-cover"
            src="/assets/nebula.gif"
            alt="nebula background gif"
            fill
          />
        </div>
        {children}
      </body>
    </html>
  )
}
