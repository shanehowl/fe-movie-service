import _, { uniqueId } from 'lodash'

export const appendIdToObject = (object = {}, prefix = '') => {
  if (_.isArray(object)) {
    return _.map(object, (item) => ({
      ...item,
      id: _.uniqueId(prefix),
    }))
  }
  return {
    ...object,
    id: uniqueId(prefix),
  }
}

//* reverse truncate string
export const reverseSliceByCharacter = (string: string, characterAt: string) => {
  return string.slice(-string.indexOf(characterAt) - 1)
}
