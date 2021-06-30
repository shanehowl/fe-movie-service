import { FC } from 'react'
import { Row, Col, Typography } from 'antd'
import RecordListing from './sub-components/record-listing'
import RecordEntry from './sub-components/record-entry'

import './crud.css'

const Crud: FC = () => {
  const { Title } = Typography
  return (
    <>
      <Row align="middle" justify="end" gutter={16} className="crud-page">
        <Col>
          <Title className="crud-page__title" level={1}>
            Basic CRUD
          </Title>
        </Col>
      </Row>
      <Row gutter={[64, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <RecordListing />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <RecordEntry />
        </Col>
      </Row>
    </>
  )
}

export default Crud
