'use client'

import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React from "react"

interface Props {
  screenshots: string[]
  currentScreenshot: number | undefined
  setCurrentScreenshotAction: React.Dispatch<React.SetStateAction<number | undefined>>
}

export function ScreenshotViewer({ screenshots, currentScreenshot, setCurrentScreenshotAction }: Props) {
  const close = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      setCurrentScreenshotAction(undefined)
    }
  }

  const change = (offset: number) => {
    if (currentScreenshot === undefined) { return }
    let newScreenshot = currentScreenshot + offset
    if (newScreenshot >= screenshots.length) {
      newScreenshot = 0
    }
    if (newScreenshot < 0) {
      newScreenshot = screenshots.length - 1
    }
    setCurrentScreenshotAction(newScreenshot)
  }

  return (
    <>
      {currentScreenshot !== undefined && (
        <div className="z-20 fixed left-0 top-0 h-full w-full bg-black/50 backdrop-blur-sm" onClick={close}>
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-[80vw] max-h-[80vh] border-[4px] border-accent"
            src={screenshots[currentScreenshot]}
            alt={`Screenshot`}
            height={0}
            width={0}
            unoptimized
          />
          <FontAwesomeIcon icon={faCircleArrowRight} className="text-4xl absolute right-0 top-1/2 -translate-y-1/2 mr-4 cursor-pointer" onClick={() => change(1)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="text-4xl absolute left-0 top-1/2 -translate-y-1/2 ml-4 cursor-pointer" onClick={() => change(-1)} />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8  text-2xl">{currentScreenshot + 1} / {screenshots.length}</p>
        </div>
      )}
    </>
  )
}
