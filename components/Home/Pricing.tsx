'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";

export default function Pricing() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <h2 className="text-heading font-extrabold tracking-wider">Our pricing.</h2>
      </Section>
    </ScreenSelectorScreen>
  )
}
