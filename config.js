/*
  deklarasi semua modue yang
  akan di pergunakan pada aplikasi ini
  dan configurasi frontend global
*/


var sitename ="";

var server= {
   host : 'https://api.github.com',
   port : '80',
   email : ''
};

var username = "";


var Controller = "./controller";
var View = "./view";
var app = angular.module("myapp",
          [
            'LocalStorageModule',
            'ngRoute',
            'angular-loading-bar'
          ]
);


app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}]);


app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});