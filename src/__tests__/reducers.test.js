import _ from 'lodash'

import spiceList from '../DB/spices'
import reducers from '../reducers'
import { defaultState } from '../reducers'

describe('global reducers', () => {
  it('exists', () => {
    expect(reducers).not.toBeNull()
  })

  it('should return the default state', () => {
    expect(reducers(undefined, {})).toBe(defaultState)
  })

  it('should contain spices list in its default state', () => {
    const found = _.isEqual(defaultState.spicesList, spiceList)
    expect(found).toBeTruthy()
  })
})