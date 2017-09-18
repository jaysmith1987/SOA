var app = angular.module('soaApp', ['ui.router', 'chart.js']);


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

