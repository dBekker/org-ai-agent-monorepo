import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn('ui-button', variant === 'primary' ? 'ui-button--primary' : 'ui-button--secondary', className)}
      {...props}
    />
  )
}
