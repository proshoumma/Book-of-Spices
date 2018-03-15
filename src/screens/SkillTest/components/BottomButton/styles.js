import { Dimensions } from 'react-native'

import {
  borderRadius,
  buttonHeight,
  primaryFontSize,
  fontFamilyBold,
  themeColor,
  margin,
} from '../../../../globalStyles'

const { width } = Dimensions.get('window')
const buttonWidth = width - (margin * 2)

export default {
  container: {
    height: buttonHeight,
    width: buttonWidth,
    marginLeft: margin,
    marginRight: margin,
    marginBottom: margin,
    borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${themeColor}20`,
  },

  active: {
    backgroundColor: themeColor
  },

  label: {
    fontSize: primaryFontSize - 2,
    fontFamily: fontFamilyBold,
    color: 'white'
  },
}
