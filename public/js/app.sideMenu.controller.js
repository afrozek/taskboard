angular
	.module('app')
	.controller('sideMenuCtrl', sideMenuCtrl)

	sideMenuCtrl.$inject = ['$scope','authService','profileService'];

function sideMenuCtrl ($scope, authService, profileService) {
	vm = this;
	vm.title = "sideMenuvva"
}