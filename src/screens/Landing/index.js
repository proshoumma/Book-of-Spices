import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image
} from 'react-native'

import styles from './styles'
import Button from './components/Button'
import { routeNames } from '../../constants'

// background image
const backgroundImage = require('./assets/background.jpg')

class Landing extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  navigateToSpiceList = () => {
    this.props.navigator.push({
      screen: routeNames.SPICESLIST
    })
  }

  navigateToSkillTest = () => {
    this.props.navigator.push({
      screen: routeNames.SKILLTEST
    })
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
          <Text style={styles.logoLineOne}>
            The Book of
          </Text>
          <Text style={styles.logoLineTwo}>
            Spices
          </Text>
        </View>

        <View style={styles.bottomButtonContainer}>
          <Button
            label={'Learn'}
            onPress={() => { this.navigateToSpiceList() }}
          />
          <Button
            label={'Test'}
            onPress={() => { this.navigateToSkillTest() }}
          />
        </View>
      </View>
    )
  }
}

Landing.propTypes = {
  navigator: PropTypes.object
}

export default Landing