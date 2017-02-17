"use strict";
myNgDemo.ServiceModule
    .factory('instance', function() {
        var payList = [];
        return {
            reloadDatas: function(data) {
                for (var i = data.length - 1; i >= 0; i--) {
                    for (var j = payList.length - 1; j >= 0; j--) {
                        if (payList[j].productId === data[i].productId) {
                            data[i].count = payList[j].count;
                            break;
                        }
                    }
                }
                return data;
            },
            countMinus: function(item) {
                if (item.count > 1) {   //数量大于1则减1
                    for (var i = 0; i < payList.length; i++) {
                        if (payList[i].productId === item.productId) {
                            payList[i].count--;
                            item.count = payList[i].count;
                            break;
                        }
                    }
                } else if (item.count > 0) {    //等于1的时候减1再清空购物车中对应的条目
                    for (var i = 0; i < payList.length; i++) {
                        if (payList[i].productId === item.productId) {
                            payList.splice(i, 1);
                            break;
                        }
                    }
                    item.count--;
                }
            },
            countPlus: function(item) {
                if (item.count == 0) {  //等于0的时候，数量加1，购物车添加条目
                    item.count++;
                    payList.push(item);
                } else {    //大于0的时候，数量加1，购物车中对应条目+1
                    for (var i = 0; i < payList.length; i++) {
                        if (payList[i].productId === item.productId) {
                            payList[i].count++;
                            item.count = payList[i].count;
                            break;
                        }
                    }
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
    .service('ajaxService', ['$http', '$q', function($http, $q) {
        var _self = this;
        _self.get = function(url, callback) {
            var deferred=$q.defer();
            var promise = $http.get(url);
            promise.then(function(data){
                deferred.resolve(callback(data.data));
            });
        };
    }]);
