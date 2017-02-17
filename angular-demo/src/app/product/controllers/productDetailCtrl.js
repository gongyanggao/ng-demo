'use strict';
var myAngularDemo;
myAngularDemo.AppModule.controller('productDetailCtrl', ['$scope', '$stateParams', 'ajaxService',
	function($scope, $stateParams, ajaxService) {
		ajaxService.get('../data/productsDetails.json', function(data) {
			$scope.introduction = data[$stateParams.productId - 1].words;
		});

	}
]);
