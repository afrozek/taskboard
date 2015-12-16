(function(){
	'use strict'

	angular
    	.module('auth')
    	.factory('authService', authService);

    authService.inject = ['profileService','$state']

    function authService( profileService, $state ) {

    	var service = {

            isLogged: isLogged,
            logout: logout,
            info: info

    	};

    	return service;

       

    	////////////

        /*setters*/
        function isLogged() {
          if(profileService.getEmail() && profileService.getToken()){
                return true;
          }

        }

        function logout() {
          if(isLogged){
            console.log("logging out")
            profileService.clearProfile();
            toastr.success('Logging Out!')
            $state.go('app.landing',null,{ reload: true })

          }
        }


        function info() {
          console.log("auth service")
        }


    }

	

})()
