'use client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  text?: string
  href: string
  icon?: IconDefinition
}

export function NavLink({ text, href, icon }: Props) {
  const pathname = usePathname()

  const classes = () => {
    return pathname === href ? "bg-accent/20" : "hover:bg-accent/20"
  }

  return (
    <Link href={href} className={`${classes()} text-md md:text-xl py-1 px-2 md:py-2 md:px-4 rounded whitespace-nowrap transition duration-300 ease-in-out`} >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </Link>
  )
}
