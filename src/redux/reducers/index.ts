import { combineReducers } from 'redux'
import { ProgramListState } from '../../modals/program_list'

import programListReducer from './reducer_program_list'

export interface RootState {
  programListReducer: ProgramListState
}

const rootReducer = combineReducers({
  programListReducer,
})

export default rootReducer
