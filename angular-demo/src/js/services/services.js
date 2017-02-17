"use strict";
myAngularDemo.AppModule
    .factory('instance', function() {
        var payList = [];
        return {
            countMinus: function(item) {
                //数量大于1则减1
                if (item.count > 1) {
                    for (var i = 0; i < payList.length; i++) {
                        if (payList[i].productId === item.productId) {
                            payList[i].count--;
                            item.count = payList[i].count;
                            break;
                        }
                    }
                    //等于1的时候减1再清空购物车中对应的条目
                } else if (item.count > 0) {
                    for (var i = 0; i < payList.length; i++) {
                        if (payList[i].productId === item.productId) {
                            payList.splice(i, 1);
                            break;
                        }
                    }
                    item.count--;
                }
            },
            //等于0的时候，数量加1，购物车添加条目
            countPlus: function(item) {
                if (item.count == 0) {
                    item.count++;
                    payList.push(item);
                    //大于0的时候，数量加1，购物车中对应条目+1
                } else {
                    for (var i = 0; i < payList.length; i++) {
                        if (payList[i].productId === item.productId) {
                            payList[i].count++;
                            item.count = payList[i].count;
                            break;
                        }
                    }
                    // item.count++;
                }
            },
            //移除购物车中的条目
            removeItem: function(id) {
                for (var i = 0; i < payList.length; i++) {
                    if (payList[i].productId === id) {
                        payList.splice(i, 1);
                        break;
                    }
                }
            },
            getPayList: function() {
                return payList;
            }
        };
    })
    /*
     * Ajax服务
     */
    .service('ajaxService', ['$http', function($http) {
        var _self = this;

        _self.get = function(url, success) {
            $http.get(url).success(function(data) {
                success(data.data);
            })
        };

    }]);
