import { Dispatch } from 'react'
import {
  Program,
  RetrieveProgramListAction,
  setSelectedProgramAction,
} from '../../modals/program_list'
import { getProgramList } from '../../services/movie-list'

export const RETRIEVE_PROGRAM_LIST = 'RETRIEVE_PROGRAM_LIST'
export const retrieveProgramList = () => {
  return (dispatch: Dispatch<RetrieveProgramListAction>) => {
    const response = getProgramList()
    return dispatch({
      type: RETRIEVE_PROGRAM_LIST,
      payload: response,
    })
  }
}

export const SET_SELECTED_PROGRAM = 'SET_SELECTED_PROGRAM'
export const setSelectedProgram = (selectedProgram: Program) => (
  dispatch: Dispatch<setSelectedProgramAction>
) => {
  return dispatch({
    type: SET_SELECTED_PROGRAM,
    payload: selectedProgram,
  })
}
