import { Dimensions } from 'react-native'

import {
  primaryFontColor,
  primaryFontSize,
  fontFamily,
  fontFamilyLight,
  margin,
  appBackgroundColor
} from '../../globalStyles'

// maintaining a 16:10 aspect ratio
const { width } = Dimensions.get('window')
const sliderWidth = width
const sliderHeight = width * (10/16)

export default {
  container: {
    flex: 1,
    backgroundColor: appBackgroundColor
  },

  sliderContainer: {
    height: sliderHeight,
    width: sliderWidth
  },

  slider: {
    height: sliderHeight,
    width: sliderWidth
  },

  fakeImageForTransition: {
    height: sliderHeight,
    width: sliderWidth,
    position: 'absolute',
    top: 0,
    left: 0
  },

  infoContainer: {
    marginTop: 24,
    marginBottom: 24,
    marginLeft: margin,
    marginRight: margin
  },

  title: {
    marginBottom: 10,
    fontFamily: fontFamilyLight,
    fontSize: 32,
    color: primaryFontColor
  },

  text: {
    marginLeft: 8,
    marginRight: 8,
    fontFamily,
    fontSize: primaryFontSize,
    lineHeight: 24,
    color: primaryFontColor
  },

  secondaryTitle: {
    fontFamily: fontFamilyLight,
    fontSize: 24,
    marginTop: 24,
    marginBottom: 10
  }
}