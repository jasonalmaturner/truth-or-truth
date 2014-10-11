var app = angular.module('truth');

app.service('firebaseService', function($firebase){
	var firebaseUrl = 'https://truth-or-truth.firebaseio.com';

	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + '/users/' + userId));
	};

	this.getThings = function(userId){
		return $firebase(new Firebase(firebaseUrl + '/users/' + userId));
	};

	this.getGroup = function(groupId){
		return new Firebase(firebaseUrl + '/groups/' + groupId)
	}
	
	var game = false;
	this.saveGame = function(gameId){
		game = gameId;
	}

	this.returnGame = function(){
		return game;
	}

})