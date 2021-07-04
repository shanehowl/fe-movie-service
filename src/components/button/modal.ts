import { ReactNode, MouseEventHandler } from 'react'

export interface ORCButtonProps {
  children?: ReactNode
  type?: 'primary' | 'secondary'
  shape?: 'circle' | 'default'
  className?: string
  isLoading?: Boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}
