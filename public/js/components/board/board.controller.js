(function() {
	'use strict'

	angular
		.module('board')
		.controller('boardCtrl', boardCtrl)

	boardCtrl.inject = ['boardService','profileService','authService']

	function boardCtrl(boardService,profileService,authService) {

	    var vm = this;

	    vm.title = "dogs"

	    vm.board = {
						owner: "muz@gmail.com",
						title: "ma board",
						collaborators: ["auk2@njit.edu","yazeed@gmail.com"],	
						columns:
							[{
								 title:"backlog",
								 cards:
								 [
									{
										title: "shopping",
										content: ["eggs","apples","bananas"]
									},
									{
										title: "hw",
										content: ["is218","capstone","hss"]
									},
									{
										title: "workout",
										content: ["50 Threes","100 left layups"]
									}
								]
							},
							{
								 title:"todo",
								 cards:
								 [
									{
										title: "shopping",
										content: ["eggs","apples","bananas"]
									},
									{
										title: "hw",
										content: ["is218","capstone","hss"]
									},
									{
										title: "workout",
										content: ["50 Threes","100 left layups"]
									}
								]
							},
							{
								 title:"doing",
								 cards:
								 [
									{
										title: "shopping",
										content: ["eggs","apples","bananas"]
									},
									{
										title: "hw",
										content: ["is218","capstone","hss"]
									},
									{
										title: "workout",
										content: ["50 Threes","100 left layups"]
									}
								]
							},
							{
								 title:"QA",
								 cards:
								 [
									{
										title: "shopping",
										content: ["eggs","apples","bananas"]
									},
									{
										title: "hw",
										content: ["is218","capstone","hss"]
									},
									{
										title: "workout",
										content: ["50 Threes","100 left layups"]
									}
								]
							}]
				   }

	    vm.boardInit = boardInit;


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


