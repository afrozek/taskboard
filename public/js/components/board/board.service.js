(function(){
	'use strict'

	angular
    	.module('board')
    	.factory('boardService', boardService);

    //boardService.inject = ['']

    function boardService() {
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
          console.log("boardService");
	    }

	    function success() {
	      /* */
	    }


    }

	

})()
