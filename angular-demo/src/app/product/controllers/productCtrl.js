'use strict';
var myNgDemo;
myNgDemo.CtrlModule.controller('productCtrl', ['$scope', 'instance', 'ajaxService',
	function($scope, instance, ajaxService) {
		$scope.minus = function(item) {
			instance.countMinus(item);
		};
		$scope.plus = function(item) {
			instance.countPlus(item);
		};
		$scope.payList = instance.getPayList();
		ajaxService.get('../data/products.json', function(data) {
			$scope.datas = data.data;
			if (instance.getPayList().length > 0) {
				$scope.datas = instance.reloadDatas(data.data);
			}
		});
	}
]);
