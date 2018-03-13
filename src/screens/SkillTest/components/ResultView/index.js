import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

const ResultView = (props) => {
  const {
    score,
    questionsCount
  } = props

  const correctAnswerPercentage = Math.round((score / questionsCount) * 100)

  return (
    <View>
      <Text>Congrats! You have scored</Text>
      <Text>{ correctAnswerPercentage }%</Text>
    </View>
  )
}

ResultView.propTypes = {
  score: PropTypes.number,
  questionsCount: PropTypes.number
}

export default ResultView
