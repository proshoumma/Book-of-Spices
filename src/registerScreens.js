import { Provider } from 'react-redux'

import store from './store'

/**
 * register screens to the Navigation objests registerComponent func
 * @param {function} registerComponent 
 * @param {array} routes 
 */
const registerScreens = (registerComponent, routes) => {
  routes.forEach((route) => {
    registerComponent(route.name, () => route.component, store, Provider)
  })
}

export default registerScreens
