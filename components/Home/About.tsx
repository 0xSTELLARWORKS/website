'use client'

import { ScreenSelectorScreen } from "@/components/ScreenSelector/ScreenSelectorScreen";
import { Section } from "../Section";
import { HelloWorld } from "@/components/HelloWorld";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsTurnToDots, faHandsClapping, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <ScreenSelectorScreen>
      <Section>
        <h2 className="text-heading text-center relative home-title">Building stellar<br/>software!</h2>
      </Section>

      <Section>
        <div className="w-fit">
          <h2 className="text-subheading tracking-wider">About us</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <p>Whether you need a sleek, static website or a fully tailored software solution, we design and develop applications that fit your needs. From small businesses to large-scale platforms, we create fast, scalable, and reliable software that works.</p>
        <p>With over 5 years of collective experience, we’ve built a wide range of solutions—from modern web applications to robust backend systems. We specialize in performance, security, and usability, ensuring that every project we deliver is built to last.</p>
        <p>If you have an idea but aren’t sure where to begin, don’t worry—we can help! We work closely with clients to understand their goals, challenges, and vision. We&apos;re experts at turning vague concepts into clear, actionable plans, guiding you through every step of the process.</p>
        <div>
          <p>Our services include but are not limited to:</p>
          <ul className="list-disc ml-6">
            <li>Static website development and hosting</li>
            <li>Custom data management solutions</li>
            <li>Mobile apps</li>
            <li>Desktop apps</li>
            <li>API development and integration</li>
            <li>Project upgrades/updates</li>
            <li>Support and maintenance</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="w-fit mx-auto mb-9">
          <h2 className="text-subheading tracking-wider">Our values</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <div className="flex flex-col sm:flex-row gap-16 justify-between w-full">
          <div className="text-center basis-[33%] flex flex-col gap-4">
            <FontAwesomeIcon icon={faLightbulb} className="text-4xl" />
            <p className="text-subheading tracking-wider">Innovative</p>
          </div>

          <div className="text-center basis-[33%] flex flex-col gap-4">
            <FontAwesomeIcon icon={faArrowsTurnToDots} className="text-4xl" />
            <p className="text-subheading tracking-wider">Flexible</p>
          </div>

          <div className="text-center basis-[33%] flex flex-col gap-4">
            <FontAwesomeIcon icon={faHandsClapping} className="text-4xl" />
            <p className="text-subheading tracking-wider">Collaborative</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-fit">
          <h2 className="text-subheading tracking-wider">How we work</h2>
          <div className="h-[4px] bg-secondary w-full animate-underline" />
        </div>

        <p>We prioritize short feedback loops to ensure that we’re consistently aligned with your needs. This allows us to iterate quickly, make adjustments based on your input, and deliver results faster. By staying responsive to feedback, we ensure that your project is always moving in the right direction.</p>
        <p>We also utilize CI/CD (Continuous Integration and Continuous Deployment) to keep your project continuously tested and up to date. With CI/CD in place, every change undergoes rigorous testing, and updates are deployed seamlessly, ensuring your software remains stable and current. Additionally, our strong emphasis on unit testing provides further reliability, helping us catch issues early and maintain robust software that stands the test of time. This combination of practices helps us deliver high-quality software that you can depend on.</p>
        <p>For smaller projects, such as static websites, we provide access to our client portal—a convenient space to manage key aspects of your project. Through the portal, you can view any form submissions received through your website&apos;s contact form and track any accrued bills for the month (if applicable). This ensures transparency and makes it easy to stay on top of your project&apos;s ongoing activity.</p>
      </Section>

      <Section className="!pb-[130px]">
        <HelloWorld />
      </Section>

      <div className="w-full absolute bottom-0 h-[100px] bg-center bg-no-repeat" style={{backgroundImage: 'url("/stars.svg")'}} />
    </ScreenSelectorScreen>
  )
}
