import {
  primaryFontColor,
  fontFamily,
  themeFont,
  themeColor,
  margin,
  appBackgroundColor
} from '../../../../globalStyles'

export default {
  container: {
    flex: 1,
    backgroundColor: appBackgroundColor
  },

  infoContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainTitle: {
    color: themeColor,
    fontFamily: themeFont,
    fontSize: 48,
    width: 200,
    textAlign: 'center',
    marginBottom: 60
  },

  infoText: {
    fontFamily,
    fontSize: 16,
    color: primaryFontColor,
    marginBottom: 12
  },

  bottomButtonContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: margin
  }
}
