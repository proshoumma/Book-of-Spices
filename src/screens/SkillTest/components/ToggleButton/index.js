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
import { activeOpacity } from '../../../../globalStyles'

const ToggleButton = (props) => {
  const {
    name,
    activeButton,
    correctAnswer,
    updateActiveButton
  } = props

  let buttonIsActive = false
  if (name === activeButton) {
    buttonIsActive = true
  }

  // since TouchableNativeFeedback is not supported on ios
  const ButtonComponent = 
    Platform.OS === 'ios' ?
    TouchableOpacity :
    TouchableNativeFeedback

  return (
    <ButtonComponent
      onPress={() => {
        updateActiveButton(
          name,
          correctAnswer
        )
      }}
      activeOpacity={activeOpacity}
    >
      <View 
        style={ buttonIsActive
          ? [styles.container, styles.containerActive]
          : styles.container
        }
      >
        <TextSpaced
          style={ buttonIsActive
            ? [styles.label, styles.labelActive]
            : styles.label
          }
          letterSpacing={1}
        >
          { ` ${name.toUpperCase()} ` }
        </TextSpaced>
      </View>
    </ButtonComponent>
  )
}

ToggleButton.propTypes = {
  name: PropTypes.string,
  activeButton: PropTypes.string,
  correctAnswer: PropTypes.bool,
  updateActiveButton: PropTypes.func
}

export default ToggleButton
