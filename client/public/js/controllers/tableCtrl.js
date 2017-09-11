(function(){

    angular
    .module('dashboard')
    .controller('tableCtrl', tableCtrl);

    tableCtrl.$inject = ['$http'];
    function tableCtrl($http){
        $http.get('/api/json')
        .then(function(response){
            $scope.table = responsed.data.records;
        });
    };
    
})();