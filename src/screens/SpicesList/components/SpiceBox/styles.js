import { Dimensions } from 'react-native'

import {
  margin,
  borderRadius,
  fontFamilyBold,
  primaryFontColor,
  primaryFontSize
} from '../../../../globalStyles'

// relative size for each spice box
const { width, height } = Dimensions.get('window')
const boxWidth = (width / 2) - (margin * 2) + (margin / 2)
const boxHeight = (height / 4)

export default {
  container: {
    width: boxWidth,
    height: boxHeight,
    marginTop: margin,
    backgroundColor: 'white',
    borderRadius: borderRadius * 2,

    // ios shadow
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 3,
    shadowOpacity: 0.20,
    shadowOffset: {
      width: 0,
      height: 0
    },

    // android shadow
    elevation: 1
  },

  image: {
    height: boxHeight,
    width: boxWidth,
    borderRadius: borderRadius * 2
  },

  textContainer: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: borderRadius,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    textAlign: 'center',
    fontFamily: fontFamilyBold,
    fontSize: primaryFontSize - 2,
    color: primaryFontColor
  }
}