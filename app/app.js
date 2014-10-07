var app = angular.module('truth', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider, $httpProvider){

$httpProvider.interceptors.push('httpRequestInterceptor');

$routeProvider
	.when('/home', {
		templateURL: 'app/js/home/home.html',
		controller: 'app/js/home/homeCtrl.js'
	})
	.when('/create', {
		templateURL: 'app/js/create/create.html',
		controller: 'app/js/create/createCtrl.js'
	})
	.when('/join', {
		templateURL: 'app/js/join/join.html',
		controller: 'ap/js/join/joinCtrl.js'
	})
	.when('/hat:gameID', {
		templateURL: 'app/js/hat/hat.html',
		controller: 'app/js/hat/hatCtrl.js'
	})
	.when('/player:gameID', {
		templateURL: 'app/js/player/player.html',
		controller: 'app/js/player/payerCtrl.js'
	})

}]);