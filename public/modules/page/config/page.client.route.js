angular.module('page').config([
	'$stateProvider',
	function ($stateProvider) {
		$stateProvider
			.state('index', {
				url: '/',
				views: {
					'' : {
						controller: 'IndexController',
						templateUrl: 'public/modules/page/view/index.client.view.html'
					},
					'solution' : {
						controller: 'SolutionController',
						templateUrl: 'public/modules/page/view/solution.client.view.html'
					},
					'product' : {
						controller: 'ProductController',
						templateUrl: 'public/modules/page/view/product.client.view.html'
					},
					'our-customer' : {
						controller: 'CustomerController',
						templateUrl: 'public/modules/page/view/customer.client.view.html'
					},
					'contact-us' : {
						controller: 'ContactController',
						templateUrl: 'public/modules/page/view/contact.client.view.html'
					}
				}
			});
	}
]);