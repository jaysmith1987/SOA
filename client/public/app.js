var app = angular.module('soaApp', ['ui.router', 'chart.js', 'ui.bootstrap']);


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

// Graph
            .state('charts', {
                url:'/charts',
                views: {
                    'header': {
                        template: "<rd-widget><rd-widget-body classes='textmid'><h4>Analytic Graphs</h4></rd-widget-body></rd-widget>"
                    },
                    'datePicker': {
                        templateUrl: "charts/dates.html",
                        controller: 'dateCtrl'
                    },
                    'pieTotal': {
                        templateUrl: "charts/pie.html",
                        controller: 'pieCtrlTotal'
                    },
                    'pieSender': {
                        templateUrl: "charts/pie.html",
                        controller: 'pieCtrlSender'
                    },
                    'pieTarget': {
                        templateUrl: "charts/pie.html",
                        controller: 'pieCtrlTarget'
                    },
                    'pieIntegration': {
                        templateUrl: "charts/pie.html",
                        controller: 'pieCtrlInteg'
                    },
                    'barSender': {
                        templateUrl: "charts/bar.html",
                        controller: 'barCtrlSender'
                    },
                    'barTarget': {
                        templateUrl: "charts/bar.html",
                        controller: 'barCtrlTarget'
                    },
                    'barIntegration': {
                        templateUrl: "charts/bar.html",
                        controller: 'barCtrlInteg'
                    }
                }})
            }]);

app.controller("MasterCtrl", ['$scope','loginService',  
function ($scope, loginService) {
    $scope.loggedIn = false;
    $scope.loggedOut = true;
    $scope.toggle = false;

    $scope.toggleSidebar = function(){
        $scope.toggle = !$scope.toggle;
    };

    if(loginService.isLoggedIn() === true){
        $scope.loggedIn = true;
        $scope.loggedOut = false;
    } else {
        $scope.loggedIn = false;
        $scope.loggedOut = true;
    };

    // Tabs
    // Pie
    $scope.tabsPie = [{
        slug: 'total',
        title: "Sum",
        content: 'pieTotal'
    }, {
        slug: 'sender',
        title: "Sender",
        content: "pieSender"
    }, {
        slug: 'target',
        title: "Target",
        content: "pieTarget"
    }, {
        slug: 'integration',
        title: "Integration",
        content: "pieIntegration"
    }];


    // Bar
    $scope.tabsBar = [{
        slug: 'sender',
        title: "Sender",
        content: 'barSender'
    }, {
        slug: 'target',
        title: "Target",
        content: "barTarget"
    }, {
        slug: 'integration',
        title: "Integration",
        content: "barIntegration"
    }];

    }]);


app.controller('logoutCtrl', ['$location', 'loginService', 
    function($location, loginService){
        var app = this;

        this.logout = function(){
            loginService.logout();
            $location.path('/#/login');
        };
    }]);

