(function () {
	angular
		.module('landing')
		.factory('usersFactory', usersFactory);

	usersFactory.$inject = ['$http'];

	function usersFactory ($http) {
		var usersApi = '/api/users';

		var factory = {
			loginUser: loginUser,
			getUsers: getUsers
		};

		function loginUser (loginData) {
			return $http.post('/api/auth', loginData);
		}

		function getUsers () {
			return $http.get(usersApi);
		}

		return factory;
	}
}());