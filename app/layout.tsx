import "./styles/globals.css"
import Navbar from "./components/Navbar"
import { Outfit } from "@next/font/google"
import Image from "next/image"

const outfit = Outfit({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`h-[200vh] ${outfit.className}`}>
        <div className="fixed h-screen m-0 w-screen -z-50">
          <Image
            className=" object-cover"
            src="/nebula.gif"
            alt="nebula background gif"
            fill
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
