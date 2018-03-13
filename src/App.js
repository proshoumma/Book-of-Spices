import { Navigation } from 'react-native-navigation'

import registerScreens from './registerScreens'
import routes from './routes'
import { routeNames } from './constants'

// register all the screens
registerScreens(Navigation.registerComponent, routes)

// start the app
Navigation.startSingleScreenApp({
  screen: {
    // screen: routeNames.LANDING
    screen: routeNames.SKILL_TEST
  },
  appStyle: {
    keepStyleAcrossPush: false
  }
})

export default Navigation
