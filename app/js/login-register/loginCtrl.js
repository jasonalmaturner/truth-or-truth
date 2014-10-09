var app = angular.module('truth');

app.controller('loginCtrl', function ($scope, authService, $location) {

	$scope.login = function() {
		return authService.login($scope.details, function(user){
			user.uid = user.uid.replace('simpleLogin:', '');
			$scope.$apply(function(){
				$location.path('/player/' + user.uid)
			});
		});
	};

	$scope.register = function() {
		return authService.register($scope.details, function(user){
			user.uid = user.uid.replace('simpleLogin:', '');
			$scope.$apply(function(){
				$location.path('/player/' + user.uid)
			})
		})
	}

})