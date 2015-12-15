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
			    	
			    	boardService.updateBoard(vm.boardId,vm.board)
			    	.then(function(res){
			    		console.log(res.data)
			    		vm.boardInit();	
		    		});
		    }
		    //if input field empty
	    	else console.log("please enter a column name")

	    	console.log("adding Column");
	    	console.log(vm.board)
	    }



		//add card
	    vm.addCard = function (index,cardTitle) {

	    	//check if cards array exists
	    	if (vm.board.columns[index].cards == undefined){
	    		//if it doesnt, make a new array with first card
		    		vm.board.columns[index].cards = [{title: cardTitle, content:[]}]
		    	}

		    	//else just push a new card with title
	    	else {  
	    		vm.board.columns[index].cards.push({title: cardTitle, content:[]})
	    	}
	    	console.log("adding card");
	    	console.log(vm.board)

	    	boardService.updateBoard(vm.boardId,vm.board).then(function(res){
	    		//console.log(res.data)
	    		 vm.boardInit();	
	    	});
	    	
	    }

	    vm.addCardBullet = function (columnIndex,cardIndex,bulletString) {

	    	vm.board.columns[columnIndex].cards[cardIndex].content.push(bulletString);

	    	boardService.updateBoard(vm.boardId,vm.board).then(function(res){
	    		//console.log(res.data)
	    		 vm.boardInit();	
	    	});
	    }

	    vm.moveCardRight = function (columnIndex, cardIndex) {
	    	//var currentColumn = vm.board.columns[columnIndex];
	    	var currentColumnIndex = columnIndex;
	    	var currentCardIndex = cardIndex;

	    	var nextColumnIndex = currentColumnIndex + 1;
	    	
	    	console.log("current column index: " + currentColumnIndex );
	    	console.log("current card index: " + currentCardIndex );
	    	console.log("next column index: " + nextColumnIndex);

	    	vm.board.columns[nextColumnIndex].cards.push({title:"moving",content:['moving content','moving..']})
	    }

	    vm.moveCardLeft = function () {

	    }









	}

})()


