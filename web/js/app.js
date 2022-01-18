var app = angular
.module("adventOfCode", ["ngRoute"])
.config(function ($routeProvider, $locationProvider) {
  //inject $locationProvider service
  $locationProvider.hashPrefix(""); // add configuration
  $routeProvider
    .when("/home", {
      template: "About Us",
    })
    .when("/day1", {
      templateUrl: "views/day1.html",
      controller: "day1Controller",
    })
    .when("/day1ALT", {
        templateUrl: "views/day1ALT.html",
        controller: "day1ALTController",
      })
    .when("/day2", {
      templateUrl: "views/day2.html",
      controller: "day2Controller",
    });
});