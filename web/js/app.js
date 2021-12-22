var app = angular.module("adventOfCode",["ngRoute"]);


  app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'../index.html'
    })
    .when('/day1', {
     //   controller:'day1Controller',
        templateUrl:'../views/day1.html'
    })
    .when('/day2', {
    //    controller:'day2Controller',
        templateUrl:'../views/day2.html'
    })
    .otherwise({
        redirectTo:'/'
    })
});
 
