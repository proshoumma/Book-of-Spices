import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { themeColor } from '../../../globalStyles'

const SliderDot = (props) => {
  const { active } = props

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: active ? themeColor : 'rgba(255, 255, 255, 0.8)'
        }
      ]}
    />
  )
}

const styles = {
  container: {
    marginLeft: 5,
    width: 30,
    height: 4,
    borderRadius: 5,
    elevation: 3
  }
}

SliderDot.defaultProps = {
  active: false
}

SliderDot.propTypes = {
  active: PropTypes.bool
}

export default SliderDot
