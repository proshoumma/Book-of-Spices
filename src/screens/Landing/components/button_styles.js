import { Dimensions } from 'react-native'

import {
  borderRadius,
  primaryFontColor,
  primaryFontSize,
  fontFamilyBold,
  buttonHeight,
  margin
} from '../../../globalStyles'

const { width } = Dimensions.get('window')
const buttonWidth = (width / 2) - (margin * 2)

export default {
  container: {
    height: buttonHeight,
    width: buttonWidth,
    borderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    justifyContent: 'center',
    alignItems: 'center'    
  },

  label: {
    fontSize: primaryFontSize,
    fontFamily: fontFamilyBold,
    color: primaryFontColor
  }
}
