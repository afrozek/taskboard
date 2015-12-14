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

			.state('app', {
				url: '/',
				templateUrl: 'js/app.home.html',
			})

			.state('app.landing', {
				url: 'landing',
				templateUrl: 'js/components/landing/landing.html',
				controller: 'landingCtrl'
				//controllerAs: 'landing'
			})

			.state('app.board', {
				url: 'board',
				templateUrl: 'js/components/board/board.html'
				//controller: 'boardCtrl',
				//controllerAs: 'board'
			})

			

		$urlRouterProvider.otherwise('landing');
	}
}());