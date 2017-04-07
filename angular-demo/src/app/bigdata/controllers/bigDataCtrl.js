var myNgDemo;
myNgDemo.CtrlModule.controller('bigDataCtrl', ['$scope', function($scope) {
	'use strict';
	//TODO
	$('#domainTable').bootstrapTable({
		url: './app/bigdata/controllers/data.json',
		method: 'get',
		dataType: 'json',
		pagination: true,
		sortable: true,
		pageNumber: 1,
		pageSize: 5,
		pageList: [5, 10, 20, 50],
		height: 400
	});
}]);
