var app = angular.module('truth');

app.service('environmentService', function($window) {
	
	this.getEnv = function() {
			return $window.env;
		}
	}
	
});