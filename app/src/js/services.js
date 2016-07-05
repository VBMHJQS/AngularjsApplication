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
  //console.log('service ...');
    return {
      name:function(){
        return 'wangxc';
      }
    };
}]);

app.factory('serviceTest2',[function(){
  return{
    name:function(){
      return 'wangdc';
    }
  };
}]);
