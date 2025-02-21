'use client'

import { Page } from "@/components/Page";
import { Section } from "@/components/Section";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const params = useSearchParams()
  const success = params.get('success')

  const flashMessage = () => {
    if (success === null) { return <></> }

    if (success === '1') {
      return (
        <Section>
          <div className="flex flex-col gap-4 border-[4px] border-green-400 bg-green-400/25 max-w-[800px] w-full mx-auto text-center p-6">
            <h3 className="text-subheading">Thanks for getting in touch!</h3>
            <p>We&apos;ve received your message and will get back to you as soon as possible.</p>
          </div>
        </Section>
      )
    }

    if (success === '0') {
      return (
        <Section>
          <div className="flex flex-col gap-4 border-[4px] border-red-400 bg-red-400/25 max-w-[800px] w-full mx-auto text-center p-6">
            <h3 className="text-subheading">Oops! Something went wrong.</h3>
            <p>Please try again later or email us at <a className="underline" href="mailto:hello@stellarworks.dev">hello@stellarworks.dev</a>.</p>
          </div>
        </Section>
      )
    }

    return <></>
  }

  return (
    <Page>
      <div className={`pt-nav ${success ? '' : 'animate-appear'}`}>
        <Section className="items-center">
          <div className="w-fit">
            <h1 className="text-heading">Let&apos;s talk!</h1>
            <div className={`w-full h-[4px] bg-secondary ${success ? '' : 'animate-underline'}`} />
          </div>
        </Section>

        <Section className="items-center">
          <p className="max-w-xl text-center">Need a bespoke software solution? Get in touch! Fill out the form below or email us at <a className="underline" href="mailto:hello@stellarworks.dev">hello@stellarworks.dev</a> and we&apos;ll get back to you ASAP.</p>
        </Section>

        {flashMessage()}

        <Section>
          <form className="flex flex-col gap-6 items-center mb-global" method="post" action="https://portal.stellarworks.dev/companies/stellarworks/form">
            <div className="flex flex-col gap-4 max-w-[800px] w-full">
              <label htmlFor="email">Email</label>
              <input className="input" id="email" name="form[from]" type="email" placeholder="contact@example.com" autoComplete="email" />
            </div>

            <div className="flex flex-col gap-4 max-w-[800px] w-full">
              <label htmlFor="subject">Subject</label>
              <input className="input" id="subject" name="form[subject]" type="text" placeholder="Subject..." autoComplete="nope" />
            </div>

            <div className="flex flex-col gap-4 max-w-[800px] w-full">
              <label htmlFor="message">Message</label>
              <textarea className="input min-h-[400px]" id="message" name="form[body]" placeholder="Your message here..." autoComplete="nope" />
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
