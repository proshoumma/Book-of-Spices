import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'
import TextSpaced from 'react-native-letter-spacing'

import styles from './button_styles'

const Button = (props) => {
  const {
    label,
    onPress
  } = props

  // since TouchableNativeFeedback is not supported on ios
  const ButtonComponent = 
    Platform.OS === 'ios' ?
    TouchableOpacity :
    TouchableNativeFeedback

  return(
    <ButtonComponent onPress={onPress}>
      <View style={styles.container}>
        <TextSpaced style={styles.label} letterSpacing={3}>
          { ` ${label.toUpperCase()} ` }
        </TextSpaced>
      </View>
    </ButtonComponent>
  )
}

Button.defaultProps = {
  label: 'Default String',
  onPress: () => { /* do nothing */ }
}

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func
}

export default Button
