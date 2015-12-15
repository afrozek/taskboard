(function(){
	'use strict'

	angular
    	.module('profile')
    	.factory('profileService', profileService);

    //profileService.inject = ['']

    function profileService() {
    	var service = {

    		error: error,
    		info: info,
    		success: success

    	};

    	return service;

    	////////////

    	function error() {
	      /* */
	    }

	    function info() {
	      /* */
          console.log("profileService");
	    }

	    function success() {
	      /* */
	    }


    }

	

})()
