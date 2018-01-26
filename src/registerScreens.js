/**
 * register screens to the Navigation objests registerComponent func
 * @param {obfunctionject} registerComponent 
 * @param {array} routes 
 */
const registerScreens = (registerComponent, routes) => {
  routes.forEach((route) => {
    registerComponent(route.name, () => route.component)
  })
}

export default registerScreens