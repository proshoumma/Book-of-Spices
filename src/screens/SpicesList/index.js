import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

class SpicesList extends Component {
  static navigatorStyle = {
  }

  componentDidMount() {
    this.props.navigator.setTitle({
      title: "The Book of Spices"
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Spices Page</Text>
      </View>
    )
  }
}

SpicesList.propTypes = {
  navigator: PropTypes.object
}

export default SpicesList