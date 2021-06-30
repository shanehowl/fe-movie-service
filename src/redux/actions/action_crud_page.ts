import _ from 'lodash'
import { Dispatch } from 'react'
import {
  Book,
  CreateBookAction,
  DeleteBookAction,
  UpdateBookAction,
  RetrieveBooksAction,
} from '../../modals/crud'
import { getAvailableBooks } from '../../services/service-crud-page'

export const RETRIEVE_BOOKS = 'RETRIEVE_BOOKS'
export const retrieveAvailableBooks = () => {
  return (dispatch: Dispatch<RetrieveBooksAction>) => {
    getAvailableBooks().then((response: Book[]) => {
      return dispatch({
        type: RETRIEVE_BOOKS,
        payload: response,
      })
    })
  }
}

export const UPDATE_BOOK = 'UPDATE_BOOK'
export const updateBook = (editedBook: Book) => {
  return (dispatch: Dispatch<UpdateBookAction>, getState: Function) => {
    const {
      crudPageReducer: { booksRecord = [] },
    } = getState()
    return dispatch({
      type: UPDATE_BOOK,
      payload: _.map(booksRecord, (book: Book) => {
        if (editedBook.id === book.id) return editedBook
        return book
      }),
    })
  }
}

export const DELETE_BOOK = 'DELETE_BOOK'
export const deleteBook = (bookIDToDelete: string) => {
  return (dispatch: Dispatch<DeleteBookAction>, getState: Function) => {
    const {
      crudPageReducer: { booksRecord = [] },
    } = getState()
    return dispatch({
      type: DELETE_BOOK,
      payload: _.filter(booksRecord, (book: Book) => {
        if (bookIDToDelete !== book.id) return book
        return false
      }),
    })
  }
}

export const CREATE_BOOK = 'CREATE_BOOK'
export const createBook = (newBook: Book) => {
  return (dispatch: Dispatch<CreateBookAction>, getState: Function) => {
    const {
      crudPageReducer: { booksRecord = [] },
    } = getState()
    return dispatch({
      type: CREATE_BOOK,
      payload: [...booksRecord, newBook],
    })
  }
}
