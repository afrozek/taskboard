

	angular
    	.module('landing')
    	.factory('registerService', registerService);

    registerService.inject = ['$http','$state']

    function registerService($http,$state) {
    
    	var service = {

        newUser: newUser

    	};

    	return service;

    	////////////

        function newUser(form) {
            $http.post('http://localhost:8080/api/users/', form)
            .then(function(res) {
              
             // authService.setToken(res.data.token);

              //toast
              //toastr.success('You are now my Beta!');
              console.log(res);

              //change status on view
              //vm.submitStatus = "Success";
             
              //empty form
              //vm.form = "";

              //redirect
              //$state.go('app.members');

            }, function(err) {
              //toastr.error('Failed: ' + err.data);
              console.log('Failed: ' + err.data);
            });
        }

    	function testFunction() {
	      /* */
        console.log("test bhorks")
	    }




    } //end register service

	


