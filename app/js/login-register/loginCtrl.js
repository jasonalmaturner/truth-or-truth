var app = angular.module('truth');

app.controller('loginCtrl', function ($scope, authService, $location) {

	$scope.login = true;
	$scope.register = false;
	$scope.loginToggle = function(){
		$scope.login = true;
		$scope.register = false;
		// console.log('test');
	};

	$scope.registerToggle = function(){
		$scope.login = false;
		$scope.register = true;
		// console.log('test');
	};


	$scope.login = function() {
		return authService.login($scope.details, function(user){
			user.uid = user.uid.replace('simpleLogin:', '');
			$scope.$apply(function(){
				$location.path('/player/' + user.uid)
			});
		});
	};

	$scope.registerUser = function() {
		return authService.register($scope.details, function(user){
			user.uid = user.uid.replace('simpleLogin:', '');
			$scope.$apply(function(){
				$location.path('/player/' + user.uid)
			});
		});
	};

	// $scope.status = 'Register';
	// $scope.showReg = function(){
	// 	if($scope.status === 'Register'){
	// 		$scope.status = 'Login';
	// 	} else {
	// 		$scope.status = 'Register';
	// 	}
	// 	$scope.reg = !$scope.reg;
	// };

})