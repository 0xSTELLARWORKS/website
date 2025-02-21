import Image from "next/image";
import { Section } from "../Section";

interface Props {
  title: string
  subheading: string
  image: string
  colour: string
}

export default function ProjectTitle({ title, subheading, image, colour }: Props) {
  return (
    <Section>
      <div className="flex gap-8 flex-col sm:flex-row sm:items-center">
        <Image width={75} height={75} src={image} alt={`${title} logo`}/>
        <div>
          <h2 className="text-heading tracking-wider">{title}.</h2>
          <p>{subheading}</p>
        </div>
      </div>
      <div className={`animate-underline mt-2 h-[4px] w-full ${colour}`}/>
    </Section>
  )
}
