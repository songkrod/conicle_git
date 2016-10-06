'use strict'

var mainAppModuleName = 'conicle';
var mainAppModule = angular.module(mainAppModuleName, ['ui.router', 'core', 'page']);

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('#main'), [mainAppModuleName], {
		strictDi: true
	});
});