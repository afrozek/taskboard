(function(){
	'use strict'

	angular
    	.module('board')
    	.factory('boardService', boardService);

    boardService.inject = ['$http']

    function boardService( $http ) {
    	var service = {

    		getBoards: getBoards,
            getBoard: getBoard,
            updateBoard: updateBoard,
            setBoardId: setBoardId,
    		info: info,
    		success: success

    	};



    	return service;

    	////////////

    	function getBoards(email, id) {
            return  $http.post('http://localhost:8080/api/boards/byEmail',{owner: email})
	    }

        function updateBoard(id, newBoardData) {
            return $http.put("http://localhost:8080/api/boards/" + id , newBoardData);
        }

        function setBoardId(boardId){
            sessionStorage.setItem('boardId', boardId);
        }

        function getBoard(){
            var boardId = sessionStorage.getItem('boardId');
            
            if(typeof(boardId) == "null" || typeof(boardId) == "undefined" ){
               console.log("no board selected"); 
            } 
            else return $http.get("http://localhost:8080/api/boards/" + boardId );
             
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
