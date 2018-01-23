import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

class SkillTest extends Component {
  componentDidMount = () => {
    this.props.navigator.setTitle({
      title: "Skill Test"
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Test Page</Text>
      </View>
    )
  }
}

SkillTest.propTypes = {
  navigator: PropTypes.object
}

export default SkillTest