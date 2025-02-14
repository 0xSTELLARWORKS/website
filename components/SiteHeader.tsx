'use client'

import Image from "next/image"
import { NavLink } from "./NavLink"
import { useEffect, useState, useCallback } from "react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.innerWidth < 960) {
      setIsScrolled(true)
      document.documentElement.style.setProperty("--side-bar-top", "160px")
      return
    }

    if (window.scrollY > 200) {
      setIsScrolled(true)
      document.documentElement.style.setProperty("--side-bar-top", "160px")
    } else {
      setIsScrolled(false)
      document.documentElement.style.setProperty("--side-bar-top", "360px")
    }
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      className={`fixed top-0 w-full border-b-4 border-accent bg-secondary transition-all duration-300 ease-in-out z-10 max-h-[160px] md:max-h-[360px] ${
        isScrolled ? "h-[160px]" : "h-[360px]"
      }`}
    >
      <div className="absolute w-full h-full -z-10 animate-fade site-header"></div>
      <div className="flex h-full w-full justify-center items-center relative duration-300 ease-in-out">
        <Image
          className="w-auto mb-[60px] mb:mb[50px] max-h-[65px] md:max-h-[170px] transition-all duration-300 ease-in-out animate-fade"
          src="/logo.svg"
          alt="StellarWorks logo"
          height={0}
          width={0}
          style={{ height: isScrolled ? "65px" : "170px" }}
        />
        <div className="h-16 flex gap-4 justify-start items-center absolute bottom-0 w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-4 mx-auto px-4">
            <NavLink text="Home" href="/"/>
            <NavLink text="Portfolio" href="/portfolio"/>
            <NavLink text="Team" href="/team"/>
            <NavLink text="Contact" href="/contact"/>
          </div>
        </div>
      </div>
    </div>
  )
}
