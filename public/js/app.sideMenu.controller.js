angular
	.module('app')
	.controller('sideMenuCtrl', sideMenuCtrl)

	sideMenuCtrl.$inject = ['$scope','authService','profileService','boardService','$http','$state'];

function sideMenuCtrl ($scope, authService, profileService, boardService, $http, $state) {

	vm = this;

	vm.boards = boards(); //populates list of boards in sidemenu

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
	function boards () {
		//get email
		var email = profileService.getEmail();

		boardService.getBoards(email)
		.then(function(res){
			vm.boards = res.data;
		})
	}


 
	
}