import _ from 'lodash'

const QUESTION_LIMIT = 10
const MULTIPLE_CHOICE_OPTIONS = 4

/**
 * extract spice names from spice list array
 * @param {array} spiceList 
 */
const extractSpiceNames = (spiceList) => {
  return spiceList.map(eachSpice => {
    return eachSpice.name
  })
}

/**
 * generates multiple choice options
 * including the correct answer
 * @param {string} correctAnswer correct answer for the spice
 * @param {array} spiceNames list of spice names only
 * @param {number} limit amount of multiple choice options to generate
 */
const generateMultipleChoiceOptions = (correctAnswer, spiceNames, limit) => {
  let options = []

  // include the correct answer
  options.push({ name: correctAnswer, correct: true })

  while (options.length !== limit) {
    // generates a random number
    const randomIndex = _.random(0, limit - 1)

    // check if spice name is already included in the array using the random number
    if (!_.find(options, { name: spiceNames[randomIndex] })) {
      options.push({
        name: spiceNames[randomIndex],
        correct: false
      })
    }
  }

  // shuffle the options
  options = _.shuffle(options)

  // return multiple choice options
  return options
}

/**
 * generates random indexes for selecting questions
 * @param {number} amount maximum amount of indexes
 * @param {array} randomIndexes generated random indexes
 */
const generateIndexes = (amount, spiceListLength, randomIndexes=[]) => {
  if (randomIndexes.length >= amount) {
    return randomIndexes
  }
  else {
    // generates a random number
    const randomNumber = _.random(0, spiceListLength - 1)
    
    // check if random number is already in the generated index
    if (randomIndexes.includes(randomNumber) === false) {
      randomIndexes.push(randomNumber)
    }
    return generateIndexes(amount, spiceListLength, randomIndexes)
  }
}

/**
 * prepare an array with randomly generated indexes
 * @param {array} spiceList list of spices
 * @param {array} randomIndexes list of randomly generated indexes
 */
const selectSpices = (spiceList, randomIndexes) => {
  return randomIndexes.map((eachIndex) => {
    return spiceList[eachIndex]
  })
}

/**
 * generates question data set with image
 * and multiple choice options
 * @param {array} spiceList list of selected spices
 */
const generateQuestionDataSet = (spiceList) => {
  const spiceNames = extractSpiceNames(spiceList)
  const maxOptionsLimit = (
    spiceList.length < MULTIPLE_CHOICE_OPTIONS
  ) ? spiceList.length : MULTIPLE_CHOICE_OPTIONS
  
  return spiceList.map((eachSpice) => {
    return {
      image: eachSpice.thumbnail,
      multipleChoiceOptions: generateMultipleChoiceOptions(
        eachSpice.name,
        spiceNames,
        maxOptionsLimit        
      ),
    }
  })
}

/**
 * generates questionnare data set
 * @param {array} spiceList whole spice list array
 */
const preapreQuestionnaire = (spiceList) => {
  const maxQuestionLimit = (
    spiceList.length < QUESTION_LIMIT
  ) ? spiceList.length : QUESTION_LIMIT

  const randomSpiceIndexes = generateIndexes(maxQuestionLimit, spiceList.length)
  const selectedSpices = selectSpices(spiceList, randomSpiceIndexes)
  const preparedDataSet = generateQuestionDataSet(selectedSpices)
  return preparedDataSet
}

export default preapreQuestionnaire
