import "./styles/globals.css"
import Image from "next/image"
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

      <body className="h-[200vh]">
        <div className="fixed h-screen m-0 w-screen -z-50">
          <Image
            className=" object-cover"
            src="/nebula.gif"
            alt="nebula background gif"
            fill
          />
        </div>
        {children}
      </body>
    </html>
  )
}
