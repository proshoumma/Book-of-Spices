import React from 'react'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'
import { View } from 'react-native'

import Button from '../../../../components/Button'
import styles from './styles'

const InitialView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Animatable.Text
          style={styles.mainTitle}
          animation="bounceIn"
          delay={300}
        >
          Test your spice skill
        </Animatable.Text>

        <Animatable.Text
          style={styles.infoText}
          animation="fadeInUp"
          duration={500}
          delay={800}
        >
          Recognize 10 random spices
        </Animatable.Text>

        <Animatable.Text
          style={styles.infoText}
          animation="fadeInUp"
          duration={500}
          delay={1000}
        >
          Time limit is 60 seconds!
        </Animatable.Text>
      </View>
      
      <Animatable.View
        style={styles.bottomButtonContainer}
        animation="bounceIn"
        delay={1200}
      >
        <Button
          label={'Start Test'}
          theme={'themed'}
          onPress={props.onStartPress}
        />
      </Animatable.View>
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
