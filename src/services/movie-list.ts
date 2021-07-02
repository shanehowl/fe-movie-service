import _ from 'lodash'
//* JSON
import MOVIELIST from '../assets/jsons/movieList.json'

//* Modal
import { Program } from '../modals/program_list'

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
