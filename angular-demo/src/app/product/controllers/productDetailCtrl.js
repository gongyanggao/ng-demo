'use strict';
var myNgDemo;
myNgDemo.CtrlModule.controller('productDetailCtrl', ['$scope', '$stateParams', 'ajaxService',
	function($scope, $stateParams, ajaxService) {
		ajaxService.get('../data/productsDetails.json', function(data) {
			$scope.introduction = data.data[$stateParams.productId - 1].words;
		});

	}
]);
