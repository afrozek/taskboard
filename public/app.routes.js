
angular.module('app')
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		
		$urlRouterProvider.otherwise('/test');
		//states
		$stateProvider

		.state('test',{
			url: '/test',
			templateUrl:'test.html'
		})

	}]);

