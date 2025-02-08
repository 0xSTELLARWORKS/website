'use client'

interface Props {
  children: React.ReactNode
}

export function TechGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 p-[4px] gap-[4px]">
      {children}
    </div>
  )
}
