(function() {
	'use strict'

	angular
		.module('auth')
		.controller('authCtrl', authCtrl)

	authCtrl.inject = ['authService']

	function authCtrl(authService) {

	    var vm = this;
	    //authInit();

	    vm.authInit = authInit;
	    // vm.refresh = refresh;
	    // vm.search = search;
	    // vm.sessions = [];
	    // vm.title = 'auth';

	    ////////////

	    function authInit() {
	      /* */
	     // console.log("initializing auth");
	      //authService.getauth();
	    }

	    // function refresh() {
	    //   /* */
	    // }

	    // function search() {
	    //   /* */
	    // }
	}

})()


