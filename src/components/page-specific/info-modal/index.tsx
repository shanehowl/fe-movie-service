import _ from 'lodash'
import { Row, Col, Typography, Modal } from 'antd'

//* Modal
import { FunFactResponse, Program } from '../../../modals/program_list'

//* Style
import './info-modal.scss'

const { Title } = Typography

export const programDetailInfo = ({ details }: { details: Program }) => {
  return Modal.info({
    width: '100%',
    className: 'ProgramDetailInfo',
    content: (
      <Row>
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          lg={{ order: 1, span: 14 }}
          className="ProgramDetailInfo__info"
        >
          <Title className="title">{details.title}</Title>
          <div className="description">{details.description}</div>
          <div className="release-year">
            <span className="release-year__label">Release Year:</span>
            <span className="release-year__badge">{details.releaseYear}</span>
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          lg={{ order: 2, span: 10 }}
          className="ProgramDetailInfo__thumbnail"
        >
          <img src={_.get(details, 'images.url')} alt="program-details-thumbnail" />
        </Col>
      </Row>
    ),
    okText: 'Close',
  })
}

export const funFactInfo = ({
  funFact,
  program,
}: {
  funFact: FunFactResponse
  program: Program
}) => {
  return Modal.info({
    width: '100%',
    className: 'FunFactInfo',
    content: (
      <Row>
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          lg={{ order: 1, span: 14 }}
          className="FunFactInfo__info"
        >
          <Title className="title">Did you know?</Title>
          <div className="description">{funFact.text}</div>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          lg={{ order: 2, span: 10 }}
          className="FunFactInfo__thumbnail"
        >
          <img src={_.get(program, 'images.url')} alt="funfact-movie-thumbnail" />
        </Col>
      </Row>
    ),
    okText: 'Close',
  })
}
