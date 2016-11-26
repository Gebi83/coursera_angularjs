(function (){
  'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
    $scope.name = "Manuel";
    $scope.sayHello = function (){
      return "Hello Coursera!";
    };

  });
})();
