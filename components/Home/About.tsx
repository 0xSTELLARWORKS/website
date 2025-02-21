'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";

export default function About() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <h2 className="text-heading text-center relative home-title">Building stellar<br/>software!</h2>
      </Section>

      <div className="w-full absolute bottom-0 h-[100px] bg-center bg-no-repeat" style={{backgroundImage: 'url("/stars.svg")'}} />
    </ScreenSelectorScreen>
  )
}
