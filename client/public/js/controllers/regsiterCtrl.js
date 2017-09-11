(function(){
    
    angular
    .module('dashboard')
    .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$location', 'authentication'];
    function registerCtrl($location, authentication){
        var vm = this;

        vm.credentials = {
            name : "",
            username: "",
            email: "",
            password: "",
            password2: ""
        };

        vm.onSubmit = function (){
            authentication
             .register(vm.credentials)
             .error(function(err){
                 alert(err);
             })
             .then(function(){
                 $location.path('login')
             });
        };
    }
})();