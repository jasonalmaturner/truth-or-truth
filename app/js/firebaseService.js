var app = angular.module('truth');

app.service('firebaseService', function($firebase){
	var firebaseUrl = 'https://truth-or-truth.firebaseio.com';

	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
	};

	this.getThings = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asArray();
	};
	
})