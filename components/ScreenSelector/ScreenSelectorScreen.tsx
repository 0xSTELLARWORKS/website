'use client'

interface Props {
  children: React.ReactNode
}

export function ScreenSelectorScreen({ children }: Props) {
  return (
    <div className="pt-nav col-span-4 md:col-span-3">
      {children}
    </div>
  )
}
