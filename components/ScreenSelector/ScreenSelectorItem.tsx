'use client'

import Image from "next/image"

interface Props {
  image: string
  active: boolean
  onClick: React.ReactEventHandler<HTMLDivElement>
}

export function ScreenSelectorItem({ image, active, onClick }: Props) {
  return (
    <div onClick={onClick} className={`selector-item w-full h-fit border-b-[4px] border-accent ${active ? "bg-secondary" : "bg-transparent"} hover:bg-secondary cursor-pointer transition duration-300 ease-in-out`}>
      <Image
        className="w-full h-auto transition-all duration-300 ease-in-out"
        src={image}
        alt="Kaboom logo"
        height={0}
        width={0}
      />
    </div>
  )
}
