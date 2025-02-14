'use client'

import Link from "next/link"
import { Section } from "./Section"

interface Props {
  colour: string
}

export function ProjectCta({ colour }: Props) {
  return (
    <Section>
      <div className={`hover:p-[8px] p-[4px] ${colour} transition-all duration-300 ease-in-out`}>
        <div className="w-full p-global bg-primary">
          <h4 className="text-cta font-extrabold text-center mb-4">Need a project like this?</h4>
          <p className="text-center">Let&apos;s talk! Contact us through the form on our <Link href="/contact" className="underline">contact page</Link> or email us at <Link className="underline" href="mailto:hello@stellarworks.dev">hello@stellarworks.dev</Link></p>
        </div>
      </div>
    </Section>
  )
}
