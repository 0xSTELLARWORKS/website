'use client'

interface Props {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: Props) {
  return (
    <div className={`section p-global pb-0 flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  )
}
