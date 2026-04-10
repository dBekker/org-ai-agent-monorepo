import type { HTMLAttributes } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className = '', children, ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
