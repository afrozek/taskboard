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

			    	vm.board.columns.push({title: columnTitle, cards:[] });
			    	
			    	boardService.updateBoard(vm.boardId,vm.board)
			    	.then(function(res){
			    		console.log(res.data)
			    		toastr.success('Column Added!')
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
	    		toastr.success('Task Added!')
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
	    	//copy card data to var
	    	var currentCardData = vm.board.columns[columnIndex].cards[cardIndex];
	    	var currentColumnIndex = columnIndex;
	    	var currentCardIndex = cardIndex;

	    	var nextColumnIndex = currentColumnIndex + 1;
	    	
	    	console.log("current column index: " + currentColumnIndex );
	    	console.log("current card index: " + currentCardIndex );
	    	console.log("next column index: " + nextColumnIndex);

	    	//push to other column
	    	vm.board.columns[nextColumnIndex].cards.push(currentCardData);

	    	//remove from current colum
	    	vm.board.columns[currentColumnIndex].cards.splice(currentCardIndex,1);

	    	boardService.updateBoard(vm.boardId,vm.board).then(function(res){
	    		//console.log(res.data)
	    		 vm.boardInit();	
	    	});
	    }


	    vm.moveCardLeft = function (columnIndex, cardIndex) {
	    	//copy card data to var
	    	var currentCardData = vm.board.columns[columnIndex].cards[cardIndex];
	    	var currentColumnIndex = columnIndex;
	    	var currentCardIndex = cardIndex;

	    	var nextColumnIndex = currentColumnIndex - 1;
	    	
	    	console.log("current column index: " + currentColumnIndex );
	    	console.log("current card index: " + currentCardIndex );
	    	console.log("next column index: " + nextColumnIndex);

	    	//push to other column
	    	vm.board.columns[nextColumnIndex].cards.push(currentCardData);

	    	//remove from current colum
	    	vm.board.columns[currentColumnIndex].cards.splice(currentCardIndex,1);

	    	boardService.updateBoard(vm.boardId,vm.board).then(function(res){
	    		//console.log(res.data)
	    		 vm.boardInit();	
	    	});
	    }




	    









	}

})()


