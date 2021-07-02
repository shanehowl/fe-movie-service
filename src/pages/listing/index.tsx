import _ from 'lodash'
import { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

//* Constants
import { PROGRAM_TYPE } from '../../constants/programType'

//* Style
import './listing.less'

const MovieListing = () => {
  return <div>movie</div>
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
      {listType === PROGRAM_TYPE.movie && <MovieListing />}
      {listType === PROGRAM_TYPE.series && <SeriesListing />}
    </>
  )
}
export default Listing
