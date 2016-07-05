var app = angular.module('myApp', ['ui.router', 'myAppCtrls']);


app.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由
 */
app.config(function($stateProvider, $urlRouterProvider) {
    console.log(123);
    $urlRouterProvider.otherwise('/1');
    $stateProvider
        .state('index', {
            url: '/{pageIndex:[0-9]{1,4}}',
            views: {
                '': {
                    templateUrl: 'tpls/pageContent.html'
                },
                'pageType@index': {
                    templateUrl: 'tpls/menu.html'
                },
                'pageContent@index': {
                    templateUrl: 'tpls/page.html'
                }
            }
        });
});
