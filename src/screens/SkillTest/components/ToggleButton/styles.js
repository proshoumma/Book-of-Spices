import { Dimensions } from 'react-native'

import {
  borderRadius,
  buttonHeight,
  primaryFontColor,
  primaryFontSize,
  fontFamilyBold,
  themeColor,
  margin,
} from '../../../../globalStyles'

const { width } = Dimensions.get('window')
const buttonWidth = (width / 2) - (margin * 1.5)

export default {
  container: {
    marginTop: margin,
    width: buttonWidth,
    height: buttonHeight,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerActive: {
    backgroundColor: themeColor
  },

  label: {
    fontSize: primaryFontSize - 2,
    fontFamily: fontFamilyBold,
    color: primaryFontColor
  },

  labelActive: {
    color: 'white'
  }
}
