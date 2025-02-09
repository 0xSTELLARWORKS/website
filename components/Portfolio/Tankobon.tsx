'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import { TechGrid } from "../TechGrid";
import { TechCell } from "../TechCell";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { ScreenshotSection } from "../ScreenshotSection";

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
      <Section>
        <h2 className="text-heading font-extrabold tracking-wider">Tankobon.</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh urna condimentum ex pretium cubilia neque aenean tortor. Nullam euismod accumsan ante ad lacinia. Molestie a ut mattis non eget ornare habitasse senectus id. Ac tempor scelerisque torquent amet morbi morbi gravida tristique. Aenean vivamus convallis taciti dignissim facilisis ante. Etiam faucibus velit magna ultricies facilisis orci tortor. Sagittis suscipit justo ac nam velit urna dictum maximus. Pellentesque aliquam cubilia platea faucibus turpis dis ligula.</p>
        <p>Tempor odio condimentum posuere eu aenean urna lacinia. Donec senectus euismod sagittis consequat placerat. Etiam varius maecenas integer tristique iaculis. Curae gravida tincidunt venenatis lacinia laoreet maximus lectus sem augue. Urna ante dignissim sed ornare elementum. Risus primis pulvinar penatibus integer elementum venenatis. Porta maecenas libero ridiculus nec convallis placerat. Sagittis orci lobortis adipiscing nostra habitant curabitur nascetur. Venenatis erat volutpat natoque mi, dictum eu.</p>
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

      <ScreenshotSection screenshots={screenshots} />
    </ScreenSelectorScreen>
  )
}
