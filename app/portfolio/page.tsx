'use client'

import { Page } from "@/components/Page";
import Tankobon from "@/components/Portfolio/Tankobon";
import Kaboom from "@/components/Portfolio/Kaboom";
import { ScreenSelector } from "@/components/ScreenSelector/ScreenSelector";
import { ScreenSelectorItem } from "@/components/ScreenSelector/ScreenSelectorItem";
import { ScreenSelectorSideBar } from "@/components/ScreenSelector/ScreenSelectorSideBar";
import { useState } from "react";

export default function Portfolio() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const getScreen = () => {
    const screens = [
      <Kaboom key={0} />,
      <Tankobon key={1} />
    ]
    return screens[currentScreen]
  }

  return (
    <Page>
      <ScreenSelector>
        <ScreenSelectorSideBar>
          <ScreenSelectorItem name="Kaboom" image="/projects/kaboom.svg" active={currentScreen === 0} onClick={() => setCurrentScreen(0)}/>
          <ScreenSelectorItem name="Tankobon" image="/projects/tankobon.svg" active={currentScreen === 1} onClick={() => setCurrentScreen(1)}/>
        </ScreenSelectorSideBar>
        {getScreen()}
      </ScreenSelector>
    </Page>
  )
}
