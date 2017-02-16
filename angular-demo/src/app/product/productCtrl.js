'use strict';
var myAngularDemo;
myAngularDemo.AppModule.controller('productCtrl', ['$scope', 'instance', '$http', function($scope, instance, $http) {
	$scope.minus = function(item) {
		instance.countMinus(item);
	};
	$scope.plus = function(item) {
		instance.countPlus(item);
	};
	$scope.payList = instance.getPayList();
	function getProducts() {
		$http({
			method: 'GET',
			url: '../data/products.json'
		}).success(function(data) {
			$scope.datas = data.data;
			if (instance.getPayList().length > 0) {
				for (var i = $scope.datas.length - 1; i >= 0; i--) {
					for (var j = instance.getPayList().length - 1; j >= 0; j--) {
						if(instance.getPayList()[j].productId === $scope.datas[i].productId) {
							$scope.datas[i].count = instance.getPayList()[j].count;
							break;
						}
					}
				}
			}
		}).error(function() {});
	}
	getProducts();
}]);
