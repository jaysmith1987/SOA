app.controller('tableCtrl', ['$scope', '$http',
    function($scope, $http){
        $http.get('api/json')
        .then(function(response){
            $scope.table = response.data;
        })
    }])