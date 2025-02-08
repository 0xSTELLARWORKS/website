'use client'

interface Props {
  children: React.ReactNode
}

export function Section({ children }: Props) {
  return (
    <div className="section p-global pb-0 flex flex-col gap-4">
      {children}
    </div>
  )
}
