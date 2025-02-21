'use client'

import Image from "next/image"

interface Props {
  name: string
  image?: string
  active: boolean
  onClick: React.ReactEventHandler<HTMLDivElement>
}

export function ScreenSelectorItem({ name, image, active, onClick }: Props) {
  return (
    <div onClick={onClick} className={`selector-item w-full h-fit border-b-[4px] border-accent ${active ? "bg-secondary" : "bg-transparent"} hover:bg-secondary cursor-pointer transition duration-300 ease-in-out`}>
      {image && (
        <Image
          className="w-full h-auto transition-all duration-300 ease-in-out aspect-[2.63]"
          src={image}
          alt={`${name} logo`}
          height={0}
          width={0}
          loading="eager"
        />
      )}
      {!image && (
        <div className="flex items-center justify-center aspect-[2.63] bg-transparent">
          <div className="capitalize text-[min(8vw,190%)] md:text-[2.5vw] lg:text-4xl font-extrabold font-[family-name:var(--font-petit)] text-accent">
            {name}
          </div>
        </div>
      )}
    </div>
  )
}
