'use client'

import Link from "next/link"
import { Section } from "./Section"

export function ProjectCta() {
  return (
    <Section>
      <div className="w-full border-[4px] border-accent p-global">
        <h4 className="text-cta font-extrabold text-center mb-4">Need a project like this?</h4>
        <p className="text-center">Let&apos;s talk! Contact us through the form on our <Link href="/contact" className="underline">contact page</Link> or email us at <Link className="underline" href="mailto:hello@stellarworks.dev">hello@stellarworks.dev</Link></p>
      </div>
    </Section>
  )
}
