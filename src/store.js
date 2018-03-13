import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

/**
 * the idea here is to use a single global reducer
 * along with individual feature based reducer
 * so individual devs can work in isolation
 */
import appState from './reducers'
import spiceList from './screens/SpicesList/reducers'
import skillTest from './screens/SkillTest/reducers'

const reducers = combineReducers({
  appState,
  spiceList,
  skillTest
})

// middlewares
const middlewares = []

// redux store
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
