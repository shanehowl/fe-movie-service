import { combineReducers } from 'redux'
import { MovieListState } from '../../modals/movie_list'

import crudPageReducer from './reducer_crud_page'
import movieListReducer from './reducer_movie_list'

export interface RootState {
  movieListReducer: MovieListState
}

const rootReducer = combineReducers({
  crudPageReducer,
  movieListReducer,
})

export default rootReducer
