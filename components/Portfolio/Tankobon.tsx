'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import { TechGrid } from "../TechGrid";
import { TechCell } from "../TechCell";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { ScreenshotSection } from "../ScreenshotSection";
import { ProjectCta } from "../ProjectCta";
import ProjectTitle from "./ProjectTitle";

export default function Tankobon() {
  const screenshots = [
    "/screenshots/tankobon/0.png",
    "/screenshots/tankobon/1.png",
    "/screenshots/tankobon/2.png",
    "/screenshots/tankobon/3.png",
    "/screenshots/tankobon/4.png",
    "/screenshots/tankobon/5.png",
    "/screenshots/tankobon/6.png",
    "/screenshots/tankobon/7.png",
    "/screenshots/tankobon/8.png",
    "/screenshots/tankobon/9.png"
  ]

  return (
    <ScreenSelectorScreen>
      <ProjectTitle title="Tankōbon"
        subheading="Documenting manga chapters and volumes."
        image="/projects/logos/tankobon.svg"
        colour="bg-[#29CF95]"
      />

      <Section>
        <h3 className="text-subheading tracking-wider">The tankōbon format</h3>
        <p>In Japan, manga are typically collected in volumes, each with a length of around 7 chapters. Most series are first serialized in magazines before being compiled into tankōbon volumes.</p>
      </Section>

      <Section>
        <h3 className="text-subheading tracking-wider">Built and maintained by the community</h3>
        <p>Tankōbon is a community-driven site, meaning you can add or edit data as long as you have an account. Tankōbon is also open-source! Community members can contribute by suggesting new features and fixing bugs.</p>
      </Section>

      <Section>
        <h3 className="text-subheading tracking-wider">For the collector</h3>
        <p>Never accidentally buy the same volume twice! Tankōbon helps you track your manga collection across multiple editions.</p>
      </Section>

      <ProjectCta colour="bg-[#29CF95]" />

      <Section>
        <h3 className="text-subheading tracking-wider">Technologies:</h3>
        <TechGrid>
          <TechCell href="https://www.python.org" devicon="devicon-python-plain"/>
          <TechCell href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" devicon="devicon-javascript-plain"/>
          <TechCell href="https://www.djangoproject.com" devicon="devicon-django-plain"/>
          <TechCell href="https://docs.pytest.org/en/stable/" devicon="devicon-pytest-plain"/>
          <TechCell href="https://www.postgresql.org" devicon="devicon-postgresql-plain"/>
          <TechCell href="https://circleci.com" devicon="devicon-circleci-plain"/>
        </TechGrid>
      </Section>

      <Section>
        <h3 className="text-subheading tracking-wider">Links:</h3>
        <div className="flex flex-wrap gap-4">
          <Link className="flex items-center gap-2 text-[15px] border-[4px] py-4 px-7 border-accent hover:bg-secondary transition duration-300" href="https://tankobon.fly.dev/">
            <FontAwesomeIcon icon={faGlobe} className="text-lg" />
            Website
          </Link>
          <Link className="flex items-center gap-2 text-[15px] border-[4px] py-4 px-7 border-accent hover:bg-secondary transition duration-300" href="https://github.com/crxssed7/tankobon">
            <i className="devicon-github-original text-xl"></i>
            Code
          </Link>
        </div>
      </Section>

      <ScreenshotSection screenshots={screenshots} />
    </ScreenSelectorScreen>
  )
}
