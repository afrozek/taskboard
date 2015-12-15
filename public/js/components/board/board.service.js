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
    		info: info
    	};



    	return service;

    	////////////

        //gets all boards by email 
    	function getBoards(email) {
            return  $http.post('http://localhost:8080/api/boards/byEmail',{owner: email})
	    }


        //updates board, takes board id and board object
        function updateBoard(boardId, newBoardData) {
            return $http.put("http://localhost:8080/api/boards/" + boardId , newBoardData);
        }


        //sets board id in session storage just incase user reloads page
        function setBoardId(boardId){
            sessionStorage.setItem('boardId', boardId);
        }

        //gets board id from session storage and sends request, returns a promise
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


    }

	

})()
