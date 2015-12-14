angular
	.module('landing', [])
	.controller('landingCtrl', landingCtrl);

	landingCtrl.$inject = ['$scope', 'usersFactory'];

function landingCtrl ($scope, usersFactory) {
	$scope.login = login;
	$scope.signup = signup;

	$scope.formData = {};

	function login () {
		console.log('signing up');
		usersFactory.login($scope.formData)
			// .then(function (res) {
			// 	console.log(res);
			// });
	}

	function signup () {
		console.log('signing up');
		usersFactory.signup($scope.formData)
			// .then(function (res) {
			// 	console.log(res);
			// });
	}

		// function login () {
	// 	console.log('logging in');
	// 	usersFactory.signupOrLogin($scope.formData, true)
	// 		.then(function (res) {
	// 			console.log(res);
	// 		});
	// }
}