import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

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

  return (
    <TouchableOpacity
      onPress={() => {
        updateActiveButton(
          name,
          correctAnswer
        )
      }}
    >
      <View>
        <Text
          style={{ color: buttonIsActive ? 'red': 'green' }}
        >
          { name }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

ToggleButton.propTypes = {
  name: PropTypes.string,
  activeButton: PropTypes.string,
  correctAnswer: PropTypes.bool,
  updateActiveButton: PropTypes.func
}

export default ToggleButton
