'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import { TechGrid } from "../TechGrid";
import { TechCell } from "../TechCell";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";

export default function Tankobon() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <h2 className="text-heading font-extrabold tracking-wider">Tankobon.</h2>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Technologies:</h3>
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
        <h3 className="text-subheading font-extrabold tracking-wider">Links:</h3>
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
    </ScreenSelectorScreen>
  )
}
