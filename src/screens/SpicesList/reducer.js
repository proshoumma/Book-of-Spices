import spicesList from '../../DB/spices'

const defaultState = {
  list: spicesList
}

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
