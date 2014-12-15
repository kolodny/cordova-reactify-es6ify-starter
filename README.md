cordova-reactify-es6ify-starter
===

The purpose of this repo is to have no build tools deps as they can take up alot of space. You need to make sure that you have [`browserify`](https://github.com/substack/node-browserify), [`watchify`](https://github.com/substack/watchify/), [`es6ify`](https://github.com/thlorenz/es6ify), and [`reactify2`](https://github.com/kolodny/reactify2) installed globally.

If you don't you just need to run this once:

    npm install -g browserify watchify es6ify reactify2

If that fails you can try:

    sudo npm install -g browserify watchify es6ify reactify2

This project comes with three different task you can run:

```bash
npm run browserify
npm run watchify
npm run dev # watchify and starts server on :3000
```
