import Landing from './screens/Landing'
import SpicesList from './screens/SpicesList'
import SkillTest from './screens/SkillTest'
import SpiceDetail from './screens/SpiceDetail'
import { routeNames } from './constants'

const {
  LANDING,
  SPICES_LIST,
  SKILL_TEST,
  SPICE_DETAIL
} = routeNames

const routes = [
  {
    name: LANDING,
    component: Landing
  },
  {
    name: SPICES_LIST,
    component: SpicesList
  },
  {
    name: SKILL_TEST,
    component: SkillTest
  },
  {
    name: SPICE_DETAIL,
    component: SpiceDetail
  }
]

export default routes