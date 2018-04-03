import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import styles from './styles'
import ToggleButton from '../ToggleButton'
import BottomButton from '../BottomButton'
import Timer from '../Timer'

const TIMER = 60

class TestView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: 0,
      activeButton: '',
      currentScore: 0,
      timer: TIMER,
      activeButtonIsCorrectAnswer: false,
      timerId: null
    }
  }

  componentDidMount() {
    const timerId = setInterval(this.timer.bind(this), 1000)
    this.setState({ timerId })
  }

  componentWillUnmount() {
    const { timerId } = this.state
    clearInterval(timerId)
  }

  timer() {
    const {
      timer,
      timerId,
      currentScore
    } = this.state

    const { updateUsersScore } = this.props

    // check if timer has ended
    if (timer !== 0) {
      this.setState({ timer: timer - 1 })
    } else {
      // clear the timer
      clearInterval(timerId)

      // update user's score
      updateUsersScore(currentScore)
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
        <View style={styles.multipleChoiceContainer}>
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

    const {
      questionIndex,
      activeButton,
      timer
    } = this.state
    
    // initially, questionnaire is empty
    // since redux have to update the props
    if (_.isEmpty(questionnaire)) return <View />

    // check if its the last question
    const lastQuestion = (
      questionnaire.length - 1 === questionIndex
    ) ? true :false

    // determine bottom button label according to lastQuestion status
    const bottomButtonLabel = lastQuestion
      ? 'Done'
      : 'Next'

    // determine bottom button action according to lastQuestion status
    const bottomButtonAction = lastQuestion
      ? () => this.updateCurrentScoreOnlyOnce(updateUsersScore)
      : () => this.updateQuestionIndex(questionIndex, questionnaire) 

    // check if user selected an option, otherwise bottom button will be inactive
    const bottomButtonIsActive = activeButton !== ''
      ? true
      : false

    return (
      <Animatable.View animation="fadeIn" style={styles.container}>
        { this.renderQuestion(questionnaire, questionIndex) }
        <Timer value={timer} />
        <View style={styles.nextButtonContainer}>
          <BottomButton
            label={bottomButtonLabel}
            onPress={bottomButtonAction}
            active={bottomButtonIsActive}
          />
        </View>
      </Animatable.View>
    )
  }
}

TestView.propTypes = {
  questionnaire: PropTypes.array,
  updateUsersScore: PropTypes.func
}

export default TestView
