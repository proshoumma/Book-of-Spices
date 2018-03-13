import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const NextButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text>Next</Text>
      </View>
    </TouchableOpacity>
  )
}

NextButton.propTypes = {
  onPress: PropTypes.func
}

export default NextButton
