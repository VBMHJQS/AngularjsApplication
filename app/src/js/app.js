var app = angular.module('myApp', ['ui.router', 'myAppCtrls', 'myAppServices']);




/**
 * 配置路由
 */
app.config(function($stateProvider, $urlRouterProvider) {
  console.log(123);
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'tpls/page1.html',
            controller:'pageCtrl'
        })
        .state('index2',{
          url:'/index2',
          templateUrl:'tpls/page2.html',
          controller:'page2Ctrl'
        });
});
