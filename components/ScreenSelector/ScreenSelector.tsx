'use client'

interface Props {
  children: React.ReactNode
}

export function ScreenSelector({ children }: Props) {
  return (
    <div className="grid grid-cols-4 min-h-screen">
      {children}
    </div>
  )
}
