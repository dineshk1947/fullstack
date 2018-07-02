 angular.module("app.get", [])
.controller('getCtrl', ['$scope','$http',function($scope,$http) {
  $scope.getEmp = function() {
    $http({
        method : 'GET',
        url : 'http://localhost:3000/api/empDetails'
    }).then(function successCallback(response) {
      console.log("response",response);
        $scope.employees = response.data.message;
    }, function errorCallback(response) {
        alert(response.statusText);
    });
  }

}]);
