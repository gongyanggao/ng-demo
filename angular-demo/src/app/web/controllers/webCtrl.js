var myNgDemo;
myNgDemo.CtrlModule.controller('webCtrl', ['$scope', function ($scope) {
        'use strict';
        //TODO
        $.ajax({
        	url: 'app/web/views/replace.html',
        	success: function(str) {
        		$('#replace').html(str);
        	}
        })
    }]);
