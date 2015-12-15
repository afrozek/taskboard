angular
	.module('app')
	.controller('sideMenuCtrl', sideMenuCtrl)

	sideMenuCtrl.$inject = ['$scope','authService','profileService','boardService','$http','$state'];

function sideMenuCtrl ($scope, authService, profileService, boardService, $http, $state) {

	vm = this;

	vm.boardsList = boardsList(); //populates list of boards in sidemenu
	
	vm.addBoard = function (boardName) {
		boardService.createNewBoard(boardName).then(function(res){
			boardsList();
			console.log(res.data);
			console.log(boardName);
			vm.boardName = "";
		});

	}

	vm.displayBoard = function (boardId) {
		console.log("clicked");
		console.log(boardId);
		boardService.setBoardId(boardId);
		$state.go('app.board',null,{reload:true});
	}

	//populates collaborators in sidemenu
	vm.collaborators = boardService.getBoard().then(function (res) {
	    	vm.collaborators = res.data.collaborators;
	    });


	/////////////////

	//populates list of boards in sidemenu
	function boardsList () {
		//get email
		var email = profileService.getEmail();

		boardService.getBoards(email)
		.then(function(res){
			vm.boards = res.data;
		})
	}


 
	
}