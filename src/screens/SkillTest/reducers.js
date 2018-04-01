import {
  QUESTIONS_PREPARED
} from './constants'

const defaultState = {
  questionnaire: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case QUESTIONS_PREPARED:
      return Object.assign({}, state, {
        questionnaire: action.payload
      })

    default:
      return state
  }
}
