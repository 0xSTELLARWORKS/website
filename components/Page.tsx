'use client'

interface Props {
  children: React.ReactNode
}

export function Page({ children }: Props) {
  return (
    <div className="max-w-[1440px] w-full mx-auto border-r-[4px] border-l-[4px] border-accent min-h-screen">
      {children}
    </div>
  )
}
