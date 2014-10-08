var app = angular.module('truth');

app.controller('homeCtrl', function($scope){

	$scope.login = true;
	$scope.register = false;
	$scope.loginToggle = function(){
		$scope.login = true;
		$scope.register = false;
		console.log('test');
	}
	$scope.registerToggle = function(){
		$scope.login = false;
		$scope.register = true;
		console.log('test');
	}

	$scope.join = true;
	$scope.create = false;
	$scope.joinToggle = function(){
		$scope.join = true;
		$scope.create = false;
		console.log('test');
	}
	$scope.createToggle = function(){
		$scope.join = false;
		$scope.create = true;
		console.log('test');
	}

})