var app = angular.module('truth');

app.service('createService', function($firebase){
	var firebaseUrl = 'https://truth-or-truth.firebaseio.com';
	var firebaseCreate = new Firebase(firebaseUrl);
	// var sync = $firebase(ref);

	this.createNewGroup = function(group){
		var newGroup = {};
		newGroup.name = group.name;
		newGroup.password = group.password;
		newGroup.hatPassword = group.hatPassword;
		firebaseCreate.child('groups').child(newGroup.name).set(newGroup);
	}

})