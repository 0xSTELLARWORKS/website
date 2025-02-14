'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import "swiper/css";
import { TechCell } from "../TechCell";
import { TechGrid } from "../TechGrid";
import { ScreenshotSection } from "../ScreenshotSection";
import { ProjectCta } from "../ProjectCta";
import Image from "next/image";
import ProjectTitle from "./ProjectTitle";

export default function Blueclipper() {
  return (
    <ScreenSelectorScreen>
      <ProjectTitle title="blueclipper"
        subheading="Small actions. Big impact."
        image="/projects/logos/blueclipper.svg"
        colour="bg-secondary"
      />

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">A platform for change</h3>
        <p>blueclipper helps you stay informed and engaged with causes that matter. Follow movements, share updates, and spread awareness. Whether it's social justice, environmental activism, or community initiatives, every post brings more visibility to the cause.</p>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Your voice, your impact</h3>
        <p>Support the causes you care about by sharing updates, posting about fundraisers, and amplifying important conversations. With likes, comments, and a dedicated feed, blueclipper makes it easy to connect with others who share your passion.</p>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Follow the movement</h3>
        <p>Stay up to date with real-time posts from the causes and people you follow. No algorithms pushing content—just a simple, chronological feed of the latest updates from your network.</p>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Open source, open future</h3>
        <p>blueclipper may become an open-source project, allowing contributors to help shape its development. Follow the progress on <a href="https://github.com/blueclipper" className="underline">GitHub</a>,</p>
      </Section>

      <ProjectCta colour="bg-secondary" />

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Technologies:</h3>
        <TechGrid>
          <TechCell href="https://www.ruby-lang.org/en/" devicon="devicon-ruby-plain"/>
          <TechCell href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" devicon="devicon-javascript-plain"/>
          <TechCell href="https://rubyonrails.org" devicon="devicon-rails-plain"/>
          <TechCell href="https://rspec.info" devicon="devicon-rspec-plain"/>
          <TechCell href="https://www.postgresql.org" devicon="devicon-postgresql-plain"/>
          <TechCell href="https://github.com/features/actions" devicon="devicon-githubactions-plain"/>
        </TechGrid>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Screenshots:</h3>
        <p>Coming soon</p>
      </Section>
    </ScreenSelectorScreen>
  )
}
