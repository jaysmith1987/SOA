var app = angular.module('soaApp', ['ui.router', 'ui.bootstrap','chart.js','angularMoment', 'angularUtils.directives.dirPagination']);


    app.config(['$stateProvider','$urlRouterProvider', 
        function config($stateProvider, $urlRouterProvider){
     $urlRouterProvider.otherwise('/login');
     $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            })
            .state('register', {
                url:'/register',
                templateUrl: 'register/register.html',
                controller: 'registerCtrl',
                controllerAs: 'register'
            })
            .state('table', {
                url: '/table',
                templateUrl:'table/table.html',
                controller: 'tableCtrl',
                controllerAs: 'table'
            })
            .state('logout', {
                controller:'logoutCtrl',
                controllerAs: 'logout'
            })
            .state('charts', {
                url:'/charts',
                templateUrl:'charts/pie.html',
                controller: 'graphCtrl',
                controllerAs: 'graph'
            })
            
}])

app.controller("MasterCtrl", ['$scope','loginService',  
function ($scope, loginService) {
    $scope.loggedIn = false;
    $scope.loggedOut = true;
    $scope.toggle = false;
    $scope.toggleSidebar = function(){
        $scope.toggle = !$scope.toggle;
    }
    if(loginService.isLoggedIn() === true){
        $scope.loggedIn = true;
        $scope.loggedOut = false;
    } else {
        $scope.loggedIn = false;
        $scope.loggedOut = true;
    }
}]);

app.controller('logoutCtrl', ['$location', 'loginService', 
    function($location, loginService){
        var app = this;

        this.logout = function(){
            loginService.logout();
            $location.path('/#/login');
        };
    }])

app.filter('unique', function () {

    return function (items, filterOn) {

        if (filterOn === false) {
            return items;
        }

        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function (item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {
                    return item[filterOn];
                } else {
                    return item;
                }
            };

            angular.forEach(items, function (item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    newItems.push(item);
                }

            });
            items = newItems;
        }
        return items;
    };
});