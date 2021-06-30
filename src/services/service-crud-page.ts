import Axios, { AxiosResponse } from 'axios'
import { Book } from '../modals/crud'

export const getAvailableBooks = () => {
  return Axios.get(`d5cf0834-847c-4474-a3e0-b10d1456f2e9`).then(
    (response: AxiosResponse<Book[]>) => {
      return response.data
    }
  )
}
