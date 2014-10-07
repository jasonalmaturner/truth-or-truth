var app = angular.module('truth', ['ngRoute'/*, 'firebase'*/]);

app.config(['$routeProvider', function($routeProvider/*, $httpProvider*/){

// $httpProvider.interceptors.push('httpRequestInterceptor');

$routeProvider
	.when('/', {
		templateUrl: 'app/js/home/home.html',
		controller: 'homeCtrl'
	})
	.when('/create', {
		templateUrl: 'app/js/create/create.html',
		controller: 'createCtrl'
	})
	.when('/join', {
		templateUrl: 'app/js/join/join.html',
		controller: 'joinCtrl'
	})
	.when('/hat:gameID', {
		templateUrl: 'app/js/hat/hat.html',
		controller: 'hatCtrl'
	})
	.when('/player:gameID', {
		templateUrl: 'app/js/player/player.html',
		controller: 'playerCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);