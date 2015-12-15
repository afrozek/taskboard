(function(){
	'use strict'

	angular
    	.module('auth')
    	.factory('authService', authService);

    authService.inject = ['profileService']

    function authService( profileService ) {

    	var service = {

            isLogged: isLogged,
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


        function info() {
          console.log("auth service")
        }


    }

	

})()
