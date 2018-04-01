import {
  fontFamilyLight,
  themeFont,
  primaryFontColor,
  themeColor,
  appBackgroundColor,
} from '../../../../globalStyles'

export default {
  contaienr: {
    flex: 1,
    backgroundColor: appBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contaienrRes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  calculatingText: {
    fontFamily: themeFont,
    fontSize: 36,
    color: themeColor
  },

  score: {
    textAlign: 'center',
    fontFamily: themeFont,
    color: themeColor,
    fontSize: 60,
  },

  title: {
    textAlign: 'center',
    marginTop: 30,
    fontFamily: fontFamilyLight,
    fontSize: 28,
    color: primaryFontColor
  },

  resultAnimationTopScore: {
    position: 'relative',
    height: 400,
    width: 400
  },

  resultAnimationAverage: {
    position: 'absolute',
    height: 400,
    width: 400
  }
}
