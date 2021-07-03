import { FC, PropsWithChildren } from 'react'
import './button.scss'
import { ORCButtonProps } from './modal'

/**
 *
 * Button
 *
 */
const ORCButton: FC<ORCButtonProps> = ({
  type = 'primary',
  className = '',
  shape = 'default',
  children,
  onClick = () => {},
}: PropsWithChildren<ORCButtonProps>) => {
  return (
    <button
      type="button"
      className={`ORCButton ORCButton--${type} ORCButton--${shape} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ORCButton
