'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Page } from "@/components/Page"
import { ScreenSelector } from "@/components/ScreenSelector/ScreenSelector"
import { ScreenSelectorItem } from "@/components/ScreenSelector/ScreenSelectorItem"
import { ScreenSelectorSideBar } from "@/components/ScreenSelector/ScreenSelectorSideBar"
import Tanveer from "@/components/Team/Tanveer"
import Diogo from "@/components/Team/Diogo"

const SCREENS = ["tanveer", "diogo"]

export default function Team() {
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
      <Tanveer key={0} />,
      <Diogo key={1} />
    ]
    const index = SCREENS.indexOf(screenName)
    return screens[index]
  }

  return (
    <Page>
      <ScreenSelector>
        <ScreenSelectorSideBar>
          <ScreenSelectorItem
            name="Tanveer"
            image="/team/tanveer.svg"
            active={screenName === "tanveer"}
            onClick={() => updateHash("tanveer")}
          />
          <ScreenSelectorItem
            name="Diogo"
            image="/team/diogo.svg"
            active={screenName === "diogo"}
            onClick={() => updateHash("diogo")}
          />
        </ScreenSelectorSideBar>
        {getScreen()}
      </ScreenSelector>
    </Page>
  )
}
