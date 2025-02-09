'use client'

interface Props {
  children: React.ReactNode
}

export function ScreenSelectorSideBar({ children }: Props) {
  return (
    <div className="pt-nav col-span-1 border-r-[4px] border-accent hidden md:block">
      <div className="sticky top-sideBar transition-top duration-300 ease-in-out h-available overflow-y-auto" style={{boxShadow: "0 -4px 0 rgb(var(--accent));"}}>
        {children}
      </div>
    </div>
  )
}
