import { combineReducers } from 'redux'

import crudPageReducer from './reducer_crud_page'

const rootReducer = combineReducers({
  crudPageReducer,
})

export default rootReducer
