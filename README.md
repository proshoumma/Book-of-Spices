# The Book of Spices
The project is built on top of react-native using the following major libraries:
* jest - for unit testing
* wix/detox - for end-to-end testing (not yet)
* wix/react-native-navigation - for a purely native navigation system


## Development
For starting the project or starting the react native bundler, use the following command:
```
yarn start
```

For running the app on ios/android, use react-native commands (make sure that you have the simulator/emulator running):
```
react-native run-ios
```
```
react-native run-android
```

## Caution
Please do not use arrow functions for react's lifecycle functions like `componentDidMount`, `componentWillMount` etc. This breaks the hot module patching for regarding screen.
```js
// incorrect 👎
componentDidMount = () => {
  // do something
}

// correct 👍
componentDidMount() {
  // do something
}
```
