var myAngularDemo;
! function(myAngularDemo) {
	'use strict';
	myAngularDemo.CtrlModule = angular.module("myAngularDemo.controllers", []),
		// myAngularDemo.ServiceModule = angular.module("myAngularDemo.services", []),
		// myAngularDemo.DirectiveModule = angular.module("myAngularDemo.directives", []),
		// myAngularDemo.TemplateModule = angular.module("templates", ["ng"]),
		myAngularDemo.AppModule = angular.module("myAngularDemo", ["ui.router"]);
	myAngularDemo.AppModule.controller('angularDemoAppCtrl', function($scope, $rootScope) {
		// TODO

	});

}(myAngularDemo || (myAngularDemo = {}));