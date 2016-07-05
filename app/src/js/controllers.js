var myAppControllers = angular.module('myAppCtrls', []);
myAppControllers.controller('pageCtrl', ['$scope', 'serviceTest', function($scope, serviceTest) {
    $scope.test = {
        name: serviceTest.name()
    };
}]);

myAppControllers.controller('page2Ctrl', ['$scope','serviceTest2', function($scope,serviceTest2) {
    $scope.page2 = {
        name: serviceTest2.name()
    };
}]);
