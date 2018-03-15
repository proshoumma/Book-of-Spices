import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

import styles from './styles'

const Timer = (props) => {
  const { value } = props

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        { value }
      </Text>
    </View>
  )
}

Timer.defaultProps = {
  value: 0
}

Timer.propTypes = {
  value: PropTypes.number
}

export default Timer
