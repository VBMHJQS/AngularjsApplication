// var myAppServices = angular.module('myAppServices', []);
//
// myAppServices.service('service1', ['$scope',
//     function($scope) {}
// ]);
//
// myAppServices.service('service2', ['$scope',
//     function($scope) {}
// ]);
app.factory('serviceTest', [function() {
    return {
      name:function(){
        return 'wangxc';
      }
    };
}]);
