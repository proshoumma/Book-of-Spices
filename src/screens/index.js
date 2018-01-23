import { Navigation } from 'react-native-navigation'

import Landing from './Landing'
import SpicesList from './SpicesList'
import SkillTest from './SkillTest'
import { routeNames } from '../constants'

export function registerScreens() {
  const {
    LANDING,
    SPICESLIST,
    SKILLTEST
  } = routeNames

  Navigation.registerComponent(LANDING, () => Landing)
  Navigation.registerComponent(SPICESLIST, () => SpicesList)
  Navigation.registerComponent(SKILLTEST, () => SkillTest)
}
