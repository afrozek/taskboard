angular
	.module('app')
	.controller('sideMenuCtrl', sideMenuCtrl)

	sideMenuCtrl.$inject = ['$scope','authService','profileService','boardService','$http'];

function sideMenuCtrl ($scope, authService, profileService, boardService, $http) {
	vm = this;
	vm.title = "My Boards";

	vm.boards = $http.post('http://localhost:8080/api/boards/byEmail',{owner:"muz@gmail.com"}).then(function(res){
		vm.boards = res.data
	});


}