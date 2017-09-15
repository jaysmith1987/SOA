app.controller('registerCtrl', ['$location',  'authService',
    function($location, authService){

        var app = this;

        this.regUser = function(regData){
            app.errorMsg = false;


            authService.create(app.regData).then(function(data){
                if(data.data.success){
                    app.successMsg = data.data.message;
                    $location.path('/login');
                } else {
                    app.errorMsg = data.data.message;
                }
            });
        };
        
    }]);