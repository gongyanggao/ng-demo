var myAngularDemo;
!function (myAngularDemo) {
	'use strict';
	myAngularDemo.AppModule.config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                	$urlRouterProvider
                            .otherwise("/app");
                    $stateProvider
                    //默认首页
                    .state('app', {
                        url: '/app',
                        views: {
                            '': {
                                templateUrl: './tpl/app.html'
                            },
                            'app.content@app': {
                                templateUrl: '/app/bigdata/bigdata.html',
                                controller: 'bigDataCtrl'
                            }
                        }
                    })
                    .state('app.product', {
                        url: '/product',
                        views:{
                            'app.content@app': {
                                templateUrl: '/app/product/product.html',
                                controller: 'productCtrl'
                            }
                        }
                    })
                    .state('app.product.detail', {
                        url: '/detail/:productId',
                        views:{
                            'app.content@app': {
                                templateUrl: '/app/product/detail.html',
                                controller: 'productDetailCtrl'
                            }
                        }
                    })
                    .state('app.product.checkout', {
                        url: '/checkout',
                        views:{
                            'app.content@app': {
                                templateUrl: '/app/product/checkout.html',
                                controller: 'checkOutCtrl'
                            }
                        }
                    })
                    .state('app.product.checkout.payment', {
                        url: '/payment',
                        views:{
                            'app.content@app': {
                                templateUrl: '/app/product/payment.html',
                                controller: 'paymentCtrl'
                            }
                        }
                    })
                    .state('app.bigData', {
                        url: '/bigData',
                        views:{
                            'app.content@app': {
                                templateUrl: '/app/bigdata/bigdata.html',
                                controller: 'bigDataCtrl'
                            }
                        }
                    })
                    .state('app.web', {
                        url: '/web',
                        views:{
                            'app.content@app': {
                                templateUrl: '/app/web/web.html',
                                controller: 'webCtrl'
                            }
                        }
                    });
            }]);
}(myAngularDemo || (myAngularDemo = {}));
