(function(){

    angular
     .module('dashboard')
     .controller('dashCtrl', dashCtrl);

     dashCtrl.$inject = [ '$scope', '$location', 'authentication'];
     
     function loginCtrl($location, authentication){
         if(authentication.LoggedIn) {
             $scope.loggedIn = true
         } else {
             $scope.loggedIn = false;
         }
     }
})();