(function() {
	'use strict'

	angular
		.module('board')
		.controller('boardCtrl', boardCtrl)

	boardCtrl.inject = ['boardService','profileService','authService','$http']

	function boardCtrl(boardService,profileService,authService,$http) {
	    var vm = this;

	    vm.boardId = boardService.getBoardId();

		vm.boardInit = function(){
			//gets the selected board from sidemenu
		    vm.board = boardService.getBoard().then(function (res) {
		    	vm.board = res.data;

		    	//console.log(vm.board);
		    });


		}

		vm.boardInit();	   

	    //add column
	    vm.addColumn = function (columnTitle) {
	    	if (columnTitle){
		    	vm.board.columns.push({title: columnTitle, content:["sampletask"]});
		    	boardService.updateBoard(vm.boardId,vm.board);
		    	// vm.boardInit();
	    	} 
	    	else console.log("please enter a column name")
	    	
	    }

		//add card
	    vm.addCard = function (index,cardTitle) {

	    	if (vm.board.columns[index].cards == undefined){
		    		vm.board.columns[index].cards = [{title: cardTitle}]
		    	}
		    	else{
		    		vm.board.columns[index].cards.push({title: cardTitle})
		    	}

		    	boardService.updateBoard(vm.boardId,vm.board);
		    	// vm.boardInit();	
	    }









	}

})()


