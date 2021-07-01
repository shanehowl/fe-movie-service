import { RETRIEVE_MOVIE_LIST } from '../redux/actions/action_movie_list'

export interface Movie {
  title: string
  description: string
  programType: string
  images: object
  releaseYear: number
}

export interface RetrieveMovieListAction {
  type: typeof RETRIEVE_MOVIE_LIST
  payload: {
    total: number
    entries: Movie[]
  }
}

export interface MovieListState {
  movies: []
  total: number
}
