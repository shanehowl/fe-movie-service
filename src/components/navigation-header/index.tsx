import _ from 'lodash'
import { FC, useCallback, useMemo } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Typography, Menu, Button } from 'antd'
import { NavigationHeaderProp } from './modal'

import './navigation-header.less'
/**
 *
 * NavigationHeader
 *
 */
const NavigationHeader: FC<NavigationHeaderProp> = ({
  btnType = 'primary',
  btnSize = 'middle',
  title = '',
}: NavigationHeaderProp) => {
  const history = useHistory()
  const { Title } = Typography
  const { pathname } = useLocation<{ pathname: string }>()
  const currentMenu = useMemo(() => _.chain(pathname).replace('/', '').value(), [pathname])
  const onMenuClick = useCallback(
    (e): void => {
      history.push(`/${e.key}`)
    },
    [history]
  )
  return (
    <>
      <Row align="middle" justify="space-between">
        <Col xs={20} sm={4} md={4} lg={4} xl={4}>
          <Link to="/" className="navigation-header__link">
            <Title level={3}>{title}</Title>
          </Link>
        </Col>
        <Col xs={3} sm={19} md={19} lg={19} xl={19}>
          <Row justify="end">
            <Col>
              <Menu
                className="navigation-header__menu"
                onClick={onMenuClick}
                selectedKeys={[currentMenu]}
                mode="horizontal"
              >
                <Menu.Item key="features">Features</Menu.Item>
                <Menu.Item key="crud">Basic CRUD</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <Button type={btnType} size={btnSize}>
            Login
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default NavigationHeader
