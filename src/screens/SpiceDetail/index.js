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
import { SharedElementTransition } from 'react-native-navigation'

import styles from './styles'
import SliderDot from './components/SliderDot'
import { navigatorStyles } from '../../globalStyles'

const SHARED_ELEMENT_TRANSITION_DURATION = 400

class SpiceDetail extends Component {
  static navigatorStyle = {
    ...navigatorStyles,
    drawUnderNavBar: false
  }

  constructor(props) {
    super(props)
    this.state = {
      name: 'default name',
      description: 'default description',
      usage: 'default usage',
      images: [],
      showSlider: false
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

    // timer for slider to wait for finishing up SharedElementTransition
    setTimeout(() => {
      this.setState({ showSlider: true })
    }, SHARED_ELEMENT_TRANSITION_DURATION)
  }

  renderFakeImageForTransition = (id, thumbnail) => {
    return (
      <View style={styles.fakeImageForTransition}>
        <SharedElementTransition
          sharedElementId={`${id}`}
          showDuration={SHARED_ELEMENT_TRANSITION_DURATION}
          hideDuration={SHARED_ELEMENT_TRANSITION_DURATION}
          showInterpolation={{
            type: 'linear',
            easing: 'FastOutSlowIn'
          }}
          hideInterpolation={{
            type: 'linear',
            easing: 'FastOutSlowIn'
          }}
          animateClipBounds={true}
        >
          <Image
            source={thumbnail}
            style={styles.slider}
            resizeMode={'cover'}
          />
        </SharedElementTransition>
      </View>
    )
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

  renderSlider = (showSlider, images) => {
    if (!showSlider) return null
    else return (
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
      spiceThumbnail,
      spiceId
    } = this.props

    const {
      name,
      description,
      usage,
      images,
      showSlider
    } = this.state

    return (
      <View style={styles.container}>
        { this.renderFakeImageForTransition(spiceId, spiceThumbnail) }

        <View style={styles.sliderContainer}>
          { this.renderSlider(showSlider, images) }
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
  spiceThumbnail: PropTypes.number // coming from `push` method of previous screen
}

export default connect((state) => {
  return {
    spicesList: state.appState.spicesList
  }
})(SpiceDetail)
