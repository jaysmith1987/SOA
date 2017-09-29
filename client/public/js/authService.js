app.factory('authService', ['$http', 
    function ($http){
        userFactory = {};

        userFactory.create = function(regData){
          return $http.post('/api/users', regData)
        };

        return userFactory;
    }]);
  
 app.factory('tableData', ['$http',  function($http){
     tableFactory = {};

     tableFactory.getStandardData = function(){
         return $http.get('http://localhost:3004/data?_limit=100')
         .then(function(response){
             return response.data;
         })
     }

     tableFactory.getDatabyDate = function(dateRange){
         return $http.get('http://localhost:3004/data?messageDate_gte='+dateRange.startDate.toISOString()+'&messageDate_lte='+dateRange.endDate.toISOString())
         .then(function(response){
             return response.data;
         })
     }

     return tableFactory;
 }])