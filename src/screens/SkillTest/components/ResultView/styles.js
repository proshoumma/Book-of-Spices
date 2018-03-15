import {
  fontFamilyLight,
  themeFont,
  primaryFontColor,
  themeColor,
  appBackgroundColor,
  margin
} from '../../../../globalStyles'

export default {
  contaienr: {
    flex: 1,
    backgroundColor: appBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontFamily: fontFamilyLight,
    fontSize: 28,
    color: primaryFontColor
  },

  score: {
    fontFamily: themeFont,
    color: themeColor,
    fontSize: 60,
    marginTop: margin
  }
}
