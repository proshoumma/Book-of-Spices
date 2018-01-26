import _ from 'lodash'
import { Navigation } from 'react-native-navigation'

import App from '../App'

describe('App', () => {
  it('is a Navigation object', () => {
    expect(_.isEqual(App, Navigation)).toBe(true)
  })
})