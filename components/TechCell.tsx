'use client'

import Link from "next/link"

interface Props {
  devicon: string
  href: string
}

export function TechCell({ devicon, href }: Props) {
  return (
    <div className="group col-span-1 relative w-full h-0 pb-[100%] outline outline-[4px] outline-accent bg-primary hover:bg-secondary cursor-pointer transition duration-300 ease-in-out">
      <Link href={href} className="absolute flex items-center justify-center h-full w-full">
        <i className={`${devicon} text-[55px] my-auto group-hover:text-[60px]`}></i>
      </Link>
    </div>
  )
}
