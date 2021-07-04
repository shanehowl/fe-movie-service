import _ from 'lodash'
import { FC, useCallback, useMemo } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Typography, Menu } from 'antd'
import { NavigationHeaderProp } from '../../modals/components/navigation-header-modal'

import './navigation-header.scss'
/**
 *
 * NavigationHeader
 *
 */
const NavigationHeader: FC<NavigationHeaderProp> = ({
  title = '',
  routeMenuItem,
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
        <Col xs={22} sm={22} md={12} lg={12} xl={12}>
          <Link to="/" className="navigation-header__link">
            <Title level={3}>{title}</Title>
          </Link>
        </Col>
        <Col xs={2} sm={2} md={12} lg={12} xl={12}>
          <Row justify="end">
            <Col>
              {routeMenuItem && (
                <Menu
                  className="navigation-header__menu"
                  onClick={onMenuClick}
                  selectedKeys={[currentMenu]}
                  mode="horizontal"
                >
                  {_.map(routeMenuItem, (item) => (
                    <Menu.Item key={item.key}>{item.value}</Menu.Item>
                  ))}
                </Menu>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default NavigationHeader
