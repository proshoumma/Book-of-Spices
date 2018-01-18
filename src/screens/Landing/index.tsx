import * as React from 'react'
import {
  View,
  Text
} from 'react-native'

class Landing extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello From Landing Screen</Text>
      </View>
    )
  }
}

export default Landing