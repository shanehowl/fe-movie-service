import { LoadingOutlined } from '@ant-design/icons'
import { FC, PropsWithChildren } from 'react'
import './button.scss'
import { ORCButtonProps } from '../../modals/components/button-modal'

/**
 *
 * Button
 *
 */
const ORCButton: FC<ORCButtonProps> = ({
  type = 'primary',
  className = '',
  shape = 'default',
  isLoading = false,
  children,
  onClick = () => {},
}: PropsWithChildren<ORCButtonProps>) => {
  return (
    <button
      type="button"
      className={`ORCButton ORCButton--${type} ORCButton--${shape} ${className}`}
      onClick={onClick}
    >
      {isLoading ? <LoadingOutlined /> : children}
    </button>
  )
}

export default ORCButton
