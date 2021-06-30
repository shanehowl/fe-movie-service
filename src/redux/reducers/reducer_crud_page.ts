import { CREATE_BOOK, DELETE_BOOK, RETRIEVE_BOOKS, UPDATE_BOOK } from '../actions/action_crud_page'

const defaultStatus = {
  booksRecord: [],
}
export default (state = defaultStatus, { type = '', payload = [] }) => {
  switch (type) {
    case RETRIEVE_BOOKS:
    case UPDATE_BOOK:
    case DELETE_BOOK:
    case CREATE_BOOK:
      return {
        ...state,
        booksRecord: payload,
      }
    default:
      break
  }
  return state
}
