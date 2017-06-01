var app = angular.module("app", []);
app.controller("HelloController", function($scope) {

  var person = {
  firstName: "Sabyasachi",
  lastName: "Chowdhury",
  imageSrc: "http://google/sabya"
  };

  $scope.message = "Hello, Sabya AngularJS";
  $scope.person = person;
});