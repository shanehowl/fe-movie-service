const config = require('./actions')

// eslint-disable-next-line func-names
module.exports = function (plop) {
  plop.setGenerator('component', config)
}
