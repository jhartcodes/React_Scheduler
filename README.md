# Interview Scheduler

## App Overview

Built with ReactJS, as a bootcamp project with fictional data to explore and practice React fundementals in a real world application. This interview schedular allows users to load the app and book, edit, or cancel interviews in the easy to use interface. The app handles database updates through axios requests to pull from and update to a PostgreSQL database on a separate api server. The Interview Scheduler app runs a websocket connection to allow real-time booking or cancelling updates to be viewed across multiple browser clients without any browser refreshes to be made.

The app is well tested through unit tests, integration tests, and full end to end tests utilizing various testing libraries and frameworks such as Storybook, Jest, Cypress, Mocha, and Chai.

## Getting Started
1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies
-axios - ^0.21.1
-classnames - ^2.2.6
-normalize.css - ^8.0.1
-prop-types - ^15.7.2
-react - ^16.9.0
-react-dom - ^16.9.0
-react-scripts - 3.0.0

