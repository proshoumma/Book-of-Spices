import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image
} from 'react-native'

import styles from './styles'
import ToggleButton from '../ToggleButton'
import DoneButton from '../DoneButton'
import NextButton from '../NextButton'

class TestView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: 0,
      activeButton: '',
      currentScore: 0,
      activeButtonIsCorrectAnswer: false
    }
  }

  updateCurrentScore = (callBack) => {
    const {
      activeButtonIsCorrectAnswer,
      currentScore
    } = this.state

    const newCurrentScore = activeButtonIsCorrectAnswer 
      ? currentScore + 1
      : currentScore
    
    this.setState({ currentScore: newCurrentScore }, () => {
     if (callBack) callBack(newCurrentScore)
    })
  }

  // this is for the done button, since we 
  // should not allow multiple press of this button
  updateCurrentScoreOnlyOnce = _.once(this.updateCurrentScore)

  updateQuestionIndex = (currentIndex) => {
    // update the score
    this.updateCurrentScore()

    this.setState({
      activeButton: '',
      questionIndex: currentIndex + 1,
      activeButtonIsCorrectAnswer: false
    })
  }

  renderMultipleChoiceButtons = (options) => {
    const { activeButton } = this.state

    return options.map((eachOption, i) => {
      return (
        <ToggleButton
          key={i}
          name={eachOption.name}
          correctAnswer={eachOption.correct}
          activeButton={activeButton}
          updateActiveButton={(name, isCorrectAnswer) => {
            this.setState({
              activeButton: name,
              activeButtonIsCorrectAnswer: isCorrectAnswer,              
            })
          }}
        />
      )
    })
  }

  renderQuestion = (questions, index) => {
    const {
      image,
      multipleChoiceOptions
    } = questions[index]

    return (
      <View style={styles.questionContainer}>
        <Image
          source={image}
          style={styles.image}
        />
        <View>
          { this.renderMultipleChoiceButtons(multipleChoiceOptions) }
        </View>
      </View>
    )
  }

  render() {
    const {
      questionnaire,
      updateUsersScore
    } = this.props

    const { questionIndex } = this.state
    
    // initially, questionnaire is empty
    // since redux have to update the props
    if (_.isEmpty(questionnaire)) return <View />

    // check if its the last question
    const lastQuestion = (
      questionnaire.length - 1 === questionIndex
    ) ? true :false

    return (
      <View style={styles.container}>
        { this.renderQuestion(questionnaire, questionIndex) }

        <View style={styles.nextButtonContainer}>
          { !lastQuestion && <NextButton 
            onPress={() => {
              this.updateQuestionIndex(questionIndex, questionnaire) 
            }}
          /> }
          
          { lastQuestion && <DoneButton
            onPress={() => {
              this.updateCurrentScoreOnlyOnce(updateUsersScore)
            }}
          /> }
        </View>
      </View>
    )
  }
}

TestView.propTypes = {
  questionnaire: PropTypes.array,
  updateUsersScore: PropTypes.func
}

export default TestView
