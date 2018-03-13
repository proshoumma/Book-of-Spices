import { Dimensions } from 'react-native'

import {
  appBackgroundColor
} from '../../../../globalStyles'

// maintaining a 16:10 aspect ratio
const { width } = Dimensions.get('window')
const imageWidth = width
const imageHeight = width * (10/16)

export default {
  container: {
    flex: 1,
    backgroundColor: appBackgroundColor
  },

  questionContainer: {
    flex: 1
  },

  image: {
    width: imageWidth,
    height: imageHeight
  }
}
