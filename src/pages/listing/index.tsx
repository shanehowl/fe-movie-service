import _ from 'lodash'
import { FC, useMemo } from 'react'
import { Row, Col, Typography, Modal } from 'antd'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

//* Components
import ORCButton from '../../components/button'

//* Constants
import { PROGRAM_TYPE } from '../../constants/programType'

//* Modal
import { FunFactResponse, Program } from '../../modals/program_list'

//* Style
import './listing.scss'
import { getFunFactByYear } from '../../services/movie-list'

const { Title } = Typography

const funFactInfo = ({ funFact, program }: { funFact: FunFactResponse; program: Program }) => {
  return Modal.info({
    width: '50vw',
    className: 'ProgramDetailInfo',
    content: (
      <Row>
        <Col lg={14} className="ProgramDetailInfo__info">
          <Title className="title">Did you know?</Title>
          <div className="description">{funFact.text}</div>
        </Col>
        <Col lg={10} className="ProgramDetailInfo__thumbnail">
          <img src={_.get(program, 'images.url')} alt="funfact-movie-thumbnail" />
        </Col>
      </Row>
    ),
    okText: 'Close',
  })
}

const programDetailInfo = ({ details }: { details: Program }) => {
  return Modal.info({
    width: '50vw',
    className: 'ProgramDetailInfo',
    content: (
      <Row>
        <Col lg={14} className="ProgramDetailInfo__info">
          <Title className="title">{details.title}</Title>
          <div className="description">{details.description}</div>
          <div className="release-year">
            <span className="release-year__label">Release Year:</span>
            <span className="release-year__badge">{details.releaseYear}</span>
          </div>
        </Col>
        <Col lg={10} className="ProgramDetailInfo__thumbnail">
          <img src={_.get(details, 'images.url')} alt="program-details-thumbnail" />
        </Col>
      </Row>
    ),
    okText: 'Close',
  })
}

const ProgramListing = ({ programType }: { programType: string }) => {
  //* Redux
  const { programs } = useSelector((state: RootState) => state.programListReducer)

  const typedPrograms = _.filter(programs, { programType })

  //* Methods
  const onViewDetails = ({ program }: { program: Program }) => {
    if (program) {
      programDetailInfo({
        details: program,
      })
    }
  }

  const onFunFact = async ({ program }: { program: Program }) => {
    const funFact = await getFunFactByYear({ releaseYear: program.releaseYear })
    if (funFact && program) {
      funFactInfo({
        funFact,
        program,
      })
    }
  }

  return (
    <>
      <div className="ProgramListing">
        {_.map(typedPrograms, (program: Program, index) => {
          return (
            <div className="list-card" key={`${program.title}-${index}`}>
              <section className="list-card__thumbnail">
                <img src={_.get(program, 'images.url')} alt={`${program.title}-thumbnail`} />
              </section>
              <section className="list-card__footer">
                <Title className="list-card__footer__title">{program.title}</Title>
                <div className="list-card__footer__cta-group">
                  <ORCButton type="secondary" onClick={() => onFunFact({ program })}>
                    Did you know?
                  </ORCButton>
                  <ORCButton type="primary" onClick={() => onViewDetails({ program })}>
                    View Details
                  </ORCButton>
                </div>
              </section>
            </div>
          )
        })}
      </div>
    </>
  )
}

const Listing: FC = () => {
  const location = useLocation()
  const listType = useMemo(() => {
    const pathName = _.get(location, 'pathname', '')
    if (pathName) {
      return _.replace(pathName, '/', '')
    }
    return ''
  }, [location])
  return (
    <>
      <Row align="middle" justify="center" gutter={[16, 16]} className="Listing-page">
        <Col md={{ order: 1, span: 4 }} lg={{ order: 1, span: 2 }} xl={{ order: 1, span: 4 }} />
        <Col md={{ order: 2, span: 16 }} lg={{ order: 2, span: 20 }} xl={{ order: 2, span: 16 }}>
          {listType === PROGRAM_TYPE.movie && <ProgramListing programType={PROGRAM_TYPE.movie} />}
          {listType === PROGRAM_TYPE.series && <ProgramListing programType={PROGRAM_TYPE.series} />}
        </Col>
        <Col md={{ order: 3, span: 4 }} lg={{ order: 3, span: 2 }} xl={{ order: 3, span: 4 }} />
      </Row>
    </>
  )
}
export default Listing
