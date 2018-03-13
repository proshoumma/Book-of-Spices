import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

import Button from '../../../../components/Button'
import styles from './styles'

const InitialView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Test your spice skill</Text>
        <Text style={styles.infoText}>Recognize 10 random spices</Text>
        <Text style={styles.infoText}>Time limit is 30 seconds!</Text>
      </View>
      
      <View style={styles.bottomButtonContainer}>
        <Button
          label={'Start Test'}
          onPress={props.onStartPress}
        />
      </View>
    </View>
  )
}

InitialView.defaultProps = {
  onStartPress: () => { /* do nothing */ }
}

InitialView.propTypes = {
  onStartPress: PropTypes.func
}

export default InitialView
