# TypeScript Library Boilerplate

This is my personal boilerplate for a TypeScript Library. It includes:
* License
* Bundling as a JS library
* Generates typings
* Lint
* Prettier formatting
* BDD with `chai` and `mocha`
* Test coverage with  `nyc`
* Documentation generator with `typedoc`

## How to use

`git clone --depth=1 https://github.com/sylvaindesve/typescript-library-boilerplate.git your-project-name`

## What to change ?

After cloning you should change the following pieces of code:

* `package.json`
  - `name`
  - `bundle` script
* `tsconfig.json`
  - `compilerOptions.paths`
* `typedoc.js`
  - `name`
