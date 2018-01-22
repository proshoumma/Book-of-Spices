import { Navigation } from 'react-native-navigation'

import Landing from './Landing'
import { LANDING } from './constants'

export function registerScreens() {
  Navigation.registerComponent(LANDING, () => Landing)
}
