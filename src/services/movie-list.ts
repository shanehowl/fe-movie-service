import _ from 'lodash'
import Axios, { AxiosResponse } from 'axios'

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
    },
  }).then((response: AxiosResponse<FunFactResponse>) => {
    return response.data
  })
}
