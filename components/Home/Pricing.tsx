'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import { ProjectCta } from "../ProjectCta";

export default function Pricing() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <h2 className="text-heading text-center relative home-title">Our<br />pricing.</h2>
      </Section>

      <Section>
        <p><b>How much does a software project cost?</b> That depends on the scope, complexity, and timeline of the project. We try to offer flexible pricing options to suit your needs, whether you prefer hourly billing, fixed-price projects, or simple ongoing development support.</p>
      </Section>

      <Section>
        <div className="w-fit">
          <h2 className="text-subheading tracking-wider">Pricing model</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <p>Our pricing model is based on the standard hourly rate of <b>£15 per hour.</b></p>
      </Section>

      <Section>
        <div className="w-fit">
          <h2 className="text-subheading tracking-wider">Fixed-price projects</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <p>For fixed-price projects, we provide an estimate based on the expected hours required to complete your project. Once quoted, you’ll never be billed more than the agreed estimate. Any additional features requested that were not part of the original scope will be quoted separately.</p>
        <ul className="list-disc ml-6">
          <li>New features and upgrades are quoted separately.</li>
          <li>Ongoing support is billed at £15 per hour, with a minimum charge of 1 hour.</li>
        </ul>
      </Section>

      <Section>
        <div className="w-fit">
          <h2 className="text-subheading tracking-wider">Long-term projects</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <p>For long-term projects you can set a monthly budget, and we will allocate development hours accordingly. For example, a £150/month budget would cover up to 10 hours of work. At the end of each month, you&apos;ll receive a summary of what was worked on.</p>
      </Section>

      <Section>
        <div className="w-fit">
          <h2 className="text-subheading tracking-wider">Bugs, bugs, and more bugs</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <p>Bugs are an unfortunate reality of software development, and while we do our best to deliver robust solutions, no project is entirely free of them.</p>
        <ul className="list-disc ml-6">
          <li><b>Fixed-price projects</b>: We fix any bugs for free if reported within 9 months of project completion. Beyond that, we charge £15 per hour.</li>
          <li><b>Ongoing projects</b>: Bug fixes are included within your monthly budget and are fixed promptly.</li>
        </ul>
      </Section>

      <Section>
        <div className="w-fit">
          <h2 className="text-subheading tracking-wider">Ongoing & additional costs</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <p>For static websites, the ongoing costs are minimal:</p>
        <ul className="list-disc ml-6">
          <li><b>Domain</b>: This is for your unique website address, e.g. yourbusiness.com. We&apos;ll set this up for you and is typically a small annual fee. If you prefer not to use a custom domain, we can provide you with a free subdomain (e.g., yourbusiness.stellarworks.dev).</li>
          <li><b>Emails sent through contact forms</b>: A small fee per email sent through your site&apos;s contact form (if you have one), but only if you exceed a certain threshold in a month. The amount and threshold can be adjusted based on your needs.</li>
        </ul>

        <p>For more complex projects, there may be additional costs such as:</p>
        <ul className="list-disc ml-6">
          <li><b>Hosting</b>: If your project requires a server (websites, databases, APIs, etc...). This is billed monthly and the amount depends on how powerful you want the server to be.</li>
          <li><b>Email services</b>: If your project requires emails to be sent to users and/or admins. The billing for this is dependent on the email service you choose (we typically use SendGrid or Mailgun). We&apos;ll guide you through the setup process and provide you with the necessary credentials (if any are needed).</li>
          <li><b>Domains</b>: If your project includes a website with a custom domain (e.g. yourbusiness.com). This is typically a small amount billed annually, but depends on the domain registrar. We can either:</li>
          <ol className="list-decimal ml-12">
            <li>Register the domain for you, in which case we will bill you annually for the price of the domain</li>
            <li>Provide you with the necessary credentials to set up the domain yourself, in which case you&apos;ll be billed by the domain registrar</li>
          </ol>
        </ul>

        <p>We&apos;ll guide you through all potential costs and ensure you know what to expect before committing.</p>
      </Section>

      <ProjectCta colour="bg-accent" title="Want to work with us?" />
    </ScreenSelectorScreen>
  )
}
