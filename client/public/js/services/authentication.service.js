(function(){

    angular
        .module('dashboard')
        .service('authentication', authentication);

    authentication.$inject = ['$http', '$window'];
    function authentication($http, $window){

        var saveToken = function (token){
            $window.localStorage['dash-token'] = token;
        };

        var getToken = function (){
            return $window.localStorage['dash-token'];
        };

        var LoggedIn = function(){
            var token = getToken();
            var payload;

            if(token){
                payload = token.split('.')[1];
                payload = window.atob(payload);
                payload = JSON.parse(payload);

                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };

        register = function(user){
            return $http.post('/api/register', user).success(function(data){
                saveToken(data.token);
            });
        };

        login = function(user){
            return $http.post('/api/login', user).success(function(data){
                saveToken(data.token);
            });
        };

        logout = function(){
            $window.localStorage.removeItem('dash-token');
        };

        return {
            saveToken: saveToken,
            getToken: getToken,
            LoggedIn: LoggedIn,
            register: register,
            login: login,
            logout: logout
        }
    };
})();