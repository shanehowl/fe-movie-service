import { FC, useCallback } from 'react'
import { useHistory } from 'react-router'
import { Row, Col, Typography, Button, Space, Avatar } from 'antd'
import ReactLogo from '../../assets/images/react-logo.svg'
import AntDesignLogo from '../../assets/images/antd-logo.svg'
import './landing.less'

/**
 *
 * Landing
 *
 */
const Landing: FC = () => {
  const history = useHistory()
  const onRedirect = useCallback(
    (route: string) => {
      history.push(route)
    },
    [history]
  )
  const { Title, Paragraph } = Typography
  return (
    <>
      <Row align="middle" justify="space-between" gutter={[16, 16]} className="landing-page">
        <Col
          xs={{ order: 3, span: 24 }}
          sm={{ order: 3, span: 24 }}
          md={{ order: 1, span: 11 }}
          lg={{ order: 1, span: 10 }}
          xl={{ order: 1, span: 10 }}
        >
          <Row>
            <Col>
              <Title className="left-section__title" level={1}>
                Acclerate your development
              </Title>
              <Paragraph className="left-section__paragraph">
                This boilerplate provides a standardized template to kickstart your React project.
                It comes with proper linting setup, folder structure and automated file setup.
              </Paragraph>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Space size={24}>
                <Button onClick={() => onRedirect('/features')} type="default">
                  View more features
                </Button>
                <Button onClick={() => onRedirect('/crud')} type="primary">
                  Simulate CRUD
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ order: 2, span: 0 }}
          sm={{ order: 2, span: 0 }}
          md={{ order: 2, span: 2 }}
          lg={{ order: 2, span: 4 }}
          xl={{ order: 2, span: 4 }}
        />
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 3, span: 11 }}
          lg={{ order: 3, span: 10 }}
          xl={{ order: 3, span: 10 }}
        >
          <Row>
            <Col>
              <Avatar
                className="right-section__avatar"
                size={{ xs: 130, sm: 150, md: 180, lg: 200, xl: 220, xxl: 220 }}
                src={ReactLogo}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Avatar
                className="right-section__avatar"
                size={{ xs: 80, sm: 90, md: 100, lg: 120, xl: 120, xxl: 220 }}
                src={AntDesignLogo}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Landing
