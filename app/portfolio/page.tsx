'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Page } from "@/components/Page"
import Tankobon from "@/components/Portfolio/Tankobon"
import Kaboom from "@/components/Portfolio/Kaboom"
import { ScreenSelector } from "@/components/ScreenSelector/ScreenSelector"
import { ScreenSelectorItem } from "@/components/ScreenSelector/ScreenSelectorItem"
import { ScreenSelectorSideBar } from "@/components/ScreenSelector/ScreenSelectorSideBar"
import Blueclipper from "@/components/Portfolio/Blueclipper"
import OurWork from "@/components/Portfolio/OurWork"

const SCREENS = ["our-work", "kaboom", "blueclipper", "tankobon"]

export default function Portfolio() {
  const router = useRouter()
  const [screenName, setScreenName] = useState<string>("")

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")

    if (SCREENS.includes(hash)) {
      setScreenName(hash)
    } else {
      const defaultScreen = SCREENS[0]
      setScreenName(defaultScreen)
      router.replace(`#${defaultScreen}`, {})
    }
  }, [router])

  const updateHash = (newHash: string) => {
    setScreenName(newHash)
    router.replace(`#${newHash}`, {})
  }

  const getScreen = () => {
    const screens = [
      <OurWork key={0} />, <Kaboom key={1} />, <Blueclipper key={2} />, <Tankobon key={3} />
    ]
    const index = SCREENS.indexOf(screenName)
    return screens[index]
  }

  return (
    <Page>
      <ScreenSelector>
        <ScreenSelectorSideBar>
          <ScreenSelectorItem
            name="Our work"
            active={screenName === "our-work"}
            onClick={() => updateHash("our-work")}
          />
          <ScreenSelectorItem
            name="Kaboom"
            image="/projects/kaboom.svg"
            active={screenName === "kaboom"}
            onClick={() => updateHash("kaboom")}
          />
          <ScreenSelectorItem
            name="blueclipper"
            image="/projects/blueclipper.svg"
            active={screenName === "blueclipper"}
            onClick={() => updateHash("blueclipper")}
          />
          <ScreenSelectorItem
            name="Tankobon"
            image="/projects/tankobon.svg"
            active={screenName === "tankobon"}
            onClick={() => updateHash("tankobon")}
          />
        </ScreenSelectorSideBar>
        {getScreen()}
      </ScreenSelector>
    </Page>
  )
}
