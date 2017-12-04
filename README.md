# Trading Post

# Based on AngularAuth
Building a stateless user registration and authentication web application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

ng build --prod --aot=false

fixes: 

ERROR in ./src/main.ts
Module not found: Error: Can't resolve './$$_gendir/app/app.module.ngfactory' in '/Users/cr/projects/tradingpost-web/src'
 @ ./src/main.ts 4:0-74
 @ multi ./src/main.ts

## Tag
git tag -a v0.1.1 -m "Message here"

## Sync with bitbucket
remote add bitbucket https://username@bitbucket.org/username/reponame.git
git pull # to sync and differences like the pipeline yml file
git push bitbucket master

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
