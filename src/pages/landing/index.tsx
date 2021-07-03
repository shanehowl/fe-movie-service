import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Row, Col, Typography, Space } from 'antd'
import { FC, useMemo, useState } from 'react'
import { RootState } from '../../redux/reducers'
import { setSelectedProgram } from '../../redux/actions/action_program_list'

//* Component
import ORCButton from '../../components/button'

//* Constants
import { ROUTES_NAMING } from '../../constants/routes'

//* Modals
import { Program } from '../../modals/program_list'

//* Assets
import { ReactComponent as EmptyImageSvg } from '../../assets/utilities/empty-image.svg'
import './landing.scss'
/**
 *
 * Landing
 *
 */
const Landing: FC = () => {
  const history = useHistory()
  //* Constants
  const { Title } = Typography

  //* Redux
  const { programs, total } = useSelector((state: RootState) => state.programListReducer)
  const dispatch = useDispatch()

  //* State
  const [movieIndex, setMovieIndex] = useState(0)

  //* Memo
  const suggestedPrograms = useMemo(() => {
    if (programs && total) {
      //* Generate 3 random number as suggestedMovie
      const sPrograms: any[] = []
      _.times(3, () => {
        const randomIndex = _.random(0, total - 1)
        sPrograms.push(programs[randomIndex])
      })
      return sPrograms
    }
    return []
  }, [programs, total])
  const highlightedProgram: Program = useMemo(
    () => _.get(suggestedPrograms, `[${movieIndex}]`, {}),
    [suggestedPrograms, movieIndex]
  )

  //* Methods
  const onNext = (): void => {
    //* If index at last suggested movie. Show back the first movie
    const nextMovieIndex: number = movieIndex === _.size(suggestedPrograms) - 1 ? 0 : movieIndex + 1
    setMovieIndex(nextMovieIndex)
  }

  const onPrev = (): void => {
    //* If index at last suggested movie. Show back the first movie
    const prevMovieIndex: number = movieIndex === 0 ? _.size(suggestedPrograms) - 1 : movieIndex - 1
    setMovieIndex(prevMovieIndex)
  }

  const onRedirect = (): any => {
    try {
      if (!highlightedProgram.programType) throw new Error()
      history.push({
        pathname: _.get(ROUTES_NAMING, highlightedProgram.programType),
      })
    } catch (error) {
      console.error('Failed to redirect. Missing program type')
    }
  }

  const onViewMoreDetail = (): void => {
    dispatch(setSelectedProgram(highlightedProgram))
    onRedirect()
  }

  return (
    <>
      <Row align="middle" justify="center" gutter={[16, 16]} className="landing-page">
        <Col
          xs={{ order: 3, span: 24 }}
          sm={{ order: 3, span: 24 }}
          md={{ order: 1, span: 12 }}
          lg={{ order: 1, span: 12 }}
          xl={{ order: 1, span: 12 }}
          className="landing-page__left"
        >
          <div className="movie-details">
            <Title className="movie-details__title">{highlightedProgram.title}</Title>
            <div className="movie-details__cta">
              <Space size={24}>
                <ORCButton
                  onClick={onRedirect}
                  type="secondary"
                  className="movie-details__cta--explore"
                >
                  Explore related
                </ORCButton>
                <ORCButton
                  type="primary"
                  className="movie-details__cta--details"
                  onClick={onViewMoreDetail}
                >
                  View details
                </ORCButton>
              </Space>
            </div>
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 3, span: 12 }}
          lg={{ order: 3, span: 12 }}
          xl={{ order: 3, span: 12 }}
          className="landing-page__right"
        >
          <div className="image-carousel">
            {!_.get(highlightedProgram, 'images.url') && <EmptyImageSvg />}
            {_.get(highlightedProgram, 'images.url') && (
              <div className="posterArt">
                <img
                  className="posterArt__thumbnail"
                  src={_.get(highlightedProgram, 'images.url', '')}
                  alt="suggested-movie-thumbnail"
                />
                <div className="posterArt__overlay">
                  <ORCButton
                    type="primary"
                    className="controller controller__left"
                    onClick={onPrev}
                  >
                    <LeftOutlined className="arrow-icon" />
                  </ORCButton>
                  <ORCButton
                    type="primary"
                    className="controller controller__right"
                    onClick={onNext}
                  >
                    <RightOutlined className="arrow-icon" />
                  </ORCButton>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Landing
