'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Page } from "@/components/Page"
import { ScreenSelector } from "@/components/ScreenSelector/ScreenSelector"
import { ScreenSelectorItem } from "@/components/ScreenSelector/ScreenSelectorItem"
import { ScreenSelectorSideBar } from "@/components/ScreenSelector/ScreenSelectorSideBar"
import About from "@/components/Home/About"
import Pricing from "@/components/Home/Pricing"
import OpenSource from "@/components/Home/OpenSource"

const SCREENS = ["about", "pricing", "open-source"]

export default function Home() {
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
      <About key={0} />, <Pricing key={1} />, <OpenSource key={2} />
    ]
    const index = SCREENS.indexOf(screenName)
    return screens[index]
  }

  return (
    <Page>
      <ScreenSelector>
        <ScreenSelectorSideBar>
          <ScreenSelectorItem
            name="About"
            image="/home/about.svg"
            active={screenName === "about"}
            onClick={() => updateHash("about")}
          />
          <ScreenSelectorItem
            name="Pricing"
            image="/home/pricing.svg"
            active={screenName === "pricing"}
            onClick={() => updateHash("pricing")}
          />
          <ScreenSelectorItem
            name="Open Source"
            image="/home/open-source.svg"
            active={screenName === "open-source"}
            onClick={() => updateHash("open-source")}
          />
        </ScreenSelectorSideBar>
        {getScreen()}
      </ScreenSelector>
    </Page>
  )
}
