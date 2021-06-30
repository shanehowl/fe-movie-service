import _ from 'lodash'
import { FC } from 'react'
import { Row, Col, Typography } from 'antd'
import { FEATURE_LIST } from './config'
import './features.less'
import FeatureCard from './sub-components/feature-card'

/**
 *
 * Features
 *
 */
const Features: FC = () => {
  const { Title } = Typography
  return (
    <>
      <Row align="middle" justify="end" gutter={16} className="feature-page">
        <Col>
          <Title className="feature-page__title" level={1}>
            Features
          </Title>
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        {_.map(FEATURE_LIST, (feature, key) => {
          return (
            <Col xs={24} sm={12} md={12} lg={6} xl={6} key={key}>
              <FeatureCard feature={feature} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Features
