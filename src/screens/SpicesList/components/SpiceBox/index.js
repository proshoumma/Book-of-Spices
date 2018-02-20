import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import TextSpaced from 'react-native-letter-spacing'
import { SharedElementTransition } from 'react-native-navigation'

import styles from './styles'
import { activeOpacity } from '../../../../globalStyles'

const SpiceBox = (props) => {
  const {
    id,
    name,
    image,
    onPress
  } = props

  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      <View style={styles.container}>
        <SharedElementTransition sharedElementId={ `${id}` }>
          <Image
            source={image}
            style={styles.image}
            resizeMode={'cover'}
          />
        </SharedElementTransition>
        
        <View style={styles.textContainer}>
          <TextSpaced style={styles.text} letterSpacing={1}>
            { ` ${name.toUpperCase()} ` }
          </TextSpaced>
        </View>
      </View>
    </TouchableOpacity>
  )
}

SpiceBox.defaultProps = {
  id: 1,
  name: 'Default',
  image: 1,
  onPress: () => {}
}

SpiceBox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onPress: PropTypes.func
}

export default SpiceBox