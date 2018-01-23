import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  background: {
    position: 'absolute',
    height,
    width
  },

  logoContainer: {
    marginTop: 50,
    paddingTop: 20,
    width: 250,
    height: 250,
    borderRadius: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    justifyContent: 'center',
    alignItems: 'center',

    // ios shadow
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0
    },

    // android shadow
    elevation: 1
  },

  logoLineOne: {
    fontFamily: "Rochester",
    fontSize: 48,
    textAlign: 'center',
    color: '#000'
  },

  logoLineTwo: {
    fontFamily: "Rochester",
    fontSize: 64,
    textAlign: 'center',
    color: '#e74c3c'
  }
}