import spicesList from './DB/spices'

export const defaultState = {
  spicesList
}

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
