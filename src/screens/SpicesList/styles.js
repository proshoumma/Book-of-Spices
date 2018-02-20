import {
  margin,
  appBackgroundColor
} from '../../globalStyles'

export default {
  container: {
    flex: 1,
    backgroundColor : appBackgroundColor
  },

  listContainer: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: margin,
    paddingRight: margin,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}