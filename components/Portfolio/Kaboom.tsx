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
import ProjectTitle from "./ProjectTitle";

export default function Kaboom() {
  const screenshots = [
    "/screenshots/kaboom/0.png",
    "/screenshots/kaboom/1.png",
    "/screenshots/kaboom/2.png",
    "/screenshots/kaboom/3.png",
    "/screenshots/kaboom/4.png",
    "/screenshots/kaboom/5.png",
    "/screenshots/kaboom/6.png",
    "/screenshots/kaboom/7.png"
  ]

  return (
    <ScreenSelectorScreen>
      <ProjectTitle title="Kaboom"
        subheading="Discover, track, and engage with your favorite comics."
        image="/projects/logos/kaboom.svg"
        colour="bg-gradient-to-r from-[#ef6461] to-[#e4b363]"
      />

      <Section>
        <h3 className="text-subheading tracking-wider">The Kaboom experience</h3>
        <p>Kaboom is your ultimate comic book companion. It covers a wide range of comics, syncing data seamlessly from ComicVine. Whether you&apos;re into superhero tales, graphic novels, or indie comics, Kaboom helps you keep track of your entire collection with ease.</p>
      </Section>

      <Section>
        <h3 className="text-subheading tracking-wider">Built for social connection</h3>
        <p>Kaboom isn&apos;t just a comic tracker—it&apos;s a community. Follow other users, engage with their activities, and explore their ratings and reviews. Share your thoughts on your favorite issues, discover what others are reading, and connect over shared comic passions.</p>
      </Section>

      <Section>
        <h3 className="text-subheading tracking-wider">Your collection, your way</h3>
        <p>Wishlist your favorite comics, mark individual issues as read or collected, and easily manage your growing collection. Kaboom gives you the tools to organize and track your comic book journey like never before.</p>
      </Section>

      <Section>
        <h3 className="text-subheading tracking-wider">Blazing fast statistics</h3>
        <p>Kaboom&apos;s powerful statistics engine gives you lightning-fast insights into your comic collection. View your progress on a yearly or all-time basis and see exactly how many issues you&apos;ve read, collected, and completed. It&apos;s a true reflection of your comic book achievements.</p>
      </Section>

      <ProjectCta colour="bg-gradient-to-r from-[#ef6461] to-[#e4b363]" />

      <Section>
        <h3 className="text-subheading tracking-wider">Technologies:</h3>
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
        <h3 className="text-subheading tracking-wider">Links:</h3>
        <div className="flex flex-wrap gap-4">
          <Link className="flex items-center gap-2 text-[15px] border-[4px] py-4 px-7 border-accent hover:bg-secondary transition duration-300" href="https://kaboom.rocks/">
            <FontAwesomeIcon icon={faGlobe} className="text-lg" />
            Website
          </Link>
          <Link className="flex items-center gap-2 text-[15px] border-[4px] py-4 px-7 border-accent hover:bg-secondary transition duration-300" href="https://github.com/kaboom-db/kaboom">
            <i className="devicon-github-original text-xl"></i>
            Code
          </Link>
        </div>
      </Section>

      <ScreenshotSection screenshots={screenshots} />
    </ScreenSelectorScreen>
  )
}
