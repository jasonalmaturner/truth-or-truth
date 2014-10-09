// 'use strict';

var app = angular.module('truth', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider/*, $httpProvider*/){

// $httpProvider.interceptors.push('httpRequestInterceptor');

// Change the /join and /create routes to ng-show to reduce the number of routes.

$routeProvider
	.when('/', {
		templateUrl: 'app/js/home/home.html',
		controller: 'homeCtrl'
	})
	.when('/create', {
		templateUrl: 'app/js/create/create.html',
		controller: 'createCtrl'
	})
/*	.when('/join', {
		templateUrl: 'app/js/join/join.html',
		controller: 'joinCtrl'
	})*/
	.when('/hat:gameID', {
		templateUrl: 'app/js/hat/hat.html',
		controller: 'hatCtrl'
	})
	.when('/player:gameID', {
		templateUrl: 'app/js/player/player.html',
		controller: 'playerCtrl',
		resolve: {
			userReference: function(firebaseService, $route){
				return firebaseService.getUser($route.current.params.userId);
			},
			thingsReference: function(firebaseService, $route){
				return firebaseService.getThings($route.current.params.userId);
			}
		}
	})
	.otherwise({
		redirectTo: '/'
	});

}]);