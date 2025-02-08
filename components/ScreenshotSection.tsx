'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Section } from "./Section"
import Image from "next/image"

interface Props {
  screenshots: string[]
}

export function ScreenshotSection({ screenshots }: Props) {
  return (
    <Section>
      <h3 className="text-subheading font-extrabold tracking-wider">Screenshots:</h3>
      <Swiper slidesPerView={'auto'} spaceBetween={16} freeMode mousewheel={{enabled: true}}>
        {screenshots.map((image, index) => {
          return (
            <SwiperSlide key={index} style={{width: 'auto'}}>
              <Image
                className="w-fit h-[250px] border-[4px] border-accent"
                src={image}
                alt={`Kaboom screenshot ${index + 1}`}
                height={0}
                width={0}
                unoptimized
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Section>
  )
}
