var app = angular.module('soaApp', ['ui.router']);


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
                templateUrl:'table/table.html'
            })
            
}])

