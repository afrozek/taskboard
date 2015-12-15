angular
	.module('app')
	.controller('appCtrl', appCtrl);

	appCtrl.$inject = ['$scope','authService','profileService'];

function appCtrl ($scope, authService, profileService) {
	console.log("app ctrl");

	$scope.loggedIn = authService.isLogged();
	$scope.email = profileService.getEmail();
	$scope.logout = authService.logout(); 



}