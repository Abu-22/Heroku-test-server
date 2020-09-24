# smartgrade-webapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10


## NodeJS Development server
Note: For development WIP purposes Step 1,2,3 is not required. Run these instructions in a seperate terminal.
1. Navigate to the smartgrade/smartgrade-webapp folder. 
2. Run 'npm install' to install the required modules.
3. Run 'ng build' to create the dist folder. This will be used for production releases.  
4. Navigate back to the smartgrade folder and run 'npm install' to install the required modules for the nodeJS component.
5. Run 'npm run dev' to start a dev server. Navigate to `http://localhost:3080/`. If step 3 was followed this will show a production release fixed website otherwise will show an error.  
6. Note: The server will automatically reload if you change any of the nodeJS source files. Note that this web page on port 3080 is not affected by angularJS file changes as it is a production fixed release.

## AngularJS web app 
Note:  Run these instructions in a seperate terminal.
1. Navigate to the smartgrade/smartgrade-webapp folder. 
2. Run 'npm install' to install the required modules for the AngularJS component.
3. Run 'npm start' to serve the angular web pages. Navigate to `http://localhost:4200/` to access the webpage. 
4. Note: The page will automatically reload everytime there is a change made to the angularJS source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
