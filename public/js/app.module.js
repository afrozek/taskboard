(function () {
	angular
	    .module('app', [ 'ui.router','landing','sample','board','profile','auth','ngAnimate'])
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
				controller: 'appCtrl'
			})

			.state('app.landing', {
				url: 'landing',
				templateUrl: 'js/components/landing/landing.view.html',
				controller: 'landingCtrl'
				//controllerAs: 'landing'
			})

			.state('app.board', {
				url: 'board',
				templateUrl: 'js/components/board/board.view.html',
				controller: 'boardCtrl',
				controllerAs: 'board'
			})

			.state('app.signup', {
				url: 'signup',
				templateUrl: 'js/components/landing/templates/signup.html',
				controller: 'landingCtrl'
				//controllerAs: 'board'
			})


			

		$urlRouterProvider.otherwise('landing');
	}
}());