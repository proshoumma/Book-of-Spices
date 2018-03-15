import { Dimensions } from 'react-native'

import {
  appBackgroundColor,
  margin
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

  multipleChoiceContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: margin,
    marginRight: margin
  },

  image: {
    width: imageWidth,
    height: imageHeight
  }
}
