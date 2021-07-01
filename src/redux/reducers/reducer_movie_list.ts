import { RETRIEVE_MOVIE_LIST } from '../actions/action_movie_list'

const defaultMovieListState = {
  movies: [],
  total: 0,
}
export default (state = defaultMovieListState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case RETRIEVE_MOVIE_LIST: {
      const { entries, total } = action.payload
      return {
        ...state,
        movies: entries,
        total,
      }
    }
    default:
      break
  }
  return state
}
