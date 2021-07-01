/* eslint-disable array-callback-return */
import _ from 'lodash'
//* JSON
import MOVIELIST from '../assets/jsons/movieList.json'

//* Modal
import { Movie } from '../modals/movie_list'

export const getMovieList = () => {
  return {
    total: MOVIELIST.total,
    entries: _.chain(MOVIELIST)
      .get('entries', [])
      .reduce((accumulator: any[], movie: Movie) => {
        accumulator.push({
          ...movie,
          images: {
            posterArt: _.get(movie, 'images.Poster Art', {}),
          },
        })
        return accumulator
      }, [])
      .value(),
  }
}
