angular
	.module('landing', [])
	.controller('landingCtrl', landingCtrl);

	landingCtrl.$inject = ['$scope'];

function landingCtrl ($scope) {
	$scope.loginModal = loginModal;

	function loginModal () {

	}
}