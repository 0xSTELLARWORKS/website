'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import 'swiper/css';
import { TechCell } from "../TechCell";
import { TechGrid } from "../TechGrid";
import { ScreenshotSection } from "../ScreenshotSection";

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
      <Section>
        <h2 className="text-heading font-extrabold tracking-wider">Kaboom.</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh urna condimentum ex pretium cubilia neque aenean tortor. Nullam euismod accumsan ante ad lacinia. Molestie a ut mattis non eget ornare habitasse senectus id. Ac tempor scelerisque torquent amet morbi morbi gravida tristique. Aenean vivamus convallis taciti dignissim facilisis ante. Etiam faucibus velit magna ultricies facilisis orci tortor. Sagittis suscipit justo ac nam velit urna dictum maximus. Pellentesque aliquam cubilia platea faucibus turpis dis ligula.</p>
        <p>Tempor odio condimentum posuere eu aenean urna lacinia. Donec senectus euismod sagittis consequat placerat. Etiam varius maecenas integer tristique iaculis. Curae gravida tincidunt venenatis lacinia laoreet maximus lectus sem augue. Urna ante dignissim sed ornare elementum. Risus primis pulvinar penatibus integer elementum venenatis. Porta maecenas libero ridiculus nec convallis placerat. Sagittis orci lobortis adipiscing nostra habitant curabitur nascetur. Venenatis erat volutpat natoque mi, dictum eu.</p>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Technologies:</h3>
        <TechGrid>
          <TechCell href="https://www.ruby-lang.org/en/" devicon="devicon-ruby-plain"/>
          <TechCell href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" devicon="devicon-javascript-plain"/>
          <TechCell href="https://rubyonrails.org" devicon="devicon-rails-plain"/>
          <TechCell href="https://rspec.info" devicon="devicon-rspec-plain"/>
          <TechCell href="https://www.postgresql.org" devicon="devicon-postgresql-plain"/>
        </TechGrid>
      </Section>

      <Section>
        <h3 className="text-subheading font-extrabold tracking-wider">Links:</h3>
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
