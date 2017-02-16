'use strict';
var myAngularDemo;
myAngularDemo.AppModule.controller('productDetailCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
	var index = $stateParams.productId;
	function getProductDetails() {
		// body...
		$http({
			method: 'GET',
			url: '../data/productsDetails.json'
		}).success(function(data) {
			$scope.introduction = data[index-1].words;
			$scope.$digest();
		}).error(function() {});
	}
	getProductDetails();

}]);