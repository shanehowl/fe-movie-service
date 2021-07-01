import { Dispatch } from 'react'
import { RetrieveMovieListAction } from '../../modals/movie_list'
import { getMovieList } from '../../services/movie-list'

export const RETRIEVE_MOVIE_LIST = 'RETRIEVE_MOVIE_LIST'
export const retrieveMovieList = () => {
  return (dispatch: Dispatch<RetrieveMovieListAction>) => {
    const response = getMovieList()
    return dispatch({
      type: RETRIEVE_MOVIE_LIST,
      payload: response,
    })
  }
}
