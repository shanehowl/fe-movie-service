import { ProgramListState } from '../../modals/program_list'
import { RETRIEVE_PROGRAM_LIST, SET_SELECTED_PROGRAM } from '../actions/action_program_list'

const defaultMovieListState: ProgramListState = {
  programs: [],
  selectedProgram: {},
  total: 0,
}
export default (state = defaultMovieListState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case RETRIEVE_PROGRAM_LIST: {
      const { entries, total } = action.payload
      return {
        ...state,
        programs: entries,
        total,
      }
    }
    case SET_SELECTED_PROGRAM: {
      return {
        ...state,
        selectedProgram: action.payload,
      }
    }
    default:
      break
  }
  return state
}
