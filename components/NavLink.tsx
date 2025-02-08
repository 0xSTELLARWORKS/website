'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  text: string
  href: string
}

export function NavLink({ text, href }: Props) {
  const pathname = usePathname()

  const classes = () => {
    return pathname === href ? "bg-accent/20" : "hover:bg-accent/20"
  }

  return (
    <Link href={href} className={`${classes()} py-2 px-4 rounded whitespace-nowrap transition duration-300 ease-in-out`} >{text}</Link>
  )
}
