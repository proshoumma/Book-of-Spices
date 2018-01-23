import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'
import { routeNames } from './constants'

// register all the screens
registerScreens()

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: routeNames.LANDING
  }
})

export default Navigation
