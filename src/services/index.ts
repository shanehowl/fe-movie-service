import _ from 'lodash'
import Axios, { AxiosResponse } from 'axios'

export const setup = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_API_URL
  Axios.defaults.headers.common['Content-Type'] = 'application/json'
  Axios.defaults.headers.common['Cache-Control'] = 'no-store'
  Axios.defaults.headers.common.Pragma = 'no-cache'
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
