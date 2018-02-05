import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    ...navigatorStyles,
    drawUnderNavBar: false
  }

  componentDidMount() {
    this.props.navigator.setTitle({
      title: "Cardamom"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Swiper
            loop={false}
            bounces={true}
            dot={<SliderDot />}
            activeDot={<SliderDot active />}
            paginationStyle={{ bottom: 5 }}
          >
            <Image
              source={require('../../DB/assets/Anise/1.jpg')}
              style={styles.slider}
              resizeMode={'cover'}
            />
            <Image
              source={require('../../DB/assets/Anise/2.jpg')}
              style={styles.slider}
              resizeMode={'cover'}
            />
          </Swiper>
        </View>

        <ScrollView>
          <View style={styles.infoContainer}>
            <TextSpaced style={styles.title} letterSpacing={3}>
              { ` ${'Cumin'} ` }
            </TextSpaced>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat feugiat tortor at ultricies. Mauris ultricies augue arcu, vel mollis risus scelerisque ac. Vestibulum dictum lacus sit amet dignissim fringilla.
            </Text>

            <TextSpaced style={[styles.title, styles.secondaryTitle]} letterSpacing={3}>
              { ` ${'Usage'} ` }
            </TextSpaced>
            <Text style={styles.text}>
              It is used in curry, biscuit, cake, sweets, desserts, bread etc.
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

SpiceDetail.propTypes = {
  navigator: PropTypes.object
}

export default SpiceDetail
