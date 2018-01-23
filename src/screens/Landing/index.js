import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

class Landing extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello From Landing</Text>
      </View>
    )
  }
}

export default Landing