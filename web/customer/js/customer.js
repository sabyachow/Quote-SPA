var app = angular.module("app", []);

app.controller("HelloController", function($scope, $http) {

  var onUserComplete = function(response){
    $scope.user = response.data;
    $http.get($scope.user.repos_url)
        .then(onRepos, onError);
  };

  var onRepos = function(response){
    $scope.repos = response.data;
  }

  var onError = function(reason){
     $scope.error = "Could not fetch data !"  ;
  };

    $scope.search = function(username){
      $http.get("http://api.github.com/users/"+username)
        .then(onUserComplete, onError);

    }

  $scope.message = "Hello, Sabya AngularJS";
});