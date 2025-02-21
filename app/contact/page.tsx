'use client'

import { Page } from "@/components/Page";
import { Section } from "@/components/Section";

export default function Contact() {
  return (
    <Page>
      <div className="pt-nav animate-appear">
        <Section className="items-center">
          <div className="w-fit">
            <h1 className="text-heading italic">Let&apos;s talk!</h1>
            <div className="w-full h-[4px] bg-secondary animate-underline" />
          </div>
        </Section>

        <Section className="items-center">
          <p className="max-w-xl text-center">Need a bespoke software solution? Get in touch! Fill out the form below or email us at <a className="underline" href="mailto:hello@stellarworks.dev">hello@stellarworks.dev</a> and we&apos;ll get back to you ASAP.</p>
        </Section>

        <Section>
          <form className="flex flex-col gap-6 items-center mb-global" method="post" action="https://portal.stellarworks.dev/companies/stellarworks/form">
            <div className="flex flex-col gap-4 max-w-[800px] w-full">
              <label htmlFor="email">Email</label>
              <input className="input" id="email" name="form[from]" type="email" placeholder="contact@example.com" autoFocus />
            </div>

            <div className="flex flex-col gap-4 max-w-[800px] w-full">
              <label htmlFor="subject">Subject</label>
              <input className="input" id="subject" name="form[subject]" type="text" placeholder="Subject..." />
            </div>

            <div className="flex flex-col gap-4 max-w-[800px] w-full">
              <label htmlFor="message">Message</label>
              <textarea className="input min-h-[400px]" id="message" name="form[body]" placeholder="Your message here..." />
            </div>

            <div className="absolute left-[-999999999999px]">
              <label htmlFor="hp">Leave!</label>
              <input id="hp" name="form[stellarworks_hp]" type="text" />
            </div>

            <button type="submit" className="bg-primary font-bold px-4 py-2 border-accent border-[4px]">Submit!</button>
          </form>
        </Section>
      </div>
    </Page>
  );
}
