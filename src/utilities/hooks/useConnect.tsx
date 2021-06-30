import _ from 'lodash'
import { useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'

//* loop through the state in each reducer & return the value based on accessor path.
// eslint-disable-next-line import/prefer-default-export
export const useStateWithPaths = (statePaths = ['']) => {
  const paths = useMemo(() => statePaths, [...statePaths])
  const selector = useCallback(
    (state) => {
      return _.map(paths, (path) => {
        return _.get(state, path)
      })
    },
    [paths]
  )
  const states = useSelector(selector)
  return states
}
