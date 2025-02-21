'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import Image from "next/image";

export default function Diogo() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <div className="flex gap-8 flex-col sm:flex-row sm:items-center">
          <Image width={75} height={75} src="https://github.com/nordic16.png" alt="Diogo" unoptimized className="rounded-full"/>
          <div>
            <h2 className="text-heading tracking-wider">Diogo.</h2>
            <p>Software developer</p>
          </div>
        </div>
        <div className="animate-underline mt-2 h-[4px] w-full bg-secondary"/>
      </Section>
    </ScreenSelectorScreen>
  )
}
