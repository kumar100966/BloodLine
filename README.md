# Bloodline Web Application
A Progressive Web Application which serves to essentially sensitize and encourage users to donate blood through user-friendly interface. The project is split into two github repositories consisting of the front end and back end respectively. The project was created using the JAM  (Javascript API Markup)  stack with the front end application being built with angular 9.1.1 and the back end application server with flask 1.0.2.

The front end application implements the usage of GoogleMaps API as a Software as a Service (SAAS) for the display of blood centers. Gunicorn was the Web Server Gateway Interface chosen.

### Features of The Application

* The single-page website will host and present all the information necessary to a donor in an organized manner so that they can be knowledgeable of the process they possibly may partake in. 

* The application will allow users to view the blood donation centres within their vicinity.

* Users will be able to schedule an appointment with a chosen centre. They would be allowed to edit that appointment before the arrival date. The operations which a user will be allowed to perform on an appointment after its creation will include the ability to view, edit, or delete the appointment. 

* Hosts will be able to manage the appointments scheduled with the centre that they are employed in. This will include the ability to accept or reject an appointment in a given scenario. 

* A user of the application will be able to register, login,  and view his account information. 

## Architecture
[arcitecture img](https://ibb.co/KwbZpj2)
The architecture of the Web Application is a JAM stack approach and requests the web services of this application server, GoogleMaps API,SQL Alchemy and Gunicorn. The front end was build using Angular.



## Dependencies
* agm/core: ^1.1.0
* angular/animations: ~9.1.1
* angular/cdk: ^9.2.1
* angular/common: ~9.1.1
* angular/compiler: ~9.1.1
* angular/core: ~9.1.1
* angular/forms: ~9.1.1
* angular/material: ^9.2.1
* angular/platform-browser: ~9.1.1
* angular/platform-browser-dynamic: ~9.1.1
* angular/router: ~9.1.1
* angular2-jwt": ^0.2.3
* ngx-cookie-service: ^3.0.4
* rxjs: ~6.5.4
* tslib: ^1.10.0
* zone.js: ~0.10.2

## Developer Dependencies
* angular-devkit/build-angular": "~0.901.1
* angular/cli: ~9.1.1
* angular/compiler-cli: ~9.1.1
* angular/language-service: ~9.1.1
* types/node: ^12.11.1
* types/jasmine: ~3.5.0
* types/jasminewd2: ~2.0.3
* codelyzer: ^5.1.2
* jasmine-core: ~3.5.0
* jasmine-spec-reporter: ~4.2.1
* karma: ~4.4.1
* karma-chrome-launcher: ~3.1.0
* karma-coverage-istanbul-reporter: ~2.1.0
* karma-jasmine: ~3.0.1
* karma-jasmine-html-reporter: ^1.4.2
* protractor: ~5.4.3
* ts-node: ~8.3.0
* tslint: ~6.1.0
* typescript: ~3.8.3
   
    

## Build Instructions
The instructions to build can be found [here](https://github.com/kumar100966/BloodLine/tree/master/Bloodline#bloodline).

### Scripts
```
ng
ng serve
ng build
ng test
ng lint
ng e2e
```


## Creators
* [akeelhenry](https://github.com/akeelhenry)
* [kumar100966](https://github.com/kumar100966)
* [SimplyTim](https://github.com/SimplyTim)
* [Romario12c](https://github.com/Romario12c)


## Back End Repo
[Project Bloodline Back End](https://github.com/SimplyTim/Bloodline-Web-App)
