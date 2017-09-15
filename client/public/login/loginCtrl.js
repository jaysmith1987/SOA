app.controller('loginCtrl', [ '$location', 'loginService',
    function( $location, loginService){

        var app = this;

        

        if(loginService.isLoggedIn()){
            console.log('user logged in');
        } else {
            console.log('user is not logged in');
        }

        this.logUser = function(logData){
            app.errorMsg = false;

            loginService.login(app.logData).then(function(data){
                if(data.data.success){
                    app.successMsg = data.data.message;
                    $location.path('/table');
                    this.loggedIn = true;
                } else {
                    app.errorMsg = data.data.message;
                    this.loggedIn = false;
                }
            });
        };

        this.logout = function(){
            Auth.logout();
            $location.path('/login');
        };
    }]);