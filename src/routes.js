import Landing from './screens/Landing'
import SpicesList from './screens/SpicesList'
import SkillTest from './screens/SkillTest'
import { routeNames } from './constants'

const {
  LANDING,
  SPICESLIST,
  SKILLTEST
} = routeNames

const routes = [
  {
    name: LANDING,
    component: Landing
  },
  {
    name: SPICESLIST,
    component: SpicesList
  },
  {
    name: SKILLTEST,
    component: SkillTest
  }
]

export default routes