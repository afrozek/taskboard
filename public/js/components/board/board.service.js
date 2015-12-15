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
            getBoardId: getBoardId,
            setBoardId: setBoardId,
            updateBoard: updateBoard,
            createNewBoard: createNewBoard,

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

         function getBoardId(){
            return sessionStorage.getItem('boardId'); 
        }

        //gets board id from session storage and sends request, returns a promise
        function createNewBoard(boardName){
            var email = sessionStorage.getItem('email');
            
            if(typeof(boardName) == "null" || typeof(boardName) == "undefined" ){
               console.log("no board name selected"); 
            } 
            else return $http.post("http://localhost:8080/api/boards/",{owner: email, title: boardName});
             
        }

	    function info() {
	      /* */
          console.log("boardService");
	    }


    }

	

})()
