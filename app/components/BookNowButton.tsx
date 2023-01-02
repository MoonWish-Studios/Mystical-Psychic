import Link from "next/link"

export default function BookNowButton({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <Link
      href="/appointment"
      className={`inline-block hover:outline hover:outline-white hover:outline-1 transition-all duration-75 
      box-content rounded-lg px-8 font-medium my-0 text-base py-2 text-textPrimary bg-darkBrown ${className} `}
    >
      {children}
    </Link>
  )
}
