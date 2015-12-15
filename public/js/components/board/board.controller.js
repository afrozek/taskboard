(function() {
	'use strict'

	angular
		.module('board')
		.controller('boardCtrl', boardCtrl)

	boardCtrl.inject = ['boardService','profileService']

	function boardCtrl(boardService,profileService) {

	    var vm = this;
	    boardInit();
	    profileService.info();

	    vm.boardInit = boardInit;
	    // vm.refresh = refresh;
	    // vm.search = search;
	    // vm.sessions = [];
	    // vm.title = 'board';

	    ////////////


	    function boardInit() {
	      /* */
	      console.log("initializing board");
	      //boardService.getBoard();
	    }

	    // function refresh() {
	    //   /* */
	    // }

	    // function search() {
	    //   /* */
	    // }
	}

})()


