var routerApp = angular.module('dashboard', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'partial-login.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('register', {
            url:'/register',
            templateUrl: 'register.html'      
        })

        .state('logout', {
            url: '/logout',
            templateUrl: 'login.html'
        })

        .state('table', {
            url: '/table',
            templateUrl:'table.html'
        })

});
