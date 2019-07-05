# search-app
Application that allows the user to perform search as they type with the option to add/remove wildcard match

AVAILABLE SCRIPTS

In order to run the project, the repository needs to be cloned or downloaded and unzipped. Once done, yarn install should be executed in order to install the necessary node modules that are required in the project.

In the project directory, you can run:

npm run dev

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits and save.

npm run prod

Builds the app for production to the build folder.
It correctly bundles the code in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

The search application is built with Web Components that allow usage with numerous JavaScript frameworks. 
Webpack is utilised for asset bundling. 

PROJECT STRUCTURE

There are 2 folders that were created in order to structure the project in logical and easy to folow manner. 
The api folder contains a sigle file, laureateApi.js, that hosts the code responsible for making the api calls and handling the received data.
The components folder hosts 3 custom components; check-box.js, result-list.js, and search-box.js. They serve to allow the user to enter search query, 
toggle wildcard match, and display the results respectively. Index.js and index.html contain the code that gets executed on load as well as the list of 
custom Web components that were created in the course of the project work.
