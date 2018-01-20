import uniqueRandomArray from 'unique-random-array'
const bollywoodNames = require('./bollywood-names.json')

const mainExport = {
  all: bollywoodNames,
  random: uniqueRandomArray(bollywoodNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
