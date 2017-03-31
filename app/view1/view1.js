'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.service('Service', ['$http', function($http){
	var header = '';
	this.saveData = function(item){
		header = item;
	}

	this.getData = function(){
		return header;
	}
}])

.controller('View1Ctrl', ['$scope', function($scope) {

}])

.controller('Ctrl1', ['$scope', 'Service', function($scope, Service) {
	$scope.header = 'I am from Controller 1';
	Service.saveData($scope.header);
}])

.controller('Ctrl2', ['$scope', 'Service', function($scope, Service) {
	$scope.header1 = Service.getData();
}]);