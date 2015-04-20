var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl.js'
		})

		.when('/settings', {
			templateUrl: 'js/settings/settingsTmpl.html',
			controller: 'settingsCtrl'
		})

		.when('/products/:id', {
			templateUrl: 'js/products/productsTmpl.html',
			controller: 'productsCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})
});