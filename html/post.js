 angular.module("app.post", [])
// create angular controller
.controller('postCtrl', function($scope,$http) {
  var data = {};
  $scope.submitForm = function() {
    data = $scope.user;
    $http({
        method : 'post',
        url : 'http://localhost:3000/api/empDetails',
        data:data
    }).then(function successCallback(response) {
      console.log("response",response);
        $scope.employees = response.data.message;
    }, function errorCallback(response) {
        alert(response.statusText);
    });
  };

});
