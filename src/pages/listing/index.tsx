import _ from 'lodash'
import { FC, useMemo, useState } from 'react'
import { Row, Col, Typography } from 'antd'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

//* Components
import ORCButton from '../../components/button'
import { programDetailInfo, funFactInfo } from '../../components/page-specific/info-modal'

//* Constants
import { PROGRAM_TYPE } from '../../constants/programType'

//* Modal
import { Program } from '../../modals/program_list'

//* Style
import './listing.scss'
import { getFunFactByYear } from '../../services/movie-list'

const { Title } = Typography

const ProgramListing = ({ programType }: { programType: string }) => {
  //* Redux
  const { programs } = useSelector((state: RootState) => state.programListReducer)

  //* State
  const [isFunFactLoading, setIsFunFactLoading] = useState<number[]>([])
  const typedPrograms = _.filter(programs, { programType })

  //* Methods
  const onViewDetails = ({ program }: { program: Program }) => {
    if (program) {
      programDetailInfo({
        details: program,
      })
    }
  }

  const onFunFact = async ({ program, index }: { program: Program; index: number }) => {
    setIsFunFactLoading((currentLoadingIndex) => [...currentLoadingIndex, index])
    const funFact = await getFunFactByYear({ releaseYear: program.releaseYear })
    setIsFunFactLoading((currentLoadingIndex) =>
      _.filter(currentLoadingIndex, (loadingIndex) => loadingIndex !== index)
    )
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
                  <ORCButton
                    type="secondary"
                    onClick={() => onFunFact({ program, index })}
                    isLoading={_.includes(isFunFactLoading, index)}
                  >
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
