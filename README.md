# ebabel-random
[![Build Status](https://travis-ci.org/ebabel-eu/ebabel-random.svg?branch=master)](https://travis-ci.org/ebabel-eu/ebabel-random)

Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).

## Module install and usage in your game

## Install
```
npm install --save ebabel-random
```

## Usage
```
const random = require('ebabel-random');

const result = random(6);
```

## Development of this module
Fork this repository on Github, `git clone` your repository, checkout the develop branch, and when you are done, submit a pull request from your repository develop branch to this repository develop branch.

* fork this repository on github.com
* git clone your forked repository.
* git checkout develop

### First step when developing
```
npm install
```

### Run linting and unit tests
```
npm test
```

An html coverage report is to be found in the `coverage` folder.

### Generate documentation
```
npm run jsdoc
```

The generated documentation is to be found in the `docs` folder.
