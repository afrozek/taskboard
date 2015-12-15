(function(){
	'use strict'

	angular
    	.module('board')
    	.factory('boardService', boardService);

    boardService.inject = ['$http']

    function boardService( $http ) {
    	var service = {

    		getBoards: getBoards,
            // currentBoard: currentBoard,
    		info: info,
    		success: success

    	};



    	return service;

    	////////////

    	function getBoards(email, id) {
        return  $http.post('http://localhost:8080/api/boards/byEmail',{owner: email})
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
