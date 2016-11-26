(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.placeholder= "list comma separated dishes you usually have for lunch";

    $scope.lunchList = "";
    $scope.checkList = checkList;
    $scope.resetResult = resetResult;
    $scope.result = "";

    function resetResult() {
      $scope.result = "";
    }

    function checkList() {
      console.log("Lunchlist: " + $scope.lunchList);

      if($scope.lunchList==""){
        $scope.result = "Please enter data first";
      }

      else {
        var splittedList = $scope.lunchList.split(',');
        console.log("splitted List length: " + splittedList.length);

        if (splittedList.length <= 3){
          $scope.result="Enjoy!";
        } else {
          $scope.result="Too much!"
        }

      }



    }
  }


})();
