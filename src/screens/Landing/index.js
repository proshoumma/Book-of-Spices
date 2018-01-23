import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import styles from './styles'

// background image
const backgroundImage = require('./assets/background.jpg')

class Landing extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={backgroundImage}
          style={styles.background}
          resizeMode={'cover'}
        />

        <View style={styles.logoContainer}>

        </View>
      </View>
    )
  }
}

export default Landing