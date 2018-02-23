# `FinerPoints`

This is a test app built using React Native. It was built to practice and demonstrate various elements of modern React (and React Native) development.

## Objective

To build a simple trivia game using an external API to supply the questions. Why does it exist? I was doing a code challenge and thought it came out pretty well!

## Installing

* Do [all the things][1] for React Native development (specifically, **Building Projects with Native Code**)
  * The following has _only_ been tested on **Macs** and **iOS**
  * You _definitely_ need [`react-native-cli`][15]
* Clone this repository: `git clone git@github.com:zacharyabresch/FinerPoints.git`
* `cd FinerPoints`
* `npm i`
* `react-native link` - for FontAwesome assets

## Running

* `react-native run-ios`
  * This can be tempermental. If you're having problems, do this:
    * `rm -Rf ios/build/ node_modules && npm i && react-native run-ios`
  * This will run in the simulator
* Win the trivia challenge!!

## Testing

* Run the tests once: `npm t`
* Run & watch the tests: `npm run test:watch`
* Run tests & get coverage: `npm run test:coverage`

## Technology Used

### Dependencies

* [React][2]
* [React Native][3]
* [`react-native-vector-icons`][4] (specifically, FontAwesome)
* [Redux][5] and [`react-redux`][6]
* [`axios`][7]
* [`redux-thunk`][8]
* [`html-entities`][9]

### Development Dependencies

* [`enzyme`][10]
* [`jest`][11]
* [`moxios`][12]
* [`react-native-mock`][13]
* [`redux-mock-store`][14]

[1]: https://facebook.github.io/react-native/docs/getting-started.html
[2]: https://reactjs.org/
[3]: https://facebook.github.io/react-native/
[4]: https://github.com/oblador/react-native-vector-icons
[5]: https://redux.js.org/
[6]: https://github.com/reactjs/react-redux
[7]: https://github.com/axios/axios
[8]: https://github.com/gaearon/redux-thunk
[9]: https://github.com/mdevils/node-html-entities
[10]: https://github.com/airbnb/enzyme
[11]: https://facebook.github.io/jest/
[12]: https://github.com/axios/moxios
[13]: https://github.com/RealOrangeOne/react-native-mock
[14]: https://github.com/arnaudbenard/redux-mock-store
[15]: https://www.npmjs.com/package/react-native-cli
