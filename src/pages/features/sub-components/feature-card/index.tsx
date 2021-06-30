import { FC, useCallback } from 'react'
import { Row, Col, Typography, Image } from 'antd'
import './feature-card.less'
import { FEATURE_DETAIL } from '../../modal'

/**
 *
 * Header
 *
 */
const Header: FC<{ headerTitle: string; headerColor: string }> = ({ headerTitle, headerColor }) => {
  return (
    <Row className="feature-card__header" align="middle" justify="start">
      <Col className="title" style={{ borderColor: headerColor }}>
        {headerTitle}
      </Col>
    </Row>
  )
}

/**
 *
 * Body
 *
 */
const Body: FC<{ title: string; icon: string; description: string }> = ({
  title,
  icon,
  description,
}) => {
  const { Title, Paragraph } = Typography
  return (
    <Row className="feature-card__body" align="middle">
      <Col span={24}>
        <Row>
          <Col span={2} />
          <Col span={20}>
            <Image height={150} src={icon} />
          </Col>
          <Col span={2} />
        </Row>
      </Col>
      <Col span={24}>
        <Title level={3}>{title}</Title>
      </Col>
      <Col span={24}>
        <Paragraph>{description}</Paragraph>
      </Col>
    </Row>
  )
}

/**
 *
 * FeatureCard
 *
 */
const FeatureCard: FC<{ feature: FEATURE_DETAIL }> = ({ feature }) => {
  const { headerTitle, headerColor, title, icon, description, link } = feature
  const onFeatureSelect = useCallback(() => {
    window.open(link)
  }, [link])
  return (
    <Row>
      <Col span={24} className="feature-card" onClick={onFeatureSelect}>
        <Header headerTitle={headerTitle} headerColor={headerColor} />
        <Body title={title} icon={icon} description={description} />
      </Col>
    </Row>
  )
}

export default FeatureCard
