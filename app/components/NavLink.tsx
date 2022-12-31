import Link from "next/link"

interface NavLinkTypes {
  href: string
  text: string
  currentPath: string | null
}
export default function NavLink({ href, text, currentPath }: NavLinkTypes) {
  return (
    <Link
      href={href}
      className={`text-xl sm:text-lg font-medium   px-2 md:px-3 transition py-1 hover:bg-gradient rounded-lg sm:rounded-full ${
        href === currentPath && "bg-gradient"
      }`}
      about={`${text} Link`}
    >
      {text}
    </Link>
  )
}
