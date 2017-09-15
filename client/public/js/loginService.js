app.factory('loginService', ['$http', 'AuthToken',
    function ( $http, AuthToken){
       var loginFactory = {};


        loginFactory.login = function(logData){
            return $http.post('api/login', logData).then(function(data){
                AuthToken.setToken(data.data.token);
                return data;
            });
        };

        loginFactory.isLoggedIn = function(){
            if(AuthToken.getToken()) {
                return true;
            } else {
                return false;
            }
        };

        loginFactory.logout = function(){
            AuthToken.setToken();
        }

        return loginFactory;
    }]);

     app.factory('AuthToken', ['$window', function($window){
      var authTokenFactory = {};
      
      authTokenFactory.setToken = function(token){
          if (token){
                $window.localStorage.setItem('token', token);
          } else {
               $window.localStorage.removeItem('token');
          }
      };

      authTokenFactory.getToken = function() {
          return $window.localStorage.getItem('token');
      };

      return authTokenFactory;
  }])