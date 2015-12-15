(function(){
	'use strict'

	angular
    	.module('profile')
    	.factory('profileService', profileService);

    //profileService.inject = ['']

    function profileService() {

    	var service = {

            setEmail: setEmail,
            setToken: setToken,

    		getProfile: getProfile,
    		getEmail: getEmail,
    		getToken: getToken

    	};

    	return service;

       

    	////////////

        /*setters*/
        function setEmail(email) {
          sessionStorage.setItem('email', email)
        }

        function setToken(token) {
          sessionStorage.setItem('token', token)
        }

        /*getters*/

    	function getProfile() {
	      return {email: sessionStorage.getItem('email'), token: sessionStorage.getItem('token')}
	    }

	    function getEmail() {
	      return sessionStorage.getItem('email')
	    }

	    function getToken() {
	      return sessionStorage.getItem('token')
	    }


    }

	

})()
