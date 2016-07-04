var myAppControllers = angular.module('myAppCtrls', []);
myAppControllers.controller('pageCtrl', ['$scope', function($scope) {
    $scope.test = {
        name: 'wangxc'
    };
}]);

myAppControllers.controller('page2Ctrl', ['$scope', function($scope) {
    $scope.page2 = {
        name: 'wangdc'
    };
}]);
