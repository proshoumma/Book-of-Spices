import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView
} from 'react-native'

import styles from './styles'
import SpiceBox from './components/SpiceBox'
import { navigatorStyles } from '../../globalStyles'
import { routeNames } from '../../constants'

class SpicesList extends Component {
  static navigatorStyle = {
    ...navigatorStyles
  }

  componentDidMount() {
    this.props.navigator.setTitle({
      title: "The Book of Spices"
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SpiceBox
            name={'Cardamom'}
            onPress={() => {
              this.props.navigator.push({
                screen: routeNames.SPICE_DETAIL
              })
            }}
          />
          <SpiceBox
            name={'Cinnamon'}
            onPress={() => {
              this.props.navigator.push({
                screen: routeNames.SPICE_DETAIL
              })
            }}
          />
          <SpiceBox />
          <SpiceBox />
          <SpiceBox />
          <SpiceBox />
          <SpiceBox />
          <SpiceBox />
          <SpiceBox />
          <SpiceBox />
        </View>
      </ScrollView>
    )
  }
}

SpicesList.propTypes = {
  navigator: PropTypes.object
}

export default SpicesList