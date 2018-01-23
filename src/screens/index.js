import { Navigation } from 'react-native-navigation'

import Landing from './Landing'
import { routeNames } from '../constants'

export function registerScreens() {
  const {
    LANDING
  } = routeNames

  Navigation.registerComponent(LANDING, () => Landing)
}
