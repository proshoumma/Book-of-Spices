import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'
import TextSpaced from 'react-native-letter-spacing'
import Swiper from 'react-native-swiper'

import styles from './styles'
import SliderDot from './components/SliderDot'
import { navigatorStyles } from '../../globalStyles'

class SpiceDetail extends Component {
  static navigatorStyle = {
    ...navigatorStyles
  }

  constructor(props) {
    super(props)
    this.state = {
      name: 'default name',
      description: 'default description',
      usage: 'default usage',
      images: [],
    }
  }

  componentDidMount() {
    const {
      spicesList,
      spiceId
    } = this.props
    const currentSpice = _.find(spicesList, { id: spiceId })

    if (currentSpice !== null) {
      const {
        name,
        description,
        usage,
        images
      } = currentSpice
  
      this.setState({
        name,
        description,
        usage,
        images
      })
  
      this.props.navigator.setTitle({
        title: name
      })
    }
  }

  renderSliderImages = (images) => {
    return images.map((eachImage, index) => {
      return (
        <Image
          key={index}
          source={eachImage.source}
          style={styles.slider}
          resizeMode={'cover'}
        />
      )
    })
  }

  renderSlider = (images) => {
    return (
      <Swiper
        loop={false}
        bounces={true}
        dot={<SliderDot />}
        activeDot={<SliderDot active />}
        paginationStyle={{ bottom: 5 }}
      >
        { this.renderSliderImages(images) }
      </Swiper>
    )
  }

  render() {
    const {
      name,
      description,
      usage,
      images
    } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          { this.renderSlider(images) }
        </View>

        <ScrollView>
          <View style={styles.infoContainer}>
            <TextSpaced style={styles.title} letterSpacing={3}>
              { ` ${name} ` }
            </TextSpaced>
            <Text style={styles.text}>
              { description }
            </Text>

            <TextSpaced
              style={[styles.title, styles.secondaryTitle]}
              letterSpacing={3}
            >
              { ` ${'Usage'} ` }
            </TextSpaced>
            <Text style={styles.text}>
              { usage }
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

SpiceDetail.propTypes = {
  navigator: PropTypes.object,
  spicesList: PropTypes.array,
  spiceId: PropTypes.number, // coming from `push` method of previous screen
}

export default connect((state) => {
  return {
    spicesList: state.appState.spicesList
  }
})(SpiceDetail)
