'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import { TechCell } from "../TechCell";
import { TechGrid } from "../TechGrid";
import ProjectTitle from "./ProjectTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";

export default function OurWork() {
  return (
    <ScreenSelectorScreen>
      <ProjectTitle title="Our work"
        subheading="Projects that matter."
        image="/projects/logos/our-work.svg"
        colour="bg-secondary"
      />

      <Section>
        <p>We create software with purpose—tools that help people track, connect, and engage with what they care about.</p>
        <p>From cataloging collections to amplifying social causes, each project is built with usability, performance, and scalability in mind. We&apos;re always exploring new ideas and pushing boundaries to create meaningful digital experiences.</p>
        <p>Our expertise spans a broad range of software, from sleek and responsive websites to powerful desktop applications. Whether it&apos;s a lightweight self-hosted solution or a large-scale platform, we focus on delivering software that is fast, reliable, and user-friendly.</p>
        <p>Many of our projects are free andopen source (FOSS), allowing anyone to contribute, improve, and adapt them to their needs. We believe in transparency and collaboration, making our code available for others to build on. By embracing open-source development, we create software that is not only functional but also shaped by a community of passionate developers and users.</p>
        <div className="hidden md:flex gap-4 items-center">
          <FontAwesomeIcon icon={faArrowCircleLeft} className="text-4xl" />
          <p className="h-fit">View our projects</p>
        </div>
        <div className="flex md:hidden z-10 gap-4 items-center fixed bottom-0 right-[130px] mb-global ml-global px-global h-20 border-[4px] border-accent bg-primary">
          <p className="h-fit text-sm">View our projects</p>
          <FontAwesomeIcon icon={faArrowCircleRight} className="text-2xl" />
        </div>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Languages:</h3>
        <TechGrid>
          <TechCell href="https://ruby-lang.org" devicon="devicon-ruby-plain" />
          <TechCell href="https://www.python.org/" devicon="devicon-python-plain" />
          <TechCell href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" devicon="devicon-javascript-plain" />
          <TechCell href="https://go.dev" devicon="devicon-go-plain" />
        </TechGrid>
      </Section>

      <Section className="pb-[130px] md:pb-0">
        <h3 className="text-subheading font-extrabold tracking-wider">Frameworks:</h3>
        <TechGrid>
          <TechCell href="https://rubyonrails.org/" devicon="devicon-rails-plain" />
          <TechCell href="https://www.djangoproject.com/" devicon="devicon-django-plain" />
          <TechCell href="https://react.dev" devicon="devicon-react-plain" />
          <TechCell href="https://nextjs.org/" devicon="devicon-nextjs-plain" />
        </TechGrid>
      </Section>
    </ScreenSelectorScreen>
  )
}
