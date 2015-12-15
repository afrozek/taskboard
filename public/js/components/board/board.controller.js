(function() {
	'use strict'

	angular
		.module('board')
		.controller('boardCtrl', boardCtrl)

	boardCtrl.inject = ['boardService','profileService','authService','$http']

	function boardCtrl(boardService,profileService,authService,$http) {

	    var vm = this;

	    vm.title = "dogs"

	    vm.board = {
						owner: "muz@gmail.com",
						title: "rabbit board",
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
										title: "Hiking",
										content: ["go hiking with fred"]
									}
								]
							},
							{
								 title:"doing",
								 cards:
								 [
									{
										title: "animals",
										content: ["dogs","cats","rabbits"]
									},
									{
										title: "fruits",
										content: ["strawberries","berries","beta berries"]
									},
									{
										title: "india",
										content: ["mangoes","rickshaws"]
									}
								]
							},
							{
								 title:"QA",
								 cards:
								 [
									{
										title: "Protons",
										content: ["Jimmy","Neutron","Croutons"]
									},
									{
										title: "Gym",
										content: ["Pushups","Pushdowns","Chucknorris"]
									}
								]
							}]
				   }

	    vm.boardInit = boardInit;

	    $http.put("http://localhost:8080/api/boards/566f91a3f25efae91e49b210",vm.board).then(function(res){
	    	console.log(res.data)
	    })


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


