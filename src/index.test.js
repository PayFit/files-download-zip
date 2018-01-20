import {expect} from 'chai'
import bollywoodNames from '.'

describe('bollywood-names', () => {
  it('should have a list of all available names', () => {
    expect(bollywoodNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(bollywoodNames.random()).to.satisfy(isIncludedIn(bollywoodNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
