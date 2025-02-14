'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";

export default function About() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <h2 className="text-heading font-extrabold tracking-wider text-center relative home-title">Building stellar<br/>software!</h2>
      </Section>
    </ScreenSelectorScreen>
  )
}
