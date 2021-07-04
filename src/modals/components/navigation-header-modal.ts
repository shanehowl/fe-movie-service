import { ButtonSize, ButtonType } from 'antd/lib/button'

export interface MenuItem {
  key: string
  value: string
}
export interface NavigationHeaderProp {
  btnSize?: ButtonSize
  btnType?: ButtonType
  title: string
  routeMenuItem?: MenuItem[]
}
