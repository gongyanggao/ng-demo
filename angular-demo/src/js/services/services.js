"use strict";
myAngularDemo.AppModule
    .factory('instance', function() {
        var payList = [];
        return {
            countMinus: function(item) {
                if (item.count > 1) {
                    for (var i = 0; i < payList.length; i++) {
                        if (payList[i].productId === item.productId) {
                            payList[i].count--;
                            item.count = payList[i].count;
                            break;
                        }
                    }
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
            countPlus: function(item) {
                if (item.count == 0) {
                    item.count++;
                    payList.push(item);
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
     * Ajax请求后面需要拼接时间戳，否则后台接口报错
     */
    .service('ajaxService', ['$http', function($http) {
        var _self = this;

        function _ajax(option) {
            option.params && (option.params['_'] = new Date().getTime());
            return $http(option);
        }

        /**
         * 设置时间戳
         * @param data
         */
        function setTimestamp(data) {
            data || (data = {
                params: {}
            });
            data.params || (data.params = {});
            data.params['_'] = new Date().getTime();
        }

        function _get(url, data) {
            setTimestamp(data);
            return $http.get(url, data);
        }

        function _post(url, data) {
            setTimestamp
            return $http.post(url, data);
        }

        _self.ajax = _ajax;
        _self.get = _get;
        _self.post = _post;
    }])
