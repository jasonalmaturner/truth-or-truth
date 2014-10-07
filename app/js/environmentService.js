var app = angular.module('truth');

app.service('environmentService', function($window) {
	return {
		getEnv: function() {
			return $window.env;
		}
	}
	
});