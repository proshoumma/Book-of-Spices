import {} from 'jest'
import * as _ from 'lodash'
import { Navigation } from 'react-native-navigation'

import App from '../App'

describe('App', () => {
  it('got a Navigation object', () => {
    expect(_.isEqual(App, Navigation)).toBe(true)
  })
})