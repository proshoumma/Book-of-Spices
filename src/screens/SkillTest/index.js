import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InitialView from './components/InitialView'
import TestView from './components/TestView'
import ResultView from './components/ResultView'
import { navigatorStyles } from '../../globalStyles'
import { preapreQuestions } from './actions'

class SkillTest extends Component {
  static navigatorStyle = {
    ...navigatorStyles
  }
  
  constructor(props) {
    super(props)
    this.state = {
      startTest: false,
      testDone: false,
      finalScore: 0
    }
  }

  componentDidMount() {
    const {
      navigator,
      spiceList,
      preapreQuestions
    } = this.props

    navigator.setTitle({
      title: "Skill Test"
    })

    // prepare the questionnaire
    preapreQuestions(spiceList)
  }

  render() {
    const {
      startTest,
      testDone,
      finalScore
    } = this.state

    const { questionnaire } = this.props
    
    if (testDone) return (
      <ResultView
        score={finalScore}
        questionsCount={questionnaire.length}
      />
    )
    
    if (!startTest) return (
      <InitialView
        onStartPress={() => { this.setState({ startTest: true }) }}
      />
    )

    if (startTest) return (
      <TestView
        questionnaire={questionnaire}
        updateUsersScore={(score) => {
          this.setState({
            finalScore: score,
            testDone: true,
            startTest: false
          })
        }}
      />
    )
  }
}

SkillTest.propTypes = {
  navigator: PropTypes.object,
  spiceList: PropTypes.array,
  preapreQuestions: PropTypes.func,
  questionnaire: PropTypes.array
}

export default connect(
  (state) => { return {
    spiceList: state.appState.spicesList,
    questionnaire: state.skillTest.questionnaire
  } },
  (dispatch) => { return {
    preapreQuestions: (spiceList) => { dispatch(preapreQuestions(spiceList)) }
  } }
)(SkillTest)
