import { FC } from 'react'
import { Button } from 'antd'
import './button.less'
import { ORCButtonProps } from './moda'

/**
 *
 * Button
 *
 */
const ORCButton: FC = ({ children, type = 'primary', classNames = '' }: ORCButtonProps) => {
  return <Button className={`SDButton SDButton--${type} ${classNames}`}>{children}</Button>
}

export default ORCButton
