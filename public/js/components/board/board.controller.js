(function() {
	'use strict'

	angular
		.module('board')
		.controller('boardCtrl', boardCtrl)

	boardCtrl.inject = ['boardService','profileService','authService','$http']

	function boardCtrl(boardService,profileService,authService,$http) {
	    var vm = this;


	    //gets the selected board from sidemenu
	    vm.board = boardService.getBoard().then(function (res) {
	    	vm.board = res.data;
	    	console.log(vm.board);
	    });




	}

})()


