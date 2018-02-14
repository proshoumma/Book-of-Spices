import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import spiceList from './screens/SpicesList/reducer'

// reducers combined
const reducers = combineReducers({
  spiceList
})

// middlewares
const middlewares = []

// redux store
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store