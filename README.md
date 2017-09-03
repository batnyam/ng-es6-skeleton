# Angular 1.X ES6 Skeleton
This repo provides a basic Angular 1.X skeleton, using Bootstrap 4 for styling, ESlint for JavaScript linting, the ES6+ syntax and Webpack for bundling and development tools.

##### The Application Structure

````
src/
  common/       <<< common app modules, components, directives, etc. (reusable code)
  modules/      <<< app modules and pages group topically
  index.js      <<< entry point
  index.html    <<< main html file
````

#### Installation (clone this repo)
````
git clone https://github.com/zainxyz/ng-es6-skeleton.git
````

#### Run server for development

The local server runs on `http://localhost:3000`, and it comes with the Webpack's AutoRefresh feature using the `--inline` flag on the webpack-dev-server. [Read more about Webpack AutoRefresh.][77226b13].

  [77226b13]: https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh "Webpack Dev Server - Automatic Refresh"

````
npm i
npm start
````

#### Bundle it up for production

````
npm run build
````

#### Lint via eslint

````
npm run lint
````
