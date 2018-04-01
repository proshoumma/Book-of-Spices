import { Platform } from 'react-native'

// global styles
export const borderRadius = 5
export const buttonHeight = 48
export const margin = 16
export const appBackgroundColor = 'white'

// color pallate
export const primaryFontColor = '#000'
export const themeColor = '#e74c3c'

// font sizes
export const primaryFontSize = 14

// font families
export const fontFamily = "Ubuntu-Regular"
export const fontFamilyBold = "Ubuntu-Medium"
export const fontFamilyLight = "Ubuntu-Light"
export const themeFont = "Rochester"

// button opacity when pressed
export const activeOpacity = 0.6

// navigator styles
export const navigatorStyles = {
  navBarTextFontFamily: themeFont,
  navBarTextFontSize: Platform.OS === 'ios' ? 22 : 24,
  topBarElevationShadowEnabled: Platform.OS === 'ios' ? false : true,
  drawUnderNavBar: false,
  navBarBackgroundColor: 'rgba(255, 255, 255, 0.9)',
  orientation: 'portrait',

  // ios only styles
  navBarNoBorder: true,
  navBarBlur: true,
  statusBarBlur: true,

  // android only styles
  navBarTitleTextCentered: true
}
