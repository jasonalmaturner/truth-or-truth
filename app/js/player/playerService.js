var app = angular.module('truth');

app.service('playerService', function($firebase, firebaseService){
	var firebaseUrl = 'https://truth-or-truth.firebaseio.com';
	var firebaseCreate = new Firebase(firebaseUrl);

	this.sendQuestion = function(info){
		var newQuestion = {};
		newQuestion.addressee = info.addressee;
		newQuestion.question = info.question;
		firebaseCreate.child('groups').child(firebaseService.returnGame()).child('questions').set(newQuestion);
	}

})