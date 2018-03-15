import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

import styles from './styles'

const ResultView = (props) => {
  const {
    score,
    questionsCount
  } = props

  const correctAnswerPercentage = Math.round((score / questionsCount) * 100)

  return (
    <View style={styles.contaienr}>
      <Text style={styles.title}>You have scored</Text>
      <Text style={styles.score}>{ correctAnswerPercentage }%</Text>
    </View>
  )
}

ResultView.propTypes = {
  score: PropTypes.number,
  questionsCount: PropTypes.number
}

export default ResultView
