# TypeScript Starter Template

Starter template for plain typescript products.

Includes:
* TypeScript compilation
* SCSS compilation
* Webpack (TS, HTML, CSS and assets)
* ESLint
* PixiJS

## Table of Contents
1. [Run](#run)
1. [Develop](#develop)
1. [Testing](#testing)
2. [Compiling](#compiling)

## Run
To run in localhost with live reload: 
1. Decompress the package or clone the repository
2. In a terminal, run `npm install`
3. `npm start`

The application should start running on `localhost:8080`

## Develop
Follow the instructions to run the application, as it allows for live reloading while coding
Please keep into account that the application is using ESLint rules to keep a clean code. 
You can check that the code is compliant with the rules by running `npm run lint`

## Testing
Follow the instructions to run the application, as it allows for live reloading while coding

This project uses Jest for testing. 
To run Jest without coverage, run `npm run test`
To use coverage, run `npm run test:coverage`

## Compiling
To compile the application, just run `npm run build`. This will generate all necessary files in `./dist`
