import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import * as Animatable from 'react-native-animatable'

import styles from './styles'
import CalculatingAnim from '../../assets/splashy_loader.json'
import TopScoreAnim from '../../assets/trophy.json'
import AverageAnim from '../../assets/loader_animation.json'

class ResultView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCalculating: true
    }
  }

  componentDidMount() {
    this.calculatingAnim.play()
    
    setTimeout(() => {
      this.setState({ showCalculating: false }, () => {
        this.playResultAnimation()
      })
    }, 3000)
  }

  playResultAnimation = _.once(() => {
    this.resultAnimationTopScrore && this.resultAnimationTopScrore.play()
    this.resultAnimationAverage && this.resultAnimationAverage.play()
  })

  render() {
    const {
      score,
      questionsCount
    } = this.props

    const {
      showCalculating
    } = this.state

    if (showCalculating) {
      return (
        <View style={styles.contaienr}>
          <LottieView
            ref={animation => {
              this.calculatingAnim = animation
            }}
            source={CalculatingAnim}
          />

          <Animatable.Text animation="bounceIn" style={styles.calculatingText}>
            Calculating...
          </Animatable.Text>
        </View>
      )
    }
    
    const correctAnswerPercentage = Math.round((score / questionsCount) * 100)
    let expressionAnimation = null
    let expressionText = null

    if (correctAnswerPercentage >= 80) {
      expressionAnimation = <LottieView
        ref={animation => { this.resultAnimationTopScrore = animation }}
        loop={false}
        speed={0.8}
        source={TopScoreAnim}
        style={styles.resultAnimationTopScore}
      />

      expressionText = 'You have mastered Spices!'
    } else {
      expressionAnimation = (
        <LottieView
          ref={animation => { this.resultAnimationAverage = animation }}
          loop={true}
          speed={1}
          source={AverageAnim}
          style={styles.resultAnimationAverage}
        />
      )

      expressionText = 'Keep playing...!'
    }
    

    return (
      <View style={styles.contaienrRes}>
        <Animatable.Text animation="bounceIn" style={styles.score}>
          { correctAnswerPercentage }%
        </Animatable.Text>
        <Animatable.Text animation="bounceInUp" delay={500} style={styles.title}>
          { expressionText }
        </Animatable.Text>

        { expressionAnimation }
      </View>
    )
  }
}

ResultView.propTypes = {
  score: PropTypes.number,
  questionsCount: PropTypes.number
}

export default ResultView
