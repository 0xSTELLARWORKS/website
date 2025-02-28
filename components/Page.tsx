'use client'

interface Props {
  children: React.ReactNode
  className?: string
}

export function Page({ children, className }: Props) {
  return (
    <div className={`max-w-[1440px] w-full mx-auto border-r-[4px] border-l-[4px] border-accent min-h-screen ${className}`}>
      {children}
    </div>
  )
}
