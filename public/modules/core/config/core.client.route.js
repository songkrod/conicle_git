angular.module('core').config([
	'$locationProvider',
	'$urlRouterProvider',
	function ($locationProvider, $urlRouterProvider) {
		// $locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		// $urlRouterProvider.otherwise('/');
	}
])