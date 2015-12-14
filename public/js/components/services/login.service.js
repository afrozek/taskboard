(function () { 
	angular
		.module('landing')
		.factory('usersFactory', usersFactory);

	usersFactory.$inject = ['$http','$state'];

	function usersFactory ($http,$state) {
		var usersApi = '/api/users';

		var factory = {
			signup: signup,
			login: login,
			getUsers: getUsers
			
		};

		function login (form) {
			console.log("login service");
			
			$http.post('http://localhost:8080/api/auth/', form)
			  .then(function(res) {
              
              console.log(res.data);

              if(res.data.token){
              	$state.go('app.board')
				sessionStorage.setItem('token',res.data.token)	
              }

              

            }, function(err) {
              //toastr.error('Failed: ' + err.data);
              console.log('Failed: ' + err.data.message);
            });
		} //end login

		function signup (form) {
			console.log("signup service");

			$http.post('http://localhost:8080/api/users/', form)
			  .then(function(res) {
              
              console.log(res.data.message);

            }, function(err) {
              //toastr.error('Failed: ' + err.data);
              console.log('Failed: ' + err.data);
            });

		} //end signup



		function getUsers () {
			return $http.get(usersApi);
		}

		return factory;
	}
}());

