import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'
import { LANDING } from './screens/constants'

// register all the screens
registerScreens()

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: LANDING
  }
})

export default Navigation
