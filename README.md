# The Book of Spices
![Preview](./artwork/banner.jpg)

#### An educational app to help you learn about spices, built on top of react-native. 
Try it on [PlayStore](https://play.google.com/store/apps/details?id=com.thebookofspices)

## Built With
The project is built on top of react-native using the following major libraries:
* [wix/react-native-navigation](https://wix.github.io/react-native-navigation/#/) - for a purely native navigation system
* [redux](https://redux.js.org/) - for state management
* [lottie-react-native](https://github.com/airbnb/lottie-react-native) - for beautiful animations
* [react-native-animatable](https://github.com/oblador/react-native-animatable) - for animating text and views
* [react-native-swiper](https://github.com/leecade/react-native-swiper) - for swiping through images
* [lodash](https://lodash.com/) - for many utility stuffs

## Use cases
This app can serve you a base for any educational application. You can easily change contents from very simplified JS object based database. The test module will automatically generate random questionnaire with multiple choice options. Please feel free to make pull requests, issues and improvement suggestions.

## Walkthrough
### Learning Views

![Preview](./artwork/learn.gif)

In learning view you can review all the spices and can press on them to view the detailed screen. All the data are coming from `src/DB/spices.js`.

### Testing Skill Views

![Preview](./artwork/test.gif)

In Test view, there will be multiple choice options with randomly generated questionnaire. The questionnaire and multiple choice options are prepared using some bespoke utility function (available on `src/utils/preapreQuestionnaire.js`) with help from `lodash` library. The animations are done using `lottie-react-native` and `react-native-animatable`. Also there is a little drama added for calculating the result! 😁

## Development
For starting the project or starting the react native bundler, use the following command:
```
yarn start
```

Then you can run the app on ios/android using react-native commands:
```
react-native run-ios
```
```
react-native run-android
```

Make sure you have [nodeJS](https://nodejs.org/en/), [react-native-cli](https://www.npmjs.com/package/react-native-cli), [Xcode](https://developer.apple.com/xcode/), and [Android Studio](https://developer.android.com/studio/index.html) installed on your machine.

#### Caution
Please do not use arrow functions for react's lifecycle functions like `componentDidMount`, `componentWillMount` etc. This breaks the hot module patching for regarding screens. It's a bug from `wix/react-native-navigation` library.
```js
// incorrect
componentDidMount = () => {
  // do something
}

// correct
componentDidMount() {
  // do something
}
```

## License
[MIT License](https://github.com/shoumma/Book-of-Spices/blob/master/LICENSE). Anything!

## Credits
All credit goes to all library creators and contributors to those libraries. Me and my team is grateful to them.

Made with ❤️ by team [aspro.io](https://www.aspro.io/)

[Provash Shoumma](https://twitter.com/pshoumma)
