(function () {
	angular
	    .module('app', ['landing', 'ui.router'])
	    .config(routeConfig);

	routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

	function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {

		$stateProvider
			.state('test', {
				url: '/test',
				templateUrl: 'test.html'
			})

			.state('landing', {
				url: '/',
				templateUrl: 'js/components/landing',
				controller: 'landingCtrl'
			})

		$urlRouterProvider.otherwise('/');
	}
}());