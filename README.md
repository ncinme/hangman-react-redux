# Hangman

This is computer version of the classic Hangman game. It is built for one player.
<br>

## How to Play:

1. Click on ‘Start Game’.
2. You have 10 chances to guess the right word.
3. Number of blank spaces represent number of letters in the secret word.
4. Start guessing the word by clicking on a letter.
5. If your guess is correct, the letter is revealed.
6. If your guess is incorrect, you lose a chance.
7. You win when you get every letter of the word before hangman drawing finishes.
8. You lose if you guess 10 incorrect letters.

## Install and Run your app on your local machine

Create a new project folder

### Update Node Package Manager:

npm install -g npm@latest

### Update Nodejs:

npm install -g node@latest

### Install React App

npx create-react-app@latest hangman-react-redux

### Clone this repository

Clone 'master' repo to the project direcotry 'hangman-react-redux'\
Go to the newly created project directory 'hangman-react-redux' and run following commands\
cd hangman-react-redux
git remote add origin https://github.com/ncinme/hangman-react-redux.git
git fetch origin master
git reset --hard origin/master

### Install Redux Tool Kit

In the project directory 'hangman-react-redux', run following commands\  
npm install --save @reduxjs/toolkit react-redux

### Run Scripts

**Run follwoing two scripts to launch Hangman app.**

In the project directory, run:

#### `npm run wordListConverter`

Note: No need to run the command unless you want to use a new dictionary file.\
I have used 'word_list_10000.txt' in this app, and alreadly created wordList.js.

This script converts the any text file in ./src folder to an array and writes it to wordList.js file,
which can be later referred to select a random word for Hangman game.\

Reading/Writing file are node js methods, thus this script has to be run separately.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Follwoing are the standard scripts created by create-react-app.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
