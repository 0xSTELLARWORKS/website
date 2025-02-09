'use client'

import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface Props {
  children: React.ReactNode
}

export function ScreenSelectorSideBar({ children }: Props) {
  const [showPopup, setShowPopup] = useState(false)

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <div className="pt-nav col-span-1 border-r-[4px] border-accent hidden md:block">
        <div className="sticky top-sideBar transition-top duration-300 ease-in-out h-available overflow-y-auto" style={{boxShadow: "0 -4px 0 rgb(var(--accent))"}}>
          {children}
        </div>
      </div>
      <div className="flex justify-center items-center fixed right-0 bottom-0 h-20 w-20 mr-global mb-global border-[4px] border-accent md:hidden bg-primary z-20" onClick={() => setShowPopup(!showPopup)}>
        <FontAwesomeIcon icon={showPopup ? faClose : faBars} className="text-2xl" />
      </div>
      {showPopup && (
        <div className="fixed block md:hidden left-0 top-0 bg-black/50 w-full h-full z-10" onClick={closePopup}>
          <div className="fixed mx-global w-auto max-h-[75%] h-fit bottom-[140px] right-0 bg-primary border-l-[4px] border-r-[4px] border-t-[4px] border-accent overflow-y-auto no-scrollbar">
            {children}
          </div>
        </div>
      )}
    </>
  )
}
