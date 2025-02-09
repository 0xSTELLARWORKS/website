'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";

export default function About() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <h2 className="text-heading font-extrabold tracking-wider">★★★ Building stellar software! ★★★</h2>
      </Section>
    </ScreenSelectorScreen>
  )
}
