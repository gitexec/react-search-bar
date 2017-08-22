[![Build Status](https://travis-ci.org/Rubbby/create-react-library.svg?branch=master)](https://travis-ci.org/Rubbby/create-react-library)

# React NPM library starter kit

based on Facebook's <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create react app</a>

## Converted to custom setup

Moved all dependencies to dev dependencies because we don't need extra dependencies for our library after build, but we want all this features while developing one: 

* Compile SCSS to css
* React, JSX, ES6, and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* A dev server that lints for common errors.
* Import CSS and image files directly from JavaScript.
* Autoprefixed CSS, so you don’t need `-webkit` or other prefixes.
* A `build` script to bundle JS, CSS, and images for production.

## Getting Started

Clone repo

````
git clone https://github.com/rubbby/create-react-library.git
````

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Library files

All library files are located inside `src/lib`  

## Demo app

Is located inside `src/demo` direcoty, here you can test your library while developing.

## Testing

`npm run test` or `yarn run test`

## Build library

`npm run build` or `yarn run build`

Produces production version of library under the `build` folder.

## Publish library

`npm publish`