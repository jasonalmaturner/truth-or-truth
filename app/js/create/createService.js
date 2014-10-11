var app = angular.module('truth');

app.service('createService', function($firebase, firebaseService){
	var firebaseUrl = 'https://truth-or-truth.firebaseio.com';
	var firebaseCreate = new Firebase(firebaseUrl);
	// var sync = $firebase(ref);

	this.createNewGroup = function(group){
		// Need to add function that will prevent users from creating
		// a new group with the same name as an existing group
		var newGroup = {};
		newGroup.name = group.name;
		newGroup.password = group.password;
		newGroup.hatPassword = group.hatPassword;
		firebaseCreate.child('groups').child(newGroup.name).set(newGroup);
	}

})