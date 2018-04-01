import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'
import TextSpaced from 'react-native-letter-spacing'

import styles from './styles'

const NextButton = (props) => {
  const {
    label,
    onPress,
    active
  } = props

  // since TouchableNativeFeedback is not supported on ios
  const ButtonComponent = Platform.OS === 'ios'
    ? TouchableOpacity
    : TouchableNativeFeedback

  const buttonStyle = active
    ? [styles.container, styles.active]
    : styles.container

  const onPressAction = active
    ? onPress
    : () => { /* do nothing */ }

  return (
    <ButtonComponent onPress={onPressAction}>
      <View style={buttonStyle}>
        <TextSpaced
          letterSpacing={2}
          style={styles.label}
        >
          { ` ${label.toUpperCase()} ` }
        </TextSpaced>
      </View>
    </ButtonComponent>
  )
}

NextButton.defaultProps = {
  label: 'default label',
  onPress: () => { /* do nothing */ },
  active: false
}

NextButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  active: PropTypes.bool
}

export default NextButton
