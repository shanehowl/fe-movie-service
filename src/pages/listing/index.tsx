import _ from 'lodash'
import { FC, useMemo } from 'react'
import { Row, Col, Typography } from 'antd'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

//* Constants
import { PROGRAM_TYPE } from '../../constants/programType'

//* Style
import './listing.less'
import { Program } from '../../modals/program_list'

const { Title } = Typography
const MovieListing = () => {
  //* Redux
  const { programs } = useSelector((state: RootState) => state.programListReducer)

  const movies = _.filter(programs, { programType: PROGRAM_TYPE.movie })
  return (
    <div className="MovieListing">
      {_.map(movies, (movie: Program, index) => {
        return (
          <div className="list-card" key={`${movie.title}-${index}`}>
            <div className="list-card__thumbnail">
              <img src={_.get(movie, 'images.url')} alt={`${movie.title}-thumbnail`} />
            </div>
            <div className="list-card__footer">
              <Title className="list-card__footer__title">{movie.title}</Title>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const SeriesListing = () => {
  return <div>series</div>
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
        <Col md={{ order: 1, span: 4 }} lg={{ order: 1, span: 4 }} xl={{ order: 1, span: 4 }} />
        <Col md={{ order: 2, span: 16 }} lg={{ order: 2, span: 16 }} xl={{ order: 2, span: 16 }}>
          {listType === PROGRAM_TYPE.movie && <MovieListing />}
          {listType === PROGRAM_TYPE.series && <SeriesListing />}
        </Col>
        <Col md={{ order: 3, span: 4 }} lg={{ order: 3, span: 4 }} xl={{ order: 3, span: 4 }} />
      </Row>
    </>
  )
}
export default Listing
