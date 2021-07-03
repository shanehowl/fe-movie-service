import { ReactNode, MouseEventHandler } from 'react'

export interface ORCButtonProps {
  children?: ReactNode
  type?: 'primary' | 'secondary'
  shape?: 'circle' | 'default'
  className?: any
  onClick: MouseEventHandler<HTMLButtonElement>
}
