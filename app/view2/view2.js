'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'views/view2.html',
    controller: 'View2Ctrl'
  });
}])

// .controller('View2Ctrl', function($scope) {
// $scope.h=4;
// $scope.m="mikey in view";
// });
//adding comment for test