(function() {
	'use strict'

	angular
		.module('profile')
		.controller('profileCtrl', profileCtrl)

	profileCtrl.inject = ['profileService']

	function profileCtrl(profileService) {

	    var vm = this;
	    //profileInit();

	    vm.profileInit = profileInit;
	    // vm.refresh = refresh;
	    // vm.search = search;
	    // vm.sessions = [];
	    // vm.title = 'profile';

	    ////////////

	    function profileInit() {
	      /* */
	      console.log("initializing profile");
	      //profileService.getprofile();
	    }

	    // function refresh() {
	    //   /* */
	    // }

	    // function search() {
	    //   /* */
	    // }
	}

})()


