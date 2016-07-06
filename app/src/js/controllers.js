var myAppControllers = angular.module('myAppCtrls', []);
myAppControllers.controller('pageControllers', ['$scope', '$rootScope', function($scope, $rootScope) {
    var stateParams = $rootScope.$stateParams; //先使用此方法获得状态参数
    console.log(stateParams);
    var indexPage = stateParams.pageIndex; //获取当前的页面位置

    //TODO 这里赋值，中文的话会出现乱码，日志里显示的也是乱码
    if (indexPage == 1) {
        $scope.page = {
            header: 'first header',
            body: 'first body'
        };

    } else if (indexPage == 2) {
        $scope.page = {
            header: 'seconde header',
            body: 'seconde body'
        };
    } else {
        $scope.page = {
            header: 'other header',
            body: 'other body'
        };
    }
    console.log($scope.page);

}]);
