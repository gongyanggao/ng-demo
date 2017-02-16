'use strict';
var myAngularDemo;
myAngularDemo.AppModule.controller('checkOutCtrl', ['$scope', 'instance', function ($scope, instance) {
	$scope.remove = function(id) {
		instance.removeItem(id);
		// $scope.payList.splice(this.$index, 1);
	};
	$scope.payList = instance.getPayList();
	$scope.itemCount = function(){
		return $scope.payList.length;
	};
	$scope.total = function() {
		var sum = 0;
		for(var i = 0; i < $scope.payList.length; i++) {
			sum += $scope.payList[i].count * $scope.payList[i].price;
		}
		return sum;
	};
}]);
