var myAngularDemo;
!function (ng, ctrlModule) {
    "use strict";
    var myAngularDemo = function ($scope, $rootScope, $state) {

    };
    ctrlModule.controller("MyAngularDemoAppCtrl", ["$scope", "$rootScope", "$state", myAngularDemo]);
}(angular, myAngularDemo.CtrlModule);