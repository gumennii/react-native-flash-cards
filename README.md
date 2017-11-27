# Flash Cards Project
---
Native Mobile application (Android or iOS) that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.


## Start Developing
---
To get started developing right away:

* Install and start the API server
    - `yarn install`
    - `yarn start`


## Available Scripts
---
If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools.


## Frontend File Structure
---
- `/actions` - Actions and Action Creators
- `/components` - React Components (includes styles and navigation)
- `/reducers` - Redux Reducers
- `/utils` - Utility/Helper functions
- `App.js` - Main App Components which includes Routes


## What else needs to be done?!
---
- Actions and Reducers can be in more cleaner state
- Refactor Components to create smaller more reusable components
- Create High Order components / Wrappers to keep Heavy JS Logic
- Update styling, class names and HTML tags for better meaning/structure/semantic
