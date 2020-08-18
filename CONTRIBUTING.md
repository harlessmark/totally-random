# How to contribute
Thank you for choosing to help contribute to `totally-random`. To contribute all you must do is fork this repo and create a pull request. There are a couple things first.

## Gulp
All code *should* be able to be built with the `Gulp` task runner. Travis CI is linked to this repo to run `Gulp` builds on pull requests and commits.

## ESLint
Please make sure your code follows our ESLint Standards.

## Tests
We have tests written with `mocha` and `chai`. To use them, just run `npm test`.

## Exports
Please do not write any export statements such as `module.exports` and `export` because as part of our `Gulp` task we use `UMD` wrappers to make our code available for both browser and NodeJS.
