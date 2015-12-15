(function() {
	'use strict'

	angular
		.module('board')
		.controller('boardCtrl', boardCtrl)

	boardCtrl.inject = ['boardService','profileService','authService','$http']

	function boardCtrl(boardService,profileService,authService,$http) {

	    var vm = this;

	    vm.title = "dogs"

	    vm.board = boardService.getBoard().then(function (res) {
	    	vm.board = res.data;
	    });

	   // vm.boardInit = boardInit;

	    


	    ////////////


	    function boardInit() {
	 
	    }

	    // function refresh() {
	    //   /* */
	    // }

	    // function search() {
	    //   /* */
	    // }
	}

})()


