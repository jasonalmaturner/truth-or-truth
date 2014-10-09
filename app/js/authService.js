var app = angular.module('truth');

app.service('authService', function(){
	var firebaseUrl = 'https://truth-or-truth.firebaseio.com';
	var firebaseLogin = new Firebase(firebaseUrl);

	this.login = function(user, cb){
		firebaseLogin.authWithPassword({
			email		: user.email,
			password: user.password
		}, function(err, authData) {
			if (err) {
				switch (err.code) {
					case "INVALID_EMAIL":
					case "INVALID_PASSWORD":
					default:
				}
			} else if (authData) {
				console.log("Logged In! User ID: " + authData.uid);
				cb(authData);
			}
		})
	}

	this.register = function(user, cb){
		firebaseLogin.createUser({
			email: user.email,
			password: user.password
		}, function(error) {
			if (error === null) {
				console.log("User created successfully");
				firebaseLogin.authWithPassword({
					email 	: user.email,
					password: user.password
				}, function(err, authData) {
					if (authData) {
						authData.name = user.name;
						authData.timestapm = new Date().toISOString();
						firebaseLogin.chile('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
						cb(authData);
					} else {
						console.log('something went wrong');
					}
				});
			} else {
				console.log("Error creating user:", error);
				return false;
			}
		});
	}


})