import { RETRIEVE_PROGRAM_LIST, SET_SELECTED_PROGRAM } from '../redux/actions/action_program_list'

export interface Program {
  title: string
  description: string
  programType: string
  images: object
  releaseYear: number
}

export interface RetrieveProgramListAction {
  type: typeof RETRIEVE_PROGRAM_LIST
  payload: {
    total: number
    entries: Program[]
  }
}

export interface setSelectedProgramAction {
  type: typeof SET_SELECTED_PROGRAM
  payload: Program
}

export interface ProgramListState {
  programs: Program[]
  selectedProgram: Program | {}
  total: number
}

export interface FunFactResponse {
  date: string
  text: string
  number: number
  found: boolean
  type: string
}
