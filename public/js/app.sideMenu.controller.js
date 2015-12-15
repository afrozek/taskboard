angular
	.module('app')
	.controller('sideMenuCtrl', sideMenuCtrl)

	sideMenuCtrl.$inject = ['$scope','authService','profileService','boardService','$http'];

function sideMenuCtrl ($scope, authService, profileService, boardService, $http) {
	console.log("sideMenuCtrl");
	vm = this;
	vm.title = "My Boards";

	var email = profileService.getEmail();
	console.log(email)

	vm.boards = boardService.getBoards(email).then(function(res){
		
		vm.boards = res.data;

	})
	
}