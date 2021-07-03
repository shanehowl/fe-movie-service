import _ from 'lodash'
import Axios, { AxiosResponse } from 'axios'

export const setup = () => {
  Axios.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse<any> => {
      if (_.get(response, 'status') !== 200) throw new Error(response.data)
      return response
    },
    (error) => {
      // handle the response error
      return Promise.reject(error)
    }
  )
}
setup()
