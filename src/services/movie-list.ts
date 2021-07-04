import _ from 'lodash'
import { message } from 'antd'
import Axios, { AxiosError, AxiosResponse } from 'axios'

//* JSON
import MOVIELIST from '../assets/jsons/movieList.json'

//* Modal
import { FunFactResponse, Program } from '../modals/program_list'

export const getProgramList = () => {
  return {
    total: MOVIELIST.total,
    entries: _.chain(MOVIELIST)
      .get('entries', [])
      .reduce((accumulator: Program[], program: Program) => {
        accumulator.push({
          ...program,
          images: {
            ..._.get(program, 'images.Poster Art', {}),
          },
        })
        return accumulator
      }, [] as Program[])
      .value(),
  }
}

export const getFunFactByYear = ({ releaseYear }: { releaseYear: number }) => {
  return Axios.get(`http://numbersapi.com/${releaseYear}/year`, {
    params: {
      json: true,
      default: 'Looks like this program runs out of fun fact.',
    },
  })
    .then((response: AxiosResponse<FunFactResponse>) => {
      return response.data
    })
    .catch((error: Error | AxiosError) => {
      message.error({
        content:
          "Opps, looks like there's an network error. Please reach out to our support team to assit you",
      })
      console.error('Error log for dev', error)
    })
}
