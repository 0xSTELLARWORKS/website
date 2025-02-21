'use client'

import Image from "next/image"
import { NavLink } from "./NavLink"
import { useEffect, useState, useCallback, useRef } from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinksRef = useRef<HTMLDivElement>(null)
  const leftGradientRef = useRef<HTMLDivElement>(null)
  const rightGradientRef = useRef<HTMLDivElement>(null)

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

  const handleNavLinksScroll = useCallback(() => {
    if (navLinksRef.current && navLinksRef.current?.scrollLeft > 0) {
      leftGradientRef.current?.classList.remove("opacity-0")
    } else {
      leftGradientRef.current?.classList.add("opacity-0")
    }

    // Do the same for the right gradient
    if (navLinksRef.current && navLinksRef.current?.scrollLeft < navLinksRef.current.scrollWidth - navLinksRef.current.clientWidth) {
      rightGradientRef.current?.classList.remove("opacity-0")
    } else {
      rightGradientRef.current?.classList.add("opacity-0")
    }
  }, [])

  useEffect(() => {
    handleScroll()
    handleNavLinksScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    const ref = navLinksRef
    ref.current?.addEventListener("scroll", handleNavLinksScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      ref.current?.removeEventListener("scroll", handleNavLinksScroll)
    }
  }, [handleScroll, handleNavLinksScroll])

  return (
    <div
      className={`fixed top-0 w-full border-b-4 border-accent bg-secondary transition-all duration-300 ease-in-out z-10 max-h-[160px] md:max-h-[360px] ${
        isScrolled ? "h-[160px]" : "h-[360px]"
      }`}
    >
      <div className="absolute w-full h-full -z-10 animate-fade site-header"></div>
      <div className="flex h-full w-full justify-center items-center relative duration-300 ease-in-out">
        <Image
          className="w-auto mb-[60px] mb:mb[50px] max-h-[75px] md:max-h-[170px] transition-all duration-300 ease-in-out animate-fade"
          src="/logo.svg"
          alt="StellarWorks logo"
          height={0}
          width={0}
          style={{ height: isScrolled ? "75px" : "170px" }}
        />
        <div className="h-16 flex gap-4 justify-start items-center absolute bottom-0 w-full overflow-x-auto no-scrollbar" ref={navLinksRef}>
          <div className="opacity-0 pointer-events-none fixed h-[64px] sm:w-0 w-16 z-20 bg-gradient-to-r from-secondary/75 via-secondary/75 to-transparent transition duration-300 ease-in-out" ref={leftGradientRef} />
          <div className="flex gap-4 mx-auto px-4">
            <NavLink text="Home" href="/"/>
            <NavLink text="Portfolio" href="/portfolio"/>
            <NavLink text="Team" href="/team"/>
            <NavLink text="Contact" href="/contact"/>
            <NavLink text="" href="https://github.com/0xSTELLARWORKS" icon={faGithub}/>
            <NavLink text="" href="https://github.com/0xSTELLARWORKS" icon={faInstagram}/>
          </div>
          <div className="opacity-0 pointer-events-none fixed right-0 h-[64px] sm:w-0 w-16 z-20 bg-gradient-to-l from-secondary/75 via-secondary/75 to-transparent transition duration-300 ease-in-out" ref={rightGradientRef} />
        </div>
      </div>
    </div>
  )
}
