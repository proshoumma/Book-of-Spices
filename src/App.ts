import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

// register all the screens
registerScreens()

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'Landing',
    title: 'Landing'
  }
});