# pRactice

Ractive project

## Running the app

The app uses webpack-dev-server to aid development. Technologies used include babel, immutable for data storage, and mocha and chai for unit testing.

To start the development server with hot reloading enabled, simply run

```
npm start
```

## Folder structure

    +-- js
    |   +-- app.js

## Deploying the app

To deploy the app to gh-pages, there are a couple of steps to follow.

1. Run `webpack` command. This will create a `bundle.js` and `bundle.js.map` file in the dist folder.
2. Delete everything except dist folder.
3. Empty contents of dist folder to root directory.
4. Commit and push to gh-pages.

