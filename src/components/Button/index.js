import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'
import TextSpaced from 'react-native-letter-spacing'

import styles from './styles'

const Button = (props) => {
  const {
    label,
    onPress,
    theme
  } = props

  // since TouchableNativeFeedback is not supported on ios
  const ButtonComponent = 
    Platform.OS === 'ios' ?
    TouchableOpacity :
    TouchableNativeFeedback

  return(
    <ButtonComponent onPress={onPress}>
      <View style={[styles.container, styles[theme]]}>
        <TextSpaced style={[styles.label, styles[`label_${theme}`]]} letterSpacing={3}>
          { ` ${label.toUpperCase()} ` }
        </TextSpaced>
      </View>
    </ButtonComponent>
  )
}

Button.defaultProps = {
  label: 'Default String',
  onPress: () => { /* do nothing */ },
  theme: 'default'
}

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  theme: PropTypes.oneOf([
    'default',
    'themed'
  ])
}

export default Button
