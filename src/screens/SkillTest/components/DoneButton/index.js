import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const DoneButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text>Done</Text>
      </View>
    </TouchableOpacity>
  )
}

DoneButton.propTypes = {
  onPress: PropTypes.func
}

export default DoneButton
