(function (){
  'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);


DIController.$inject = ['$scope', '$filter', '$injector'];

function DIController($scope, $filter, $injector){
  $scope.name="Gebert";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController))
}

function annotateMe(name, job, blah){
  return "Blah!";
}

console.log(DIController.toString());

})();
