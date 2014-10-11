var app = angular.module('truth');

app.controller('createCtrl', function($scope, createService, $location, firebaseService){

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

	$scope.createGroup = function(){
		createService.createNewGroup($scope.group);
		$location.path('/player/');
		var gameId = $scope.group.name;
		firebaseService.saveGame(gameId);
	}
	
})