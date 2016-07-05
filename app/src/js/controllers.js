var myAppControllers = angular.module('myAppCtrls', []);
myAppControllers.controller('pageCtrl', ['$scope','serviceTest', function($scope,serviceTest) {
    $scope.test = {
        name: serviceTest.name
    };
}]);

myAppControllers.controller('page2Ctrl', ['$scope', function($scope) {
    $scope.page2 = {
        name: 'wangdc'
    };
}]);
