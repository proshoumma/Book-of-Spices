# The Book of Spices
The project is built on top of react-native using the following major libraries:
* typescript - for better development environment, less errors and strict typing
* jest - for unit testing
* wix/detox - for end-to-end testing (not yet)
* wix/react-native-navigation - for a purely native navigation system


## Development
For starting the project or starting the react native bundler, use the following command:
```
yarn start
```

Then we also have to run the typescript compiler to compile the project on fly:
```
yarn tsc:watch
```

For running the app on ios/android, use react-native commands (make sure that you have the simulator/emulator running):
```
react-native run-ios
```
```
react-native run-android
```

These command will get you up and running with the development environment. To build a fresh `dist` folder, use the following command:
```
yarn build
```