import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
    ...navigatorStyles,
    drawUnderNavBar: true
  }

  componentDidMount() {
    this.props.navigator.setTitle({
      title: "The Book of Spices"
    })
  }

  renderSpiceList = () => {
    const { spiceList } = this.props
    return spiceList.map((eachSpice) => {
      return (
        <SpiceBox
          key={eachSpice.id}
          id={eachSpice.id}
          name={eachSpice.name}
          image={eachSpice.thumbnail}
          onPress={() => {
            this.props.navigator.push({
              screen: routeNames.SPICE_DETAIL,
              passProps: {
                spiceId: eachSpice.id,
                spiceThumbnail: eachSpice.thumbnail
              }
            })
          }}
        />
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.listContainer}>
            { this.renderSpiceList() }
          </View>
        </ScrollView>
      </View>
    )
  }
}

SpicesList.defaultProps = {
  spiceList: []
}

SpicesList.propTypes = {
  navigator: PropTypes.object,
  spiceList: PropTypes.array
}

export default connect(
  (state) => { return {
    spiceList: state.appState.spicesList
  } }
)(SpicesList)
