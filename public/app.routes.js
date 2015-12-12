angular
	.module('app')
	.config(routeConfig);

routeConfig.$inject = ['$urlRouterProvider', '$stateProvider']

function routeConfig ($urlRouterProvider, $stateProvider) {
	$stateProvider
		.state('test', {
			url: '/test',
			templateUrl: 'test.html'
		});

	$urlRouterProvider.otherwise('/');
}