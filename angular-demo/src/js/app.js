var myNgDemo;
! function(myNgDemo) {
	'use strict';
	myNgDemo.CtrlModule = angular.module("myNgDemo.controllers", []),
		myNgDemo.ServiceModule = angular.module("myNgDemo.services", []),
		myNgDemo.DirectiveModule = angular.module("myNgDemo.directives", []),
		// myNgDemo.TemplateModule = angular.module("templates", ["ng"]),
		myNgDemo.AppModule = angular.module("myNgDemo", ["myNgDemo.controllers", "myNgDemo.services", "myNgDemo.directives", "ui.router"]);
	myNgDemo.AppModule.controller('angularDemoAppCtrl', function($scope, $rootScope) {
		// TODO

	});

}(myNgDemo || (myNgDemo = {}));
