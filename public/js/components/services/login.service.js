(function () {
	angular
		.module('landing')
		.factory('usersFactory', usersFactory);

	usersFactory.$inject = ['$http'];

	function usersFactory ($http) {
		var usersApi = '/api/users';

		var factory = {
			signupOrLogin: signupOrLogin,
			getUsers: getUsers
		};

		function signupOrLogin (loginData, login) {
			if (login) {
				usersApi = '/api/auth';
			}

			return $http.post(usersApi, loginData);
		}

		function getUsers () {
			return $http.get(usersApi);
		}

		return factory;
	}
}());