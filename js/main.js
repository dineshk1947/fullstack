var app = angular.module("myApp", []);
app.factory('employeeService', function($http) {
   var empFactory = {};

   empFactory.details = function() {
      return $http.get('http://localhost:3000/api/empDetails')
   }

   return empFactory;
});

app.controller('MyCtrl', ['$scope','employeeService',function($scope,employeeService) {
  console.log("employeeService",employeeService);
  employeeService.details().then(function (data) {
    $scope.empData = data.data.message;
    console.log("checking for the data", data.data.message);
  });



  // $http.get('http://localhost:3000/api/empDetails').then(function success(data) {
  //   console.log('data', data);
  // }, function error(error) {
  //   console.log('error', error);
  // })



}]);
