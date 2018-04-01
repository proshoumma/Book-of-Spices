import prepareQuestionnaire from '../../utils/preapreQuestionnaire'

import {
  QUESTIONS_PREPARED
} from './constants'

export const preapreQuestions = (spiceList) => {
  const questions = prepareQuestionnaire(spiceList)
  return {
    type: QUESTIONS_PREPARED,
    payload: questions
  }
}
