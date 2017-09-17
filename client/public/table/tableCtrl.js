app.controller('tableCtrl', ['$http', '$scope',
    function($http, $scope){
        http.get('api/json')
        .then(function(response){
            $scope.table = response.data;
        })
    }])