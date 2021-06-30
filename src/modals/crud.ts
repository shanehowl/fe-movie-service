import {
  CREATE_BOOK,
  DELETE_BOOK,
  RETRIEVE_BOOKS,
  UPDATE_BOOK,
} from '../redux/actions/action_crud_page'

export interface Book {
  id: string | number
  name: string
  noOfItems: number
}

export interface RetrieveBooksAction {
  type: typeof RETRIEVE_BOOKS
  payload: Book[]
}
export interface UpdateBookAction {
  type: typeof UPDATE_BOOK
  payload: Book[]
}
export interface DeleteBookAction {
  type: typeof DELETE_BOOK
  payload: Book[]
}
export interface CreateBookAction {
  type: typeof CREATE_BOOK
  payload: Book[]
}

export interface TableCols {
  title: string
  accessor: string
  sortable: boolean
}
