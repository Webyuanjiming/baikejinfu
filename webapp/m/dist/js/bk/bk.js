var app = angular.module('MobileAngularUiExamples', [
    'ngRoute',
    'mobile-angular-ui',
    'mobile-angular-ui',
    'mobile-angular-ui.components',
    // touch/drag feature: this is from 'mobile-angular-ui.gestures.js'
    // it is at a very beginning stage, so please be careful if you like to use
    // in production. This is intended to provide a flexible, integrated and and
    // easy to use alternative to other 3rd party libs like hammer.js, with the
    // final pourpose to integrate gestures into default ui interactions like
    // opening sidebars, turning switches on/off ..
    'mobile-angular-ui.gestures',
    'mobile-angular-ui.core.sharedState',
    'Encrypt'
]);

var SERVER_ADDRESS = "";

app.config(function($routeProvider) {
    //登录
    $routeProvider.when('/login', {
        templateUrl: '/webapp/m/bk/login.html',
        controller: 'loginController'
    });
    //信息验证
    $routeProvider.when('/findpsw', {
        templateUrl: '/webapp/m/bk/findpsw.html',
        controller: 'findpswController'
    });
    //修改密码
    $routeProvider.when('/modifypsw', {
        templateUrl: '/webapp/m/bk/modifypsw.html',
        controller: 'findpswController'
    });
    //日历
    $routeProvider.when('/calendar', {
        templateUrl: '/webapp/m/bk/calendar.html',
        controller: 'calendarController'
    });
    //金服
    $routeProvider.when('/payment', {
        templateUrl: '/webapp/m/bk/payment/payment.html',
        controller: 'payController'
    });
    //信用卡
    $routeProvider.when('/creditcard', {
        templateUrl: '/webapp/m/bk/card/creditcard.html',
        controller: 'cardController'
    });
    //票据
    $routeProvider.when('/bill', {
        templateUrl: '/webapp/m/bk/payment/bill.html'
    });
    //赎楼
    $routeProvider.when('/ransom', {
        templateUrl: '/webapp/m/bk/payment/ransom.html'
    });
    //page文章页面
    $routeProvider.when('/page', {
        templateUrl: '/webapp/m/bk/page/page.html',
        controller: 'pageController'
    });
    //info资讯页面
    $routeProvider.when('/info', {
        templateUrl: '/webapp/m/bk/info/info.html',
        controller: 'infoController'
    });
    //answers资讯页面
    $routeProvider.when('/answers', {
        templateUrl: '/webapp/m/bk/info/answers.html',
        controller: 'infoController'
    });

    //收款部分
    $routeProvider.when('/gathering', {
        templateUrl: '/webapp/m/bk/pays/gathering.html',
        controller: 'paysController'
    });
    //经纪人认证
    $routeProvider.when('/broker', {
        templateUrl: '/webapp/m/bk/pays/broker.html',
        controller: 'brokerController'
    });
    //选择付款卡
    $routeProvider.when('/selectpays', {
        templateUrl: '/webapp/m/bk/pays/selectPaymentCard.html',
        controller: 'selectPaysController'
    });
    //添加付款卡
    $routeProvider.when('/payscard', {
        templateUrl: '/webapp/m/bk/pays/addPaysCard.html',
        controller: 'addpaysController'
    });
    //经纪人认证信息
    $routeProvider.when('/credentials', {
        templateUrl: '/webapp/m/bk/pays/credentials.html',
        controller: 'credentialsController'
    });
    //trading交易详情
    $routeProvider.when('/trading', {
        templateUrl: '/webapp/m/bk/pays/trading.html',
        controller: 'tradingController'
    });
    //tradingRecord交易记录
    $routeProvider.when('/tradingrecord', {
        templateUrl: '/webapp/m/bk/pays/tradingRecord.html',
        controller: 'tradRecordController'
    });

    //帮助
    $routeProvider.when('/help', {
        templateUrl: '/webapp/m/bk/sc/help.html',
        controller: 'helpController'
    });
    //帮助详情
    $routeProvider.when('/helping', {
        templateUrl: '/webapp/m/bk/sc/helping.html',
        controller: 'helpController'
    });
    //推荐有奖
    $routeProvider.when('/invite', {
        templateUrl: '/webapp/m/bk/invite.html',
        controller: 'inviteController'
    });
    //着陆页
    $routeProvider.when('/landing', {
        templateUrl: '/webapp/m/bk/land/landing.html',
        controller: 'landController'
    });
    //积分商城
    $routeProvider.when('/integral', {
        templateUrl: '/webapp/m/bk/integral/integralmall.html',
        controller: 'integralController'
    });
    //收支明细
    $routeProvider.when('/integralsub', {
        templateUrl: '/webapp/m/bk/integral/integralsub.html',
        controller: 'integralsubController'
    });
    //我的兑换
    $routeProvider.when('/exchange', {
        templateUrl: '/webapp/m/bk/integral/exchange.html',
        controller: 'integralController'
    });
    //兑换详情页面
    $routeProvider.when('/exchangedetails', {
        templateUrl: '/webapp/m/bk/integral/exchangedetails.html',
        controller: 'detailsController'
    });
    //收货地址
    $routeProvider.when('/address', {
        templateUrl: '/webapp/m/bk/integral/address.html',
        controller: 'detailsController'
    });
    //下载地址
    $routeProvider.when('/download', {
        templateUrl: '/webapp/m/bk/download/download.html',
        controller: 'downloadController'
    });
    //关于
    $routeProvider.when('/about', {
        templateUrl: '/webapp/m/bk/sc/about.html'
    });
    $routeProvider.when('/error', {
        templateUrl: '/webapp/m/bk/sc/error.html',
        controller: 'errorController'
    });
    //me我的
    $routeProvider.when('/me', {
        templateUrl: '/webapp/m/bk/main/main.html',
        controller: 'meController'
    });
    //me我的设置
    $routeProvider.when('/accountset', {
        templateUrl: '/webapp/m/bk/main/accountset.html',
        controller: 'meController'
    });
    //注册
    $routeProvider.when('/register', {
        templateUrl: '/webapp/m/bk/register.html',
        controller: 'registerController'
    });
    //主页
    $routeProvider.when('/', {
        templateUrl: '/webapp/m/bk/wkindex.html',
        controller: 'WkIndexController'
    });
    //秒到收款*引导
    $routeProvider.when('/guidance', {
        templateUrl: '/webapp/m/bk/guidance/guidance.html',
        controller: 'guidanceController'
    });
    //快速申请
    $routeProvider.when('/rapid', {
        templateUrl: '/webapp/m/bk/guidance/rapid.html',
        controller: 'guidanceController'
    });
    //房产评估
    $routeProvider.when('/valuation', {
        templateUrl: '/webapp/m/bk/guidance/valuation.html',
        controller: 'valuationController'
    });
});
app.run(function($transform, $rootScope,$location) {
    window.$transform = $transform;
    $rootScope.pageSize = 5;

    $rootScope.SERVER = SERVER_ADDRESS;
    $rootScope.URL_ROOT = $rootScope.SERVER + "/1.0"; //全局地址
    $rootScope.ROOT = $rootScope.SERVER + "/m/bk/";
    $rootScope.IS_LOGIN = false;
    $rootScope.RETURN = ""; //登录后跳转的页面
    //是否完善
    $rootScope.registerEnter = false;
    //切换视图
    $rootScope.$on("$routeChangeStart",function(){
        var protocol = $location.protocol();
		// if(window.location.protocol=="http:")
		// {
		// 	window.location.href="https://m.jujinziben.com/m/jujin/#/";
		// 	$rootScope.URL_ROOT = SERVER_ADDRESS.replace("https",protocol)  + "/api";;
		// }       
    })
});
//通用服务
app.factory("commonService",["$http","$q","$rootScope",function($http,$q,$rootScope){
    var service = {};
    //默认配置信息
    var defaultConfig = {
        SERVER: SERVER_ADDRESS,
        URL_ROOT: SERVER_ADDRESS + "/1.0",
        ROOT: SERVER_ADDRESS + "/m/bk/",
        IS_LOGIN: false,
        PAGE_SIZE: 5,
        RETURN: "" //登录后跳转的页面
    };
    //统一处理错误信息
    service.loadAction = function(config,$scope){
        var deferred = $q.defer(),
            promise = deferred.promise;

        if(config == undefined || config.url == undefined){
            return false;
        }
        //默认使用GET方式
        config.method = config.method || "POST";
        $rootScope.loading = true;
        //获取数据
        $http(config).success(function(data){
            deferred.resolve(data);
        })
        .error(function(error){
            deferred.reject(error);
        });
        //成功
        promise.success = function(sucsCall){
            promise.then(function(data) {
                if (checkResponse($rootScope, $scope, data)) {
                    if(sucsCall && typeof sucsCall == "function"){
                        sucsCall(data);
                    }
                }
            });
        },
        //失败
        promise.error = function(errorCall){
            promise.then(null ,function(data) {
                if(checkResponse($rootScope, $scope, data)){
                    if(errorCall && typeof errorCall == "function"){
                        errorCall(data);
                    }
                }
            });
        };
        return promise;
    }
    //加上分页默认参数
    service.loadPageAction = function(config,$scope){
        if(config == undefined || config.url == undefined){
            return false;
        }
        //默认参数
        var httpConfig = {
            params:{
                ps: defaultConfig.PAGE_SIZE,//每页条数
                pi: 1//第几页
            }
        }
        config.params = angular.extend(httpConfig.params,config.params);
        //获取数据
        return service.loadAction(config,$scope);
    }
    //加载记录---返回HttpPromise
    service.loadRecord = function(config){
        if(config == undefined || config.url == undefined){
            return false;
        }
        //默认使用GET方式
        config.method = config.method || "POST";
        $rootScope.loading = true;
        //获取数据
        return $http(config);
    }
    //加载分页记录---返回HttpPromise
    service.loadPageRecord = function(config){
        if(config == undefined || config.url == undefined){
            return false;
        }
        //默认参数
        var httpConfig = {
            params:{
                ps: defaultConfig.PAGE_SIZE,//每页条数
                pi: 1//第几页
            }
        }
        config.params = angular.extend(httpConfig.params,config.params);
        //获取数据
        return service.loadRecord(config);
    }
    //生成记录信息
    service.genRecord = function(httpConfig,$scope,recordConfig,rowhandler,args){
        //默认参数
        var commConfig = {
            proName: "records",
            totalPage : "totalPageCount"
        }
        recordConfig = angular.extend(commConfig,recordConfig);
        service.loadPageAction(httpConfig,$scope).success(function(response){
            $scope[recordConfig.totalPage] = response.pageCount;
            var list = response.list;
            if (isEmpty($scope[recordConfig.proName])) {
                if(!isEmpty(rowhandler) && typeof(rowhandler) == 'function'){
                    $scope[recordConfig.proName] = [];
                    list.forEach(function(item, index, array) {
                        $scope[recordConfig.proName].push(rowhandler(item,args));
                    });
                }else{
                    $scope[recordConfig.proName] = list;
                }
            } else if (!isEmpty(list) && Array.isArray(list) && list.length > 0){
                if(!isEmpty(rowhandler) && typeof(rowhandler) == 'function'){
                    list.forEach(function(item, index, array) {
                        $scope[recordConfig.proName].push(rowhandler(item,args));
                    });
                }else{
                    $scope[recordConfig.proName] = $scope[recordConfig.proName].concat(list);
                }
            }
        });
    }
    //更多记录
    service.loadMore = function(httpConfig,$scope,recordConfig,rowhandler,args){
        //默认参数
        var commConfig = {
            proName: "records",
            totalPage : "totalPageCount",
            currentPage: "currentPage"
        }
        recordConfig = angular.extend(commConfig,recordConfig);
        if ($scope[commConfig.currentPage] < $scope[commConfig.totalPage]) {
            $scope[commConfig.currentPage] = $scope[commConfig.currentPage] + 1;
            //请求第几页
            httpConfig.params.pi = $scope[commConfig.currentPage];
            service.genRecord(httpConfig,$scope,recordConfig,rowhandler,args);
        }
    }
    return service;
}]);
/*
app.factory('baseService', ['$location', '$rootScope', '$http', '$sce', function($location, $rootScope, $http, $sce) {

    var service = {};
    var config = {
        SERVER: SERVER_ADDRESS,
        URL_ROOT: SERVER_ADDRESS + "/api",
        ROOT: SERVER_ADDRESS + "/m/bk/",
        IS_LOGIN: false,
        PAGE_SIZE: 5,
        RETURN: "" //登录后跳转的页面
    };
    /!**
    函数名：makeUrl
    参数：
        serviceName：服务名(包含get的参数，单独拉出来反倒不直观，合在一起，就这么定了!^_^)
        pi：请求的页数
        ps：当前页数
    说明：从服务器取出集合数据放在$scope中对应的属性中

    **!/
    service.makeUrl = function(serviceName, pi, ps) {

        var url = config.URL_ROOT + serviceName;
		// if(window.location.protocol=="http:")
		// {
		// 	window.location.href="https://";
		// 	url=url.replace("https:","http:");
		// }

        if (!isEmpty(pi)) {
            if (serviceName.indexOf("?") == -1) {
                url += "?pi=" + pi;
            } else {
                url += "&pi=" + pi;
            }

            if (!isEmpty(ps)) {
                url += "&ps=" + ps;
            } else {
                url += "&ps=" + config.PAGE_SIZE;
            }
        }
        return url;
    }

    service.getConfig = function() {
            return config;
        }
        /!**
        函数名：loadEntities
        参数：
            $scope：Controller函数
            proName：$scope中属性名等价于$scope.messages,$scope.rows
            rowhandler:是否需要对每条数据进行格式转换和处理
            handler:对结果集转换函数
        说明：从服务器取出集合数据放在$scope中对应的属性中

        **!/
        service.loadEntities = function(url, $scope, proName, rowhandler, handler) {
            $rootScope.loading = true;
            $http.get(url).success(function(response) {
                if (checkResponse($rootScope, $scope, response)) {
                    if (isEmpty($scope)) return;
                    var list = response.list;
                    if (isEmpty($scope[proName]) || !Array.isArray($scope[proName])) {
                        $scope[proName] = [];
                    }
                    //20160511如果不需要数据格式转换和处理的话，是不是可以不用遍历了？？？判断要写在外面比较好吧
                    /!*list.forEach(function(item, index, array) {
                        $scope[proName].push(!isEmpty(rowhandler) && typeof(rowhandler) == 'function' ? rowhandler(item) : item);
                    });*!/

                    if(!isEmpty(rowhandler) && typeof(rowhandler) == 'function'){
                        list.forEach(function(item, index, array) {
                            $scope[proName].push(rowhandler(item));
                        });
                    }else{
                        $scope[proName] = $scope[proName].concat(list);
                    }
                    if (!isEmpty(handler) && typeof(handler) == 'function') {
                        handler(response);
                    }
                }
            }).error(function(response, status, headers, config) {
                checkResponse($rootScope, $scope, response);
                //TODO:LOG ERROR
            });
        }
        /!**
        函数名：loadEntity
        参数：
            $scope：Controller函数
            proName：$scope中属性名等价于$scope.messages,$scope.rows
            handler:是否需要对每条数据进行格式转换和处理
        说明：从服务器取出对象放在$scope中

        **!/
    service.loadEntity = function(url, $scope, proName, handler) {
        $rootScope.loading = true;
        $http.get(url).success(function(response) {

            if (checkResponse($rootScope, $scope, response)) {
                if (isEmpty($scope)) return;
                var entity = response.entity;
                $scope[proName] = entity;

                if (!isEmpty(handler) && typeof(handler) == 'function') {
                    handler(response);
                }

            }
        }).error(function(response, status, headers, config) {
            checkResponse($rootScope, $scope, response);
            //TODO:LOG ERROR
        });
    }

    /!**
    函数名：loadMore
    参数：
        $scope：Controller函数
        serviceName:该集合对应的服务名
        proName：$scope中属性名等价于$scope.messages,$scope.rows
        pageSize：每页呈现的数据，如不传默认为Config.PAGE_SIZE
        rowHandler:是否需要对每条数据进行格式转换和处理
        handler:对整个结果集处理
    说明：翻页页面使用从服务器取出集合数据放在$scope中对应的属性中

    **!/
    service.loadMore = function($scope, serviceName, proName, pageSize, rowHandler, handler) {
        if ($scope.currentPage < $scope.totalPageCount) {
            $scope.currentPage = $scope.currentPage + 1;
            var url = service.makeUrl(serviceName, $scope.currentPage, pageSize);

            service.loadEntities(url, $scope, proName, rowHandler, handler);
        }
    }

    /!**
           函数名：initValue
           参数：
               $scope：Controller函数
           说明：确保当前控制器得到正确的初始化(如清除上次执行消息，当前页面得到正确设置)

           **!/
    service.initValue = function($scope, handler) {
        setDefaultValue($scope);
        if (handler && typeof(handler) == 'function') {
            handler();
        }
    }

    /!**
    函数名：clone
    参数：
        url:
    说明：对象的深克隆
    **!/
    service.clone = function clone(o) {
        var k, ret = o,
            b;
        if (o && ((b = (o instanceof Array)) || o instanceof Object)) {
            ret = b ? [] : {};
            for (k in o) {
                if (o.hasOwnProperty(k)) {
                    ret[k] = clone(o[k]);
                }
            }
        }
        return ret;
    }

    /!**
     函数名：execAction
     参数：
         url:
     说明：执行一个简单的请求，然后执行回调函数
     注意：请求返回的内容始终在是第一个参数

     **!/
    service.execAction = function($scope, url, handler, args) {
        $rootScope.loading = true;
        $http.get(url).success(function(response) {
            if (checkResponse($rootScope, $scope, response)) {
                //response 始终会在第一位
                if (!isEmpty(handler) && typeof(handler) == 'function') {
                    if (isEmpty(args)) {
                        handler(response);
                    } else if (!Array.isArray(args)) {
                        handler(response, args);
                    } else {
                        args.unshift(response);
                        handler(args);
                    }
                }
            }
        }).error(function(response, status, headers, config) {
            checkResponse($rootScope, $scope, response);
            //TODO:LOG ERROR
        });
    }

    service.postAction = function($scope, url, handler, args) {

        $rootScope.loading = true;
        $http.post(url, args).success(function(data, status) {

            if (checkResponse($rootScope, $scope, data)) {
                if (handler && typeof(handler) == 'function') {
                    handler(data, status);
                }
            }
        }).error(function(data, status) {
            checkResponse($rootScope, $scope, data);
        });
    }
    return service;

}]);*/
//框架控制器
app.controller('HomeController', ['$rootScope', '$scope', '$routeParams', '$location',
    function($rootScope, $scope, $routeParams, $location) {
        //图标切换
        var active = "#0D8FF6";
        var hover = "#B1B3B5";

        $rootScope.dl1 = {
            "icon": "active",
            "color": active
        }
        $rootScope.dl2 = {
            "icon": "hover",
            "color": hover
        }
        $rootScope.dl3 = {
            "icon": "hover",
            "color": hover
        }
        $rootScope.dl4 = {
            "icon": "hover",
            "color": hover
        }
        $rootScope.dl5 = {
            "icon": "hover",
            "color": hover
        }
        var activetype = {
            "icon": "active",
            "color": active
        }
        var hovertype = {
            "icon": "hover",
            "color": hover
        }

        $scope.goInvite = function() {
            $rootScope.dl1 = activetype;
            $rootScope.dl2 = hovertype;
            $rootScope.dl3 = hovertype;
            $rootScope.dl4 = hovertype;
            $rootScope.dl5 = hovertype;
            $location.url("/");
        };
        $scope.goInvest = function() {
            if($location.url()=='/payment'){
                $rootScope.dl2 = activetype;
            }
            $rootScope.dl1 = hovertype;
            $rootScope.dl2 = activetype;
            $rootScope.dl3 = hovertype;
            $rootScope.dl4 = hovertype;
            $rootScope.dl5 = hovertype;
            $location.path("payment");
        };
        $scope.goAccount = function() {
            $rootScope.dl1 = hovertype;
            $rootScope.dl2 = hovertype;
            $rootScope.dl3 = activetype;
            $rootScope.dl4 = hovertype;
            $rootScope.dl5 = hovertype;
            $location.url("default");
        };
        $scope.goAttest = function() {
            $rootScope.dl1 = hovertype;
            $rootScope.dl2 = hovertype;
            $rootScope.dl3 = hovertype;
            $rootScope.dl4 = activetype;
            $rootScope.dl5 = hovertype;
            $location.url("more");
        };
        $scope.goMine = function() {
            $rootScope.dl1 = hovertype;
            $rootScope.dl2 = hovertype;
            $rootScope.dl3 = hovertype;
            $rootScope.dl4 = hovertype;
            $rootScope.dl5 = activetype;
            $location.url("me");
        };

        $rootScope.IndexShowNav = 0;

        //显示头部
        $rootScope.ShowNav = function() {
            var path = $location.path();
            //登陆
            if (path.indexOf("login") != -1) {
                return true;
            }else if (path.indexOf("findpsw") != -1) {//找回密码
                return false;
            }else if (path.indexOf("findpsw") != -1) {//找回密码
                return false;
            }else if (path.indexOf("help") != -1) {//帮助
                return false;
            }else if (path.indexOf("payment") != -1) {//金服
                return false;
            }else if (path.indexOf("about") != -1) {//关于
                return false;
            }else if (path.indexOf("bill") != -1) {//票据
                return false;
            }else if (path.indexOf("ransom") != -1) {//赎楼
                return false;
            }
            //默认不显示
            return false;
        }
        //显示下方菜单
        $rootScope.ShowBottomNav = function() {
            var path = $location.path();
            if (path.indexOf("login") != -1) {
                return false;
            }else if (path.indexOf("findpsw") != -1) {//信息验证
                return false;
            }else if (path.indexOf("modifypsw") != -1) {//找回密码
                return false;
            }else if (path.indexOf("page") != -1) {//page文章
                return false;
            }else if (path.indexOf("info") != -1) {//page文章
                return false;
            }else if (path.indexOf("answers") != -1) {//answers问答
                return false;
            }else if (path.indexOf("gathering") != -1) {//gathering收款
                return false;
            }else if (path.indexOf("broker") != -1) {//broker认证
                return false;
            }else if (path.indexOf("payscard") != -1) {//添加支付卡
                return false;
            }else if (path.indexOf("credentials") != -1) {//credentials认证信息
                return false;
            }else if (path.indexOf("selectpays") != -1) {//selectpays选择支付卡
                return false;
            }else if (path.indexOf("trading") != -1) {//trading交易详情
                return false;
            }else if (path.indexOf("help") != -1) {//帮助
                return false;
            }else if (path.indexOf("about") != -1) {//关于
                return false;
            }else if (path.indexOf("error") != -1) {//房产评估
                return false;
            }else if (path.indexOf("bill") != -1) {//票据
                return false;
            }else if (path.indexOf("ransom") != -1) {//赎楼
                return false;
            }else if (path.indexOf("creditcard") != -1) {//信用卡
                return false;
            }else if (path.indexOf("invite") != -1) {//邀请推荐人
                return false;
            }else if (path.indexOf("integral") != -1) {//积分商城
                return false;
            }else if (path.indexOf("address") != -1) {//收货地址
                return false;
            }else if (path.indexOf("download") != -1) {//下载地址
                return false;
            }else if (path.indexOf("landing") != -1) {//领红包页面
                return false;
            }else if (path.indexOf("integralsub") != -1) {//收支明细
                return false;
            }else if (path.indexOf("exchange") != -1) {//我的兑换
                return false;
            }else if (path.indexOf("exchangedetails") != -1) {//我的兑换
                return false;
            }else if (path.indexOf("calendar") != -1) {//日历
                return false;
            }else if (path.indexOf("guidance") != -1) {//秒到回款
                return false;
            }else if (path.indexOf("rapid") != -1) {//快速申请
                return false;
            }else if (path.indexOf("valuation") != -1) {//房产评估
                return false;
            }
            /*else if (path.indexOf("register") != -1) {//注册
                return true;
            }*/
/*          if (path.indexOf("landing.html") != -1) {
                return false;
            }*/

          /*  else if (path.indexOf("invite") != -1 && $routeParams.mobile == 1) {
                return false;
            }*/
            //我的邀请列表
            return true;
        }

    }
]);
//首页图片轮播
app.directive("slideBox",["$rootScope","$http",function($rootScope, $http){
    return {
        restrict: 'AE',
        template: '<div class="bd"><ul></ul></div><div class="hd"><ul></ul></div>',
        link: function(scope, iElement, iAttrs){
            var watchbanners = scope.$watch("banners",function(newVal,oldVal){
                if(newVal != undefined && newVal.length > 1 ){
                    //轮播图
                    var imgList = scope.banners;
                    var liList = "";
                    for(var i=0;i<imgList.length;i++){
                        liList += '<li><a target="_blank" href="'+imgList[i].url+'"><img src="'+imgList[i].imgurl+'" type="'+imgList[i].type+'" id="'+imgList[i].pid+'" title="'+imgList[i].title+'"></a></li>';
                    }
                    $(iElement).find("ul").html(liList);
                    TouchSlide({
                        slideCell:"#" + iAttrs.id,
                        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                        mainCell:".bd ul",
                        effect:"leftLoop",
                        interTime: 5000,//自动运行间隔
                        delayTime: 1000,//切换效果持续时间
                        autoPage:true,//自动分页
                        autoPlay:true //自动播放
                    });
                    //释放监听
                    watchbanners();
                }else if(newVal != undefined && newVal.length == 1){
                    //轮播图
                    var imgList = scope.banners;
                    var liList = "";
                    for(var i=0;i<imgList.length;i++){
                        liList += '<li><a target="_blank" href="'+imgList[i].url+'"><img src="'+imgList[i].imgurl+'" type="'+imgList[i].type+'" id="'+imgList[i].pid+'" title="'+imgList[i].title+'"></a></li>';
                    }
                    $(iElement).find("ul").html(liList);
                    TouchSlide({
                        slideCell:"#" + iAttrs.id,
                        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                        mainCell:".bd ul",
                        effect:"leftLoop",
                        autoPage:true,//自动分页
                        autoPlay:false //自动播放
                    });
                    //释放监听
                    watchbanners();
                }
            })
        }
    }
}]);
/*app.directive("slideBox",["$rootScope","$http",function($rootScope, $http){
	return {
		restrict: 'AE',
		template: '<div class="bd"><ul></ul></div><div class="hd"><ul></ul></div>',
		link: function(scope, iElement, iAttrs){
            var watchbanners = scope.$watch("banners",function(newVal,oldVal){               
                if(newVal != undefined){
                    //轮播图
                    var imgList = scope.banners;
                    var liList = "";
                    for(var i=0;i<imgList.length;i++){
                        liList += '<li><a target="_blank" href="'+imgList[i].url+'"><img src="'+imgList[i].imgurl+'" type="'+imgList[i].type+'" id="'+imgList[i].pid+'" title="'+imgList[i].title+'"></a></li>';
                    }
                    $(iElement).find("ul").html(liList);
                    TouchSlide({
                       // slideCell:"#" + iAttrs.id,
                        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                        mainCell:".bd ul",
                        effect:"leftLoop",
                        interTime: 5000,//自动运行间隔
                        delayTime: 1000,//切换效果持续时间
                        autoPage:true,//自动分页
                        autoPlay:true //自动播放
                    });
                    //释放监听
                    watchbanners();
                }                
            })			
		}
	}
}]);*/
/**-拦截器截取处理参数-**/
app.config(function($httpProvider){
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for(name in obj) {
            value = obj[name];

            if(value instanceof Array) {
                for(i=0; i<value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value instanceof Object) {
                for(subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
 });
/**-拦截器处理session-**/
app.factory("httpInterceptor", [ "$q","$rootScope", function($q,$rootScope) {
    return {
        request: function(config){
            config.headers = config.headers || {};
            if (sessionStorage && sessionStorage.getItem("session")) {
                config.headers.session = sessionStorage.getItem("session");
            };
            return config;
        }
    };
}]);
//拦截器
app.config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor');
}]);
/**-login-**/
app.controller('loginController', function($rootScope,$scope,$http,$routeParams,$location,Md5,Base64,Sha1) {
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.btnmsg = "获取验证码";
    $scope.disable = true;
    $scope.sendmsg = function() {
        var smsUrl = $rootScope.URL_ROOT+"/sms/";
        if(isEmpty($scope.user.username)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(checkIsMobile($scope.user.username)){
                var flag = true;
                var time = 60;
                if ($scope.disable==true) {
                    $http.post(smsUrl,$scope.user).success(function(response) {
                        if(response.status="200"){
                            $scope.disable = false;
                            var timer = setInterval(function() {
                                if (time > 0) {
                                    time--;
                                    $scope.$apply(function() {
                                        $scope.btnmsg = time + '秒后再发送';
                                        $scope.disable = false;
                                    });
                                } else {
                                    $scope.$apply(function() {
                                        $scope.btnmsg = "获取验证码";
                                        $scope.disable = true;
                                    });
                                    clearInterval(timer);
                                }
                            }, 1000);
                        }
                        $rootScope.Ui.turnOn('showinfo');
                        $scope.title = "信息提示：";
                        $scope.msg =response.message;
                    });
                } else {
                    //TODO 点击过了
                    flag = false;
                    $rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg ="您已经点击过获取验证码";
             }
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "手机号码格式错误";
        }
    }
    $scope.sendLogin=function(){
        var sendUrl=$rootScope.URL_ROOT+"/user/login/";
        $http.post(sendUrl,$scope.user).success(function(response) {
            if(response.status=="200"){
                var session=response.data.session;
                sessionStorage.setItem("session",session); //把用户的session传递
                $scope.goInvite();
            }else{
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
            }
        });
    }
    $scope.findpsw=function(){
        $location.url("/findpsw");
    }
    $scope.user={};//初始化user
    $scope.user.source="webapp";
    $scope.user.version="1.0";
    $scope.getLogin=function () {
        var loginUrl = $rootScope.URL_ROOT+"/user/login/";
        if(isEmpty($scope.user.username)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(isEmpty($scope.user.psd)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入密码";
            return false;
        }
        /*else{
            // MD5加密当前密码
            console.log($scope.user.psd);
            $scope.user.psd=Md5.hex_md5($scope.user.psd);
            //console.log($scope.user.psd);
        }*/
        if(checkIsMobile($scope.user.username)){
                $http.post(loginUrl,$scope.user).success(function(response) {
                    $rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;
                });
            }else{
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg = "手机号码格式错误";
        }
    }
});
/**-findpsw-**/
app.controller('findpswController', function($rootScope, $scope, $http, $routeParams, $location) {
    //短信验证码倒计时
    $scope.btnmsg = "获取验证码";
    $scope.disable = true;
    $scope.sendmsg = function() {
        var flag = true;
        var time = 60;
        if ($scope.disable) {
            $scope.disable = false;
            var timer = setInterval(function() {
                if (time > 0) {
                    time--;
                    $scope.$apply(function() {
                        $scope.btnmsg = time + '秒后再发送';
                        $scope.disable = false;
                    });
                } else {
                    $scope.$apply(function() {
                        $scope.btnmsg = "获取验证码";
                        $scope.disable = true;
                    });

                    clearInterval(timer);
                }
            }, 1000);

        } else {
            //TODO 点击过了
        }
    }
});
/**-返回上一层*指令-**/
app.directive('back', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
}]);

/**-日历-**/
app.controller('calendarController', ['$rootScope', '$scope', '$http', 'commonService', '$routeParams','$location','$filter',
    function ($rootScope, $scope, $http, service, $routeParams,$location,$filter) {
        setDefaultValue($scope, $rootScope);//初始化参数
        //console.log($location.absUrl());
        var timer=new Date();
        var currentTimer=$filter('date')(timer, "yyyy-MM-dd");
        if(isEmpty($scope.date)){
            $scope.date=currentTimer;
            $routeParams.date= encodeURI($scope.date);
        }
        if(isEmpty($routeParams.date)){
            $routeParams={
                date:$scope.date
            }
        }
        if(isEmpty($routeParams.token)){
            $scope.tokenEmpty();
        }

        $scope.selectMonth = $scope.date;
        $scope.prevsMonth = function (data) {
            $scope.startList(data);
        }
        $scope.curMonth = function (data) {
            $scope.startList(data);
        }
        $scope.nextMonth = function (data) {
            $scope.startList(data);
        }
        $scope.dateFilter = function (date) {
            $scope.startList(date);
        }
        $scope.startList = function (data) {
            var tempDate = data;
            var tempDtr=data.substring(0,7);
            $scope.calStore = data;
            /*if (data.length == 10) {
                var url = $rootScope.URL_ROOT+"/recover/info?date=" + tempDtr;
            } else {
                var url = $rootScope.URL_ROOT+"/recover/info?date=" + data;
            }*/
        }
        $scope.startList($scope.selectMonth);
    }
]);
//指令获取时间接口
//日历
app.directive("jjCalender", ['$compile', function ($compile) {
    return {
        restrict: "A",
        scope: {
            onCurrentMonth: "&",
            onPrevsMonth: "&",
            onNextMonth: "&",
            onOneClick: "&",
            selectMonth: "=",
            store: "="
        },
        replace: true,
        transclude: true,
        templateUrl: "/webapp/m/bk/calender/jj-calender.html",
       /* controller: ["$rootScope", "$scope", function ($rootScope, $scope) {*/
        controller: ["$rootScope", "$scope","$http",'$routeParams','$location', function ($rootScope, $scope,$http,$routeParams,$location) {
            //添加月---年月
            $scope.addMonth = function (num) {
                var curMonth = $scope.selectMonth;
                var curYear = curMonth.substring(0, 4);
                var curMonthNum = curMonth.substring(5, 7);
                curMonthNum = parseFloat(curMonthNum) - 1;
                //当前月的第一天
                var firstDay = new Date(curYear, curMonthNum, 01);
                //年
                var year = firstDay.getFullYear();
                //月
                var month = firstDay.getMonth() + num;
                //计算后日期
                var calDate = new Date(year, month, 1);
                var calMonth = calDate.getMonth() + 1;
                if (calMonth < 10) {
                    calMonth = "0" + calMonth;
                }
                $scope.selectMonth = calDate.getFullYear() + "-" + calMonth;
            }
            //计算天数
            $scope.caculDays = function () {
                /*****/
                //选中月
                var selectMonth = $scope.selectMonth;
                //年
                $scope.year = selectMonth.substring(0, 4);
                //月
                $scope.month = selectMonth.substring(5, 7);
                //当天
                $scope.dayt = selectMonth.substring(8, 10);
                //console.log($scope.dayt);
                var month = parseFloat($scope.month) - 1;
                //选中月的第一天
                var firstDay = new Date($scope.year, month, 01);
                //下一月的第一天
                var nextFirstDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 1);
                //选中月的最后一天
                var lastDay = new Date(nextFirstDay.getTime() - 24 * 60 * 60 * 1000);
                //选中月的第一天周几
                var selDay = firstDay.getDay();
                //获取上一月天数
                var lastDays = [];
                for (var i = selDay; i > 0; i--) {
                    var date = new Date(firstDay.getTime() - 24 * 60 * 60 * 1000 * i);
                    var dateNum = date.getDate();
                    var day = date.getDay();
                    lastDays.push({
                        day: dateNum,
                        classes: "adjacent-month last-month calendar-dow-" + day
                    });
                }
                var curDays = [];
                for (var i = 1, days = lastDay.getDate(); i <= days; i++) {
                    var date = new Date($scope.year, month, i);
                    var daystr = i;
                    if (i < 10) {
                        daystr = "0" + i;
                    }
                    var tmpDateStr = $scope.year + "-" + $scope.month + "-" + daystr;
                    var day = date.getDay();
                    var classes = "calendar-day-" + tmpDateStr + " calendar-dow-" + day;
                    var calMonth = new Date().getMonth() + 1;
                    var calDay = new Date().getDate();
                    if (calMonth < 10) {
                        calMonth = "0" + calMonth;
                    }
                    if (calDay < 10) {
                        calDay = "0" + calDay;
                    }
                    var curDate = new Date().getFullYear() + "-" + calMonth + "-" + calDay;
                    var isToday = false;
                    if (tmpDateStr == ($scope.today || curDate)) {
                        classes += " today";
                        isToday = true;//当天为true
                    }
                    curDays.push({
                        day: i,
                        isToday: isToday,//当天
                        onMonth: true,
                        classes: classes,
                        date: tmpDateStr,
                    });
                }
                $scope.curDays=curDays;
                //获取下一月天数
                var nextDays = [];
                for (var i = 1, lday = nextFirstDay.getDay(); lday > 0 && i <= (7 - lday); i++) {
                    var date = new Date(lastDay.getTime() + 24 * 60 * 60 * 1000 * i);
                    var dateNum = date.getDate();
                    var day = date.getDay();
                    nextDays.push({
                        day: dateNum,
                        classes: "adjacent-month next-month calendar-dow-" + day
                    });
                }
                $scope.baseDays = lastDays.concat(curDays, nextDays);
                /*****/
            }
            //返回的数据接口日期
            var signUrl = $rootScope.URL_ROOT+"/user/qiandao/";
            $scope.signDao=function(){
                $scope.calendar={};
                $scope.calendar.session=decodeURI($routeParams.token);
                $scope.calendar.source="webapp";
                $scope.calendar.version="1.0";
                if($scope.selectMonth.length=='10'){
                    $scope.selectMonth=$scope.selectMonth.substring(0,7);
                    $scope.calendar.getmonth=$scope.selectMonth;
                }else if($scope.selectMonth.length=='7'){
                    $scope.calendar.getmonth=$scope.selectMonth;
                }
                $scope.loading=true;
                $http.post(signUrl,$scope.calendar).success(function(response) {
                    if(response.status=="200"){
                        $scope.loading=false;
                        $scope.daysList=response.data.daylist;
                        $scope.daysSign=response.data.signdays;
                        $scope.points=response.data.points;
                        for(var i=0;i<$scope.daysList.length;i++){
                            $scope.curDays[i].daytype=$scope.daysList[i].daytype;
                            $scope.curDays[i].giftday=$scope.daysList[i].giftday;
                        }
                        if(response.data.signed=='1'){
                            $rootScope.Ui.turnOn('showinfo');
                            $scope.title = "信息提示：";
                            $scope.msg ="签到成功！";
                        }else if(response.data.signed=='2'){

                        }
                    }else if(response.status=="208"){
                        $scope.loading=false;
                        $rootScope.Ui.turnOn('showinfo');
                        $scope.title = "信息提示：";
                        $scope.msg =response.message;
                            //封装函数app返回token
                            $scope.tokenEmpty=function () {
                                $scope.loadURL=function(url){
                                    var iFrame;
                                    iFrame = document.createElement("iframe");
                                    iFrame.setAttribute("src", url);
                                    iFrame.setAttribute("style", "display:none;");
                                    iFrame.setAttribute("height", "0px");
                                    iFrame.setAttribute("width", "0px");
                                    iFrame.setAttribute("frameborder", "0");
                                    document.body.appendChild(iFrame);
                                    // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
                                    iFrame.parentNode.removeChild(iFrame);
                                    iFrame = null;
                                }
                                $scope.signParams=function(){
                                    $scope.loadURL("BKDACTION://sessionError?msg="+$scope.msg);
                                }
                                $scope.signParams();
                            }
                            $scope.tokenEmpty();
                        }
                });
            }
            $scope.signDao();
        }],
        link: function (scope, elem, attrs) {
            scope.daysOfTheWeek = ["日", "一", "二", "三", "四", "五", "六"];
            //上一月
            scope.previousMonth = function () {
                scope.addMonth(-1);
                scope.caculDays();
                scope.signDao();
                scope.activeDate = "";
                scope.onPrevsMonth({
                    data: scope.selectMonth,
                });
            }
            //当前月
            scope.currentMonth = function () {
                scope.activeDate = "";
                scope.signDao();
                scope.onCurrentMonth({
                    data: scope.selectMonth
                });
            }
            //下一月
            scope.nextMonth = function () {
                scope.addMonth(1);
                scope.caculDays();
                scope.signDao();
                scope.activeDate = "";
                scope.onNextMonth({
                    data: scope.selectMonth
                });
            }
            //点击某天
            scope.showOneDay = function (date,daytype,giftday) {
                scope.caculDays();
                scope.signDao();
                scope.activeDate = date;
                if(date == undefined || giftday =='2'|| giftday =='1'){
                    return false;
                }
                if(date!= undefined) {
                    scope.onOneClick({
                        date: date,
                        daytype:daytype,
                        giftday:giftday
                    });
                }
            }
            scope.$watch("store", function (newVal) {
                if (newVal) {
                    scope.caculDays();
                    var cuDays = [];
                    var baseDays = scope.baseDays;
                    for (var j = 0; j < baseDays.length; j++) {
                        var scDays = baseDays[j].date;
                        var dayItem = baseDays[j];
                        for (var i = 0; i < newVal.length; i++) {
                            var dateDay = newVal[i].date;
                            if (dateDay == scDays) {
                                dayItem.isRecover = true;
                                continue;
                            }
                        }
                        cuDays.push(dayItem);
                    }
                    scope.days = cuDays;
                    //console.log(scope.days);
                }
            });
        }
    }
}]);
/**-me我的-**/
app.controller('meController',function ($rootScope,$scope,$http,$routeParams,$location) {
        $scope.colAccount = function () {
            $location.url("/modifypsw");
        }
        $scope.loginClick=function () {
            $location.url("/login");
        }
        $scope.accountSet=function(){
            $location.url("/accountset");
        }
        $scope.quitLogin=function () {
            $location.url("/#");
        }
});
/**-errorController-**/
app.controller('errorController',function ($rootScope,$scope,$http,$routeParams,$location) {
    $scope.errorSession=decodeURI($routeParams.token);
    $scope.homeErrorClick=function () {
        $location.url("/gathering?token="+$scope.errorSession);
    }
});
/**-金服payment-**/
app.controller('payController',function ($rootScope,$scope,$http,$routeParams,$location) {
    $scope.goInvest();
});
/**-文章page-**/
app.controller('pageController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //文章详情接口url
    var pageUrl = $rootScope.URL_ROOT+"/article/show/";
    $scope.pageData={};
    $scope.pageData.source="webapp";
    $scope.pageData.version="1.0";
    $scope.pageData.id=$routeParams.id;
    $scope.loading=true;
    $http.post(pageUrl,$scope.pageData).success(function(response) {
        $scope.loading = false;
        $scope.pageList=response.data[0];
        $("#artitle").html($scope.pageList.content);
        $("#artitle").find("img").addClass("ing");
        $scope.articleList=response.data.articlelist;
    });
});
/**-资讯-**/
app.controller('infoController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //资讯详情接口url
    var InfoUrl=$rootScope.URL_ROOT+"/content/showhtml/";
    $scope.InfoData={};
    $scope.InfoData.source="webapp";
    $scope.InfoData.version="1.0";
    $scope.InfoData.id=$routeParams.id;
    $scope.imgSom=false;
    $scope.imgLoading=true;
    var UiImg=[];
    $http.post(InfoUrl,$scope.InfoData).success(
        function (response) {
            $scope.InfoList=response.data.contentlist;
            $scope.attenList=response.data;
            $scope.ImgList=response.data.imgjson;
            /**-content-**/
            $scope.attenImg=response.data.content;
			if($scope.ImgList.length==0){
				UiImg.push({
					txt:response.data.content
				});
			}else{
				$scope.asImg=$scope.attenImg.split("[UIImageView]");
				var properties = $scope.asImg;
				for (var i = 0; i < properties.length-1; i++) {
					var key = properties[i];
					//UiImg[key]=$scope.ImgList[i].url;
					UiImg.push({
						txt:properties[i],
						url:$scope.ImgList[i].url,
						imagetag:$scope.ImgList[i].imagetag,
						width:$scope.ImgList[i].width,
						height:$scope.ImgList[i].height
					});
				}
			}
            $scope.UiImg=UiImg;
            $scope.imgSom=true;
            $scope.imgLoading=false;
        }
    );
    $scope.attention=function () {
        $location.url("download");
    }
/*$scope.load = function() {
        var Info=document.getElementsByClassName("info-img");
        if(Info==undefined){
            return;
        }else{
            if(!isEmpty(Info)){
                $scope.infoWidth=Info[0].clientWidth;
                for(var g=0;g<$scope.ImgList.length;g++){
                 $scope.widthNum=$scope.ImgList[g].width/$scope.infoWidth;
                 $scope.heightNums=$scope.ImgList[g].height/$scope.widthNum+'px';
                }
            }else{
                return;
            }
        }
    }*/
});
/**-帮助*帮助详情*反馈-**/
app.controller('helpController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //帮助的接口url
    var helpUrl = $rootScope.URL_ROOT+"/help/list/";
    $scope.helpData={};
    $scope.helpData.source="webapp";
    $scope.helpData.version="1.0";
    $scope.loading=true;
    $http.post(helpUrl,$scope.helpData).success(function(response){
        $scope.loading=false;
        //帮助列表数据
        $scope.helpList=response.data;
        for(var j=0;j<response.data.length;j++){
            $scope.articlelist=response.data[j].articlelist;
        }
    });
    //帮助详情接口
    var helpingUrl = $rootScope.URL_ROOT+"/help/show/";
    $scope.helpingData={};
    $scope.helpingData.source="webapp";
    $scope.helpingData.version="1.0";
    $scope.helpingData.id=$routeParams.id;
    $scope.loading=true;
    $http.post(helpingUrl,$scope.helpingData).success(function(response){
        $scope.loading=false;
        //帮助详情数据
        $scope.hpg=response.data[0];
        if(isEmpty(response.data[0])){
            return false;
        }else{
            $("#bxt0").html($scope.hpg.content);
            //tel
            $scope.tels=response.data[0].tel;
            $scope.arts=response.data[0].article;
        }
    });
    var hasFalse=false;
    $scope.hlpSubmit=function(){
        //封装token
        $scope.tokenEmpty=function () {
            $scope.loadURL = function (url) {
                var iFrame;
                iFrame = document.createElement("iframe");
                iFrame.setAttribute("src", url);
                iFrame.setAttribute("style", "display:none;");
                iFrame.setAttribute("height", "0px");
                iFrame.setAttribute("width", "0px");
                iFrame.setAttribute("frameborder", "0");
                document.body.appendChild(iFrame);
                // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
                iFrame.parentNode.removeChild(iFrame);
                iFrame = null;
            }
            $scope.signParams = function () {
                $scope.loadURL("BKDACTION://sessionError");
            }
            $scope.signParams();
        }
        if(isEmpty($routeParams.token)){
            $scope.tokenEmpty();
        }
        //反馈接口
        var tickUrl=$rootScope.URL_ROOT+"/help/fankuiadd/";
        $scope.tickData={};
        $scope.tickData.source="webapp";
        $scope.tickData.version="1.0";
        $scope.tickData.session=decodeURI($routeParams.token);
        var tArea=$("textarea[name='d1']").val();
        if(!isEmpty(tArea)){
            $scope.trm=$.trim(tArea);
            hasFalse=true;
        }else{
            return;
        }
        $scope.tickData.content=$scope.trm;
        $scope.loading=true;
        $http.post(tickUrl,$scope.tickData).success(function(response){
            $scope.loading=false;
            if(response.status=="200"){
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
                $scope.trm=$("textarea[name='d1']").val("");
            }else{
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
                return false;
            }
        });
    }
});
/**-信用卡-**/
app.controller('cardController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    //信用卡接口
    $scope.creMore=true;
    $scope.noMore=false;
    var cardUrl=$rootScope.URL_ROOT+"/creditcard/list/";
    $scope.cardData={};
    $scope.cardData.source="webapp";
    $scope.cardData.version="1.0";
    $scope.cardData.page=0;
    $scope.loading=true;
    $http.post(cardUrl,$scope.cardData).success(function(response){
        $scope.loading=false;
        $scope.creList=response.data[0];
    });
    $scope.cardClick=function(item){
        if(isEmpty($scope.creList.url)){
            return false;
        }else{
            $scope.cdData={};
            $scope.cdData.source="webapp";
            $scope.cdData.version="1.0";
            $scope.cdData.userid=$scope.creList.id;
            $scope.cdData.session=decodeURI($routeParams.token);
            var CrdUrl=$rootScope.URL_ROOT+"/creditcard/addlog/";
            $http.post(CrdUrl,$scope.cdData).success(function (response) {
                //if(response.status=="200"){
                    window.location.href=$scope.creList.url;
                //}
            });
        }
    }

    //加载获取更多
    $scope.creditMore=function () {
        $scope.cardData.page=$scope.cardData.page+1;
        $scope.loading=true;
        $http.post(cardUrl,$scope.cardData).success(function(response){
            $scope.loading=false;
            $scope.creList=$scope.creList.concat(response.data);
            if(response.data.length=='0'){
                $scope.creMore=false;
                $scope.noMore=true;
            }
        });
    }
});
/**-邀请推荐人-**/
app.controller('inviteController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        /*--*/
    if(isEmpty($routeParams.token)){
        $scope.signParams();
    }
    $scope.inviteParams=function(){
       /*$location.absUrl();*/
        $scope.loadURL("BKDACTION://shareClick?"+$scope.vteContent);
    }
    /**-二维码-**/
    $scope.inviteImg=function () {
        $scope.loadURL("BKDACTION://qrCodeClick?"+$scope.vteContent);
    }
    //邀请好友的接口url
    var inviteUrl = $rootScope.URL_ROOT+"/user/invite/";
    $scope.inviteData={};
    $scope.inviteData.session=decodeURI($routeParams.token);
    $scope.inviteData.source="webapp";
    $scope.inviteData.version="1.0";
	$scope.userid=$routeParams.userid;
    $scope.loading=true;
    $http.post(inviteUrl,$scope.inviteData).success(function(response){
        $scope.loading=false;
        if(response.status=="200"){
			$scope.inviteCode=response.data.invite_code;
			$scope.vteUrl="http://m.baikejinrong.com/webapp/m/bk/#/landing?userid="+$scope.userid+"&code="+$scope.inviteCode;
			$scope.inviteData={"title":"【要用钱，找我们】注册赢大奖","content":"诚信、专业、用心的金融服务管家，快来下载神器吧","url":$scope.vteUrl,"code":$scope.inviteCode};
			$scope.vteContent=JSON.stringify($scope.inviteData);
            $scope.inviteList=response.data.userlist;
            //人
            $scope.iNum=response.data.inv_num;
            //奖金
            $scope.mymoney=response.data.mymoney;
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg =response.message;
        }
    });
});
/**-收支明细-**/
app.controller('integralsubController',function ($rootScope,$scope,$http,$routeParams,$location) {
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
     $scope.tokenEmpty();
    }
    $scope.interMore=true;
    $scope.noMore=false;
    //收支明细接口
    var jifenUrl=$rootScope.URL_ROOT+"/user/jifenlist/";
    $scope.jifenData={};
    $scope.jifenData.source="webapp";
    $scope.jifenData.version="1.0";
    $scope.jifenData.page=0;
    $scope.jifenData.session=decodeURI($routeParams.token);
    $scope.loading=true;
    $http.post(jifenUrl,$scope.jifenData).success(function (response) {
        $scope.loading = false;
        if(response.status == "209"){
            $scope.noMore=true;
            $scope.interMore=false;
            return false;
        }else if (response.status == "200") {
            $scope.coupons = response.data.couponlist;
        }else if(response.status == "208"){
            $scope.tokenEmpty();
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = response.message;
            return false;
        }
    });
    //加载获取更多
    $scope.interMore=function () {
        $scope.jifenData.page=$scope.jifenData.page+1;
        $scope.loading=true;
        $http.post(jifenUrl,$scope.jifenData).success(function(response){
            $scope.loading=false;
            $scope.coupons=$scope.coupons.concat(response.data.couponlist);
            if(response.data.couponlist.length=='0'){
                $scope.interMore=false;
                $scope.noMore=true;
            }
        });
    }
});
/**-积分商城-**/
app.controller('integralController',function ($rootScope,$scope,$http,$routeParams,$location) {
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    $scope.interMore=true;
    $scope.noMore=false;
    //兑换详情
    var duiUrl=$rootScope.URL_ROOT+"/user/duihuanlist/";
    $scope.duiData={};
    $scope.duiData.source="webapp";
    $scope.duiData.version="1.0";
    $scope.duiData.page=0;
    $scope.duiData.session=decodeURI($routeParams.token);
    $scope.loading=true;
    $http.post(duiUrl,$scope.duiData).success(function (response) {
        if(response.status=="200"){
            $scope.loading=false;
            $scope.dus=response.data;
        }else if(response.status == "208"){
            $scope.tokenEmpty();
        }else{
            $scope.loading=false;
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg =response.message;
            return false;
        }
    });
    //加载更多
    $scope.dusMore=function(){
        $scope.duiData.page=$scope.duiData.page+1;
        $scope.loading=true;
        $http.post(duiUrl,$scope.duiData).success(function(response){
            $scope.loading=false;
            $scope.dus=$scope.dus.concat(response.data);
            if(response.data.length=='0'){
                $scope.interMore=false;
                $scope.noMore=true;
            }
        });
    }
    //积分商城接口
    var jifenUrl=$rootScope.URL_ROOT+"/user/jifenshangcheng/";
    $scope.jfsData={};
    $scope.jfsData.source="webapp";
    $scope.jfsData.version="1.0";
    $scope.jfsData.page=0;
    $scope.jfsData.session=decodeURI($routeParams.token);
    $scope.loading=true;
    $http.post(jifenUrl,$scope.jfsData).success(function (response) {
        $scope.loading=false;
       if(response.status=="200"){
           //积分值
           $scope.points=response.data.points;
           $scope.shoplist=response.data.shoplist;
       }else{
           $rootScope.Ui.turnOn('showinfo');
           $scope.title = "信息提示：";
           $scope.msg =response.message;
           return false;
       }
    });
    $scope.ralMore=function(){
        $scope.jfsData.page=$scope.jfsData.page+1;
        $scope.loading=true;
        $http.post(jifenUrl,$scope.jfsData).success(function(response){
            $scope.loading=false;
            $scope.shoplist=$scope.shoplist.concat(response.data.shoplist);
            if(response.data.shoplist.length=='0'){
                $scope.interMore=false;
                $scope.noMore=true;
            }
        });
    }
});
//拦截器
app.config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor');
}]);
//积分兑换详情
app.controller('detailsController',function ($rootScope,$scope,$http,$routeParams,$location) {
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    //积分兑换详情
    var detailsUrl=$rootScope.URL_ROOT+"/user/shopshow/";
    $scope.detailsData={};
    $scope.detailsData.source="webapp";
    $scope.detailsData.version="1.0";
    $scope.detailsData.session=decodeURI($routeParams.token);
    $scope.detailsData.id=decodeURI($routeParams.id);
    $scope.loading=true;
    $http.post(detailsUrl,$scope.detailsData).success(function (response) {
        $scope.loading=false;
        if(response.status == '200'){
            $scope.exs=response.data[0];
            $("#det_p2").html($scope.exs.intro);
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg =response.message;
            return false;
        }
    });
    //立即兑换(兑换券)
    $scope.onchange=function () {
        //立即兑换
        var changeUrl=$rootScope.URL_ROOT+"/user/jifenduihuan/";
        $scope.changeData={};
        $scope.changeData.source="webapp";
        $scope.changeData.version="1.0";
        $scope.changeData.session=decodeURI($routeParams.token);
        $scope.changeData.id=decodeURI($routeParams.id);
        $scope.loading=true;
        $http.post(changeUrl,$scope.changeData).success(function (response) {
            $scope.loading=false;
            if(response.status=="200"){
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
                $location.url("/exchange?token="+$routeParams.token+"&id="+$routeParams.id);
            }else{
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
                return false;
            }
        });
    }
    //立即兑换(商品)
    $scope.onExchange=function () {
        $location.url("/address?token="+$routeParams.token+"&id="+$routeParams.id+"&title="+$scope.exs.title);
    }
    var addressUrl=$rootScope.URL_ROOT+"/user/jifenduihuan/";
    $scope.address={};
    $scope.address.source="webapp";
    $scope.address.version="1.0";
    $scope.address.session=decodeURI($routeParams.token);
    $scope.address.id=decodeURI($routeParams.id);
    $scope.addressSubmit=function(){
        //提交
        if(isEmpty($scope.address.consignee_name)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入收货人姓名";
            return false;
        }
        if(isEmpty($scope.address.tel)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(!checkIsMobile($scope.address.tel)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "手机号码格式错误";
            return false;
        }
        var addressArea=$("textarea[name='address']").val();
        if(!isEmpty(addressArea)){
            $scope.trm=$.trim(addressArea);
            hasFalse=true;
        }
        $scope.address.adress=$scope.trm;
        if(isEmpty($scope.address.adress)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请填写收货地址";
            return false;
        }
        $rootScope.loading=true;
        $http.post(addressUrl,$scope.address).success(function (response) {
            $rootScope.loading=false;
            if(response.status=="200"){
                $location.url("/integral?token="+$routeParams.token);
            }else{
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
                return false;
            }
        });
    }

});
/**-下载地址-**/
app.controller('downloadController',function ($rootScope,$scope,$http,$routeParams,$location) {

});
/**-landController-着陆页面-**/
app.controller('landController',function ($rootScope,$scope,$http,$routeParams,$location) {
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.user={};//初始化user
    $scope.user.source="webapp";
    $scope.user.version="1.0";
	$scope.user.userid=$routeParams.userid;
    $scope.user.code=$routeParams.code;
    $scope.btnmsg = "获取验证码";
    $scope.disable = true;
    $scope.packMsg = function() {
        var smsUrl = $rootScope.URL_ROOT+"/sms/";
        if(isEmpty($scope.user.username)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(checkIsMobile($scope.user.username)){
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $http.post(smsUrl,$scope.user).success(function(response) {
                    if(response.status="200"){
                        $scope.disable = false;
                        var timer = setInterval(function() {
                            if (time > 0) {
                                time--;
                                $scope.$apply(function() {
                                    $scope.btnmsg = time + '秒后再发送';
                                    $scope.disable = false;
                                });
                            } else {
                                $scope.$apply(function() {
                                    $scope.btnmsg = "获取验证码";
                                    $scope.disable = true;
                                });
                                clearInterval(timer);
                            }
                        }, 1000);
                    }
                    $rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;
                });
            } else {
                //TODO 点击过了
                flag = false;
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg ="您已经点击过获取验证码";
            }
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "手机号码格式错误";
        }
    }
    $scope.sendPack=function(){
        if(isEmpty($scope.user.username)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(isEmpty($scope.user.sms)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入验证码";
            return false;
        }
        if(checkIsMobile($scope.user.username)){
            var sendUrl=$rootScope.URL_ROOT+"/user/login/";
            $scope.loading=true;
            $http.post(sendUrl,$scope.user).success(function(response) {
                $scope.loading=false;
                if(response.status=="200"){
                    var session=response.data.session;
                    sessionStorage.setItem("session",session); //把用户的session传递
					$rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;
                    //$scope.goInvite();
                    //$location.url("/download");
                }else{
                    $rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;
                }
            });
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "手机号码格式错误";
        }
    }
    /**点击下载app**/
    $scope.groundBack=false;
    $scope.groundCont=false;
    $scope.guide=function () {
        $scope.groundBack=false;
        $scope.groundCont=false;
    }
    $scope.downApp=function () {
        //判断是否是微信里面打开
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            $scope.groundBack=true;
            $scope.groundCont=true;
            return true;
        } else {
            var browser = {
                versions: function() {
                    var u = navigator.userAgent, app = navigator.appVersion;
                    return {//移动终端浏览器版本信息
                        trident: u.indexOf('Trident') > -1, //IE内核
                        presto: u.indexOf('Presto') > -1, //opera内核
                        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                        iPad: u.indexOf('iPad') > -1, //是否iPad
                        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                    };
                }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            }

            if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
                window.location.href="https://itunes.apple.com/cn/app/id1345818084?mt=8";//ios版本的下载地址
                //document.writeln("ios");
            }
            else if (browser.versions.android) {
                window.location.href="http://m.baikejinrong.com/bkd.apk";  //android版本的下载地址
                //document.writeln("android");
            }
            return false;
        }
    }
});

/**-支付页面-**/
app.controller('paysController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    var pyUrl=$rootScope.URL_ROOT+"/pay/main/";
    $scope.pys={};//初始化user
    $scope.pys.source="webapp";
    $scope.pys.version="1.0";
    $scope.pys.session=decodeURI($routeParams.token);
    $scope.loading=true;
    $http.post(pyUrl,$scope.pys).success(function(response) {
        $scope.loading = false;
        $scope.pysAll=response.data;
        $scope.incard=response.data.incard_reg;
        if($scope.incard=='0'){
            $scope.atsPay=false;
            $scope.etsPay=true;
        }else if($scope.incard=='1'){
            $scope.etsPay=false;
            $scope.atsPay=true;
        }
    });
    /**立即收款**/
    $scope.mediate=function () {
        if(isEmpty($scope.amount)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg ="您好输入的金额不能为空";
            return false;
        }else{
            $location.url("/selectpays?token="+$scope.pys.session+"&amount="+$scope.amount);
        }
    }
    /**控制金额**/
    $scope.amountChange=function (ets) {
        if(ets<100){
           $scope.etsPay=true;
           $scope.atsPay=false;
           return false;
        }else if(ets>19999&&$scope.incard=='1'){
            $scope.amount=19999;
            $scope.etsPay=false;
            $scope.atsPay=true;
        }else{
            if($scope.incard=='0'){
                $scope.etsPay=true;
                $scope.atsPay=false;
            }else{
                $scope.etsPay=false;
                $scope.atsPay=true;
            }
        }
    }
});
/**-经纪人认证-经纪人认证信息-**/
app.controller('brokerController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    var brokerUrl=$rootScope.URL_ROOT+"/pay/bankback/";
    $scope.broker={};//初始化user
    $scope.broker.source="webapp";
    $scope.broker.version="1.0";
    $scope.broker.session=decodeURI($routeParams.token);
    $scope.bankError=false;
    /*判断银行卡是否正确*/
    $scope.bankCheck=function(bankNumber){
        if(isEmpty(bankNumber.incard_num)){
            return false;
        }
        if (bankNumber.incard_num.length < 16 || bankNumber.incard_num.length > 19) {
            /*$scope.broker.error="银行卡号长度必须在16到19之间";*/
            return false;
        }
        var num = /^\d*$/;  //全数字
        if (!num.exec(bankNumber.incard_num)) {
            /*$scope.broker.error="银行卡号必须全为数字";*/
            return false;
        }
        //开头6位
        var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
        if (strBin.indexOf(bankNumber.incard_num.substring(0, 2))== -1) {
           /* $scope.broker.error="银行卡号开头6位不符合规范";*/
            return false;
        }
        var lastNum=bankNumber.incard_num.substr(bankNumber.incard_num.length-1,1);//取出最后一位（与luhm进行比较）

        var first15Num=bankNumber.incard_num.substr(0,bankNumber.incard_num.length-1);//前15或18位
        var newArr=new Array();
        for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
            newArr.push(first15Num.substr(i,1));
        }
        var arrJiShu=new Array();  //奇数位*2的积 <9
        var arrJiShu2=new Array(); //奇数位*2的积 >9

        var arrOuShu=new Array();  //偶数位数组
        for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                if(parseInt(newArr[j])*2<9)
                    arrJiShu.push(parseInt(newArr[j])*2);
                else
                    arrJiShu2.push(parseInt(newArr[j])*2);
            }
            else //偶数位
                arrOuShu.push(newArr[j]);
        }

        var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
        for(var h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10);
            jishu_child2.push(parseInt(arrJiShu2[h])/10);
        }

        var sumJiShu=0; //奇数位*2 < 9 的数组之和
        var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
        }

        for(var n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
        }

        for(var p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
        }
        //计算总和
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

        //计算Luhm值
        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
        var luhm= 10-k;

        if(lastNum==luhm){
            $scope.bankError="银行卡号验证通过";
             $scope.loading=true;
             $http.post(brokerUrl,$scope.broker).success(function(response) {
                 $scope.loading = false;
                 $scope.brokerNum=response.data;
                 $scope.bankName=response.data.bankname;
             });
            return true;
        }
        else{
            $scope.bankError=true;
            $scope.bankError="银行卡错误，请检查银行卡号";
            return false;
        }
    }
    var regUrl=$rootScope.URL_ROOT+"/pay/incardreg/";
    $(".check-text .radio_span").click(function() {
        //checkbox
        if (!$(this).hasClass("radio_checked")) {
            $(this).find($("input[type=checkbox]")).prop('checked',true);
        } else {
            $(this).find($("input[type=checkbox]")).prop('checked',false);
        }
        $(this).toggleClass('radio_checked');
        if($("input[name='c1']").attr("checked")=='checked'){
            $scope.brokerCheckBox="0";
        }else{
            $scope.brokerCheckBox="1";
        }
    });
    /**判断持卡人是否填写**/
    $scope.banUerError=false;
    $scope.checkUser=function (baUser) {
        var userNum = /^[A-z]+$|^[\u4E00-\u9FA5]+$/;  //英文或者汉字
        if (!userNum.exec(baUser.family_name)) {
            $scope.banUerError=true;
            $scope.bUerError="持卡人必须为英文或者汉字";
            return false;
        }else{
            $scope.banUerError=false;
            $scope.bUerError="可以使用";
        }
    }
    /**判断手机号是否正确**/
    $scope.phoneError=false;
    $scope.checkPhone=function (ckPhone) {
        if(checkIsMobile(ckPhone.mobile)){
            $scope.phoneError=false;
            $scope.phoneError="手机号码格式正确";
            return  false;
        }else{
            $scope.phoneError=true;
            $scope.phoneError="请检查手机号是否正确";
        }
    }
    /**验证身份证号码**/
    $scope.isCardError=false;
    $scope.checkIsCard=function (isCard) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(reg.test(isCard.id_card) !== false){
            $scope.isCardError=false;
            $scope.isCardError="身份证号格式正确";
            return  false;
        }else{
            $scope.isCardError=true;
            $scope.isCardError="请检查身份证号是否正确";
        }
    }
    /**提交并判断是否内容填写完整**/
    $scope.submitReg=function(){
        if($scope.brokerCheckBox=="1"){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg ="请同意个人信息协议";
            return false;
        }
        if($scope.bUerError=="可以使用"&&$scope.bankError=="银行卡号验证通过"&&$scope.phoneError=="手机号码格式正确"&&$scope.isCardError=="身份证号格式正确"&&$scope.brokerCheckBox=="0") {
            $scope.broker.inbank_code= $scope.brokerNum.bankcode;
            $scope.broker.inbank_name= $scope.brokerNum.bankname;
            $scope.broker.inbank_city= $scope.brokerNum.card_city;
            $scope.broker.card_name= $scope.brokerNum.card_name;
            $scope.broker.inbank_province= $scope.brokerNum.card_province;
            $scope.broker.inbank_type= $scope.brokerNum.card_type;
            $scope.loading=true;
            $http.post(regUrl,$scope.broker).success(function(response) {
                $scope.loading = false;
                if(response.status=="200"){
                    $location.url("/credentials?token="+$scope.broker.session);
                    return false;
                }else if(response.status=="700"){
                    $rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;
                    return false;
                }else if(response.status=="704"){
                    $rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;
                    return false;
                }
            });
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请检查填写完整是否信息";
        }
    }
});
/**-经纪人认证信息-**/
app.controller('credentialsController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    var credentialsUrl=$rootScope.URL_ROOT+"/pay/payinfolist/";
    $scope.credentials={};//初始化
    $scope.credentials.source="webapp";
    $scope.credentials.version="1.0";
    $scope.credentials.session=decodeURI($routeParams.token);
    $scope.loading=true;
    $http.post(credentialsUrl,$scope.credentials).success(function(response) {
        $scope.loading = false;
        $scope.paysInfo=response.data;
        $scope.cardsList=response.data.outcard_list;
        if($scope.cardsList.length=='0'){
            $scope.cardsBase=false;
        }else{
            $scope.cardsBase=true;
        }
    });

});
/**-选择付款银行卡-**/
app.controller('selectPaysController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    $scope.nextStepOne=false;
    $scope.nextStepTwo=true;
    var selectInfoUrl=$rootScope.URL_ROOT+"/pay/payinfo/";
    $scope.selectInfo={};//初始化
    $scope.selectInfo.source="webapp";
    $scope.selectInfo.version="1.0";
    $scope.selectInfo.session=decodeURI($routeParams.token);
    $scope.selectInfo.amount=decodeURI($routeParams.amount);
    $scope.loading=true;
    $http.post(selectInfoUrl,$scope.selectInfo).success(function(response) {
        $scope.loading = false;
        $scope.selectsInfo=response.data;
        $scope.outcard=response.data.outcard_list;
        if($scope.outcard.length=='0'){
            $scope.outPays=false;
        }else{
            $scope.outPays=true;
            $scope.nextStepOne=true;
            $scope.nextStepTwo=false;
        }
        $scope.selectCard=function ($indexs) {
            /*选择银行卡*/
            var $this=$(".paysList ul li .coord"+$indexs);
            if ($this.children(".pys-btn").hasClass("pysIcon")) {
                return false;
            } else {
                $this.children(".pys-btn").addClass("pysIcon");
                $this.parent().siblings("li").find(".pys-btn").removeClass("pysIcon");
            }
        }
    });
    /**下一步**/
    /**支付订单提交**/
    $scope.nextStep=function () {
        var nextThis=$(".paysList ul li");
        for(var i=0;i<nextThis.length;i++){
            $scope.loading=true;
            if ($(".paysList ul li .coord"+i).children(".pys-btn").hasClass("pysIcon")) {
                console.log($scope.outcard[i].num);
                $scope.selectInfo.outcard_num=$scope.outcard[i].num;
            }
        }
        if(isEmpty($scope.selectInfo.outcard_num)){
            return false;
        }else{
            $scope.loading=true;
            window.location.href="https://api.baikejinrong.com/1.0/pay/paysub/index.php?source="+$scope.selectInfo.source+"&version="+$scope.selectInfo.version+"&token="+$scope.selectInfo.session+"&amount="+$scope.selectInfo.amount+"&outcard_num="+$scope.selectInfo.outcard_num;
        }
    }
});
/**-添加支付卡-**/
app.controller('addpaysController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    $scope.isPyError=false;
    /*判断银行卡是否正确*/
    $scope.bankCheck=function(paysCard){
        if(isEmpty(paysCard.card_num)){
            return false;
        }
        if (paysCard.card_num.length < 16 || paysCard.card_num.length > 19) {
            /*$scope.broker.error="银行卡号长度必须在16到19之间";*/
            return false;
        }
        var num = /^\d*$/;  //全数字
        if (!num.exec(paysCard.card_num)) {
            /*$scope.broker.error="银行卡号必须全为数字";*/
            return false;
        }
        //开头6位
        var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
        if (strBin.indexOf(paysCard.card_num.substring(0, 2))== -1) {
            /* $scope.broker.error="银行卡号开头6位不符合规范";*/
            return false;
        }
        var lastNum=paysCard.card_num.substr(paysCard.card_num.length-1,1);//取出最后一位（与luhm进行比较）

        var first15Num=paysCard.card_num.substr(0,paysCard.card_num.length-1);//前15或18位
        var newArr=new Array();
        for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
            newArr.push(first15Num.substr(i,1));
        }
        var arrJiShu=new Array();  //奇数位*2的积 <9
        var arrJiShu2=new Array(); //奇数位*2的积 >9

        var arrOuShu=new Array();  //偶数位数组
        for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                if(parseInt(newArr[j])*2<9)
                    arrJiShu.push(parseInt(newArr[j])*2);
                else
                    arrJiShu2.push(parseInt(newArr[j])*2);
            }
            else //偶数位
                arrOuShu.push(newArr[j]);
        }

        var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
        for(var h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10);
            jishu_child2.push(parseInt(arrJiShu2[h])/10);
        }

        var sumJiShu=0; //奇数位*2 < 9 的数组之和
        var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
        }

        for(var n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
        }

        for(var p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
        }
        //计算总和
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

        //计算Luhm值
        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
        var luhm= 10-k;

        if(lastNum==luhm){
            $scope.isPyError=true;
            $scope.paysError="银行卡号验证通过";
            return true;
        }
        else{
            $scope.isPyError=true;
            $scope.paysError="银行卡错误，请检查银行卡号";
            return false;
        }
    }
    /**验证手机号**/
    $scope.isMobileError=false;
    $scope.mobileCheck=function (mok) {
        if(checkIsMobile(mok.mobile)){
            $scope.isMobileError=true;
            $scope.mobileError="手机号码格式正确";
            return  false;
        }else{
            $scope.isMobileError=true;
            $scope.mobileError="请检查手机号是否正确";
        }
    }
    /**添加银行卡信息完成**/
    var paysCardUrl=$rootScope.URL_ROOT+"/pay/outcardreg/";
    $scope.paysCard={};//初始化
    $scope.paysCard.source="webapp";
    $scope.paysCard.version="1.0";
    $scope.paysCard.session=decodeURI($routeParams.token);
    $scope.paysCard.amount=decodeURI($routeParams.amount);
    $scope.addPays=function () {
        $scope.loading=true;
        $http.post(paysCardUrl,$scope.paysCard).success(function(response) {
            $scope.loading = false;
            if(response.status=="200"){
                if($scope.paysCard.amount=='undefined'){
                    $location.url("/credentials?token="+$scope.paysCard.session);
                }else{
                    $location.url("/selectpays?token="+$scope.paysCard.session+"&amount="+$scope.paysCard.amount);
                }
            }else if(response.status=="700"){
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
                $scope.paysError=response.message;
            }else if(response.status=="900"){
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
            }
        });
    }
});
/**-trading交易详情-**/
app.controller('tradingController',function ($rootScope,$scope,$http,$routeParams,$location) {
    //封装token
    $scope.tokenEmpty=function () {
        $scope.loadURL = function (url) {
            var iFrame;
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", url);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
        $scope.signParams = function () {
            $scope.loadURL("BKDACTION://sessionError");
        }
        $scope.signParams();
    }
    if(isEmpty($routeParams.token)){
        $scope.tokenEmpty();
    }
    /**交易详情**/
    var payInfoUrl=$rootScope.URL_ROOT+"/pay/ordershow/";
    $scope.payInfo={};//初始化
    $scope.payInfo.source="webapp";
    $scope.payInfo.version="1.0";
    $scope.payInfo.session=decodeURI($routeParams.token);
    $scope.payInfo.order_id=decodeURI($routeParams.order_id);//52
    $scope.loading=true;
    $http.post(payInfoUrl,$scope.payInfo).success(function(response) {
        $scope.loading = false;
        $scope.tradList=response.data;
    });
});
/**-tradingRecord交易记录-**/
app.controller('tradRecordController',function ($rootScope,$scope,$http,$routeParams,$location) {
    /**交易记录**/
    var orderUrl=$rootScope.URL_ROOT+"/pay/orderlist/";
    $scope.order={};//初始化
    $scope.order.source="webapp";
    $scope.order.version="1.0";
    $scope.order.session=decodeURI($routeParams.token);
    $scope.order.page=0;
    $scope.order.time_type=1;
    $scope.loading=true;
    $http.post(orderUrl,$scope.order).success(function(response) {
        $scope.loading = false;
        $scope.tradList=response.data;
        $scope.orderTall=response.data.orderlist;
        if($scope.orderTall.length<10){
            $scope.isData=false;
            $scope.noData=true;
        }else{
            $scope.isData=true;
            $scope.noData=false;
        }
    });
    $scope.loadInvestByType=function(type) {
        $scope.order.page=0;
        $scope.order.time_type=type;
        $scope.loading=true;
        $http.post(orderUrl,$scope.order).success(function(response) {
            $scope.loading = false;
            $scope.tradList=response.data;
            $scope.orderTall=response.data.orderlist;
            if($scope.orderTall.length<10){
                $scope.isData=false;
                $scope.noData=true;
            }else{
                $scope.isData=true;
                $scope.noData=false;
            }
        });
    }
    //加载获取更多
    $scope.isDataMore=function () {
        $scope.order.page=$scope.order.page+1;
        $scope.loading=true;
        $http.post(orderUrl,$scope.order).success(function(response){
            $scope.loading=false;
            $scope.tradList=response.data;
            $scope.orderTall=$scope.orderTall.concat(response.data.orderlist);
            if(response.data.orderlist.length=='0'){
                $scope.isData=false;
                $scope.noData=true;
            }
        });
    }
});
/**--guidance--**/
app.controller('guidanceController',function ($rootScope,$scope,$http,$routeParams,$location) {
    $scope.applyFor=function () {
        window.location.href="https://m.baikejinrong.com/webapp/m/bk/guidance/download.html";
    }
    /**-初始化user-**/
    $scope.user={};
    $scope.user.source="webapp";
    $scope.user.version="1.0";
    $scope.textmsg = "获取验证码";
    $scope.disable = true;
    var smsUrl =$rootScope.URL_ROOT+"/sms/";
    $scope.rapMsg = function() {
        if(isEmpty($scope.user.mobile)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(checkIsMobile($scope.user.mobile)){
            $scope.user.username=$scope.user.mobile;
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $http.post(smsUrl,$scope.user).success(function(response) {
                    if(response.status="200"){
                        $scope.disable = false;
                        var timer = setInterval(function() {
                            if (time > 0) {
                                time--;
                                $scope.$apply(function() {
                                    $scope.textmsg = time + '秒后再发送';
                                    $scope.disable = false;
                                });
                            } else {
                                $scope.$apply(function() {
                                    $scope.textmsg = "获取验证码";
                                    $scope.disable = true;
                                });
                                clearInterval(timer);
                            }
                        }, 1000);
                    }
                   /* $rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;*/
                });
            } else {
                //TODO 点击过了
                flag = false;
                /*$rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg ="您已经点击过获取验证码";*/
            }
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "手机号码格式错误";
        }
    }
    /**立即申请**/
    $scope.diaLog=false;
    $scope.modalLog=false;
    /**-关闭红包按钮-**/
    $scope.colserModal=function () {
        $scope.diaLog=false;
        $scope.modalLog=false;
        //$(".close").click(function () {
            WeixinJSBridge.call('closeWindow');
            //this.window.opener=null;//关闭窗口时不出现提示窗口
            //window.close();
        //});
    }
    /**红包跳转**/
    $scope.modalPack=function () {
        window.location.href=$rootScope.SERVER+"/webapp/m/bk/guidance/download.html";
    }
    var vteUrl =$rootScope.URL_ROOT+"/extension/invite_sub/";
    $scope.rapButton=function () {
        var amountNum=/^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
        if(!amountNum.exec($scope.user.amount)==true){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "贷款金额必须为数字";
            return false;
        }
        if(isEmpty($scope.user.amount)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入贷款金额";
            return false;
        }
        if(isEmpty($scope.user.invite_name)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入真实姓名";
            return false;
        }
        var userNameNum=/^[\u4e00-\u9fa5]{0,}$/;
        if(!userNameNum.exec($scope.user.invite_name)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入真实姓名";
            return false;
        }
        if(isEmpty($scope.user.mobile)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        $http.post(vteUrl,$scope.user).success(function(response) {
            if(response.status=="200"){
                $scope.diaLog=true;
                $scope.modalLog=true;
            }else{
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg = response.message;
            }
        });
    }
});
/**--valuation--**/
app.controller('valuationController',function ($rootScope,$scope,$http,$routeParams,$location) {
    $scope.room={};//初始化
    $scope.room.source="webapp";
    $scope.room.version="1.0";
    $scope.textmsg = "获取验证码";
    $scope.disable = true;
    var smsUrl =$rootScope.URL_ROOT+"/sms/";
    $scope.rapMsg = function() {
        if(isEmpty($scope.room.mobile)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(checkIsMobile($scope.room.mobile)){
            $scope.room.username=$scope.room.mobile;
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $http.post(smsUrl,$scope.room).success(function(response) {
                    if(response.status="200"){
                        $scope.disable = false;
                        var timer = setInterval(function() {
                            if (time > 0) {
                                time--;
                                $scope.$apply(function() {
                                    $scope.textmsg = time + '秒后再发送';
                                    $scope.disable = false;
                                });
                            } else {
                                $scope.$apply(function() {
                                    $scope.textmsg = "获取验证码";
                                    $scope.disable = true;
                                });
                                clearInterval(timer);
                            }
                        }, 1000);
                    }
                    /*$rootScope.Ui.turnOn('showinfo');
                    $scope.title = "信息提示：";
                    $scope.msg =response.message;*/
                });
            } else {
                //TODO 点击过了
                flag = false;
               /* $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg ="您已经点击过获取验证码";*/
            }
        }else{
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "手机号码格式错误";
        }
    }
    /**roomName楼盘名称**/
    var roomUrl =$rootScope.URL_ROOT+"/extension/room_name/";
    $scope.roomNameSelect=function ($room) {
        var rmNum=/^[\u4E00-\u9FA5A-Za-z0-9]+$/;
        if(!rmNum.exec($room.room_name)){
            $scope.phoneError=false;
            $scope.phoneError="请检查楼盘名称格式是否正确";
            return  false;
        }else{
            $http({
                method:'POST',
                url:roomUrl,
                data:{
                    room_name:$room.room_name,
                    source:"webapp",
                    version:"1.0",
                },
                headers:{'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
            }).success(function(response) {
                if(response.status=="200"){
                    $scope.romData=response.data;
                    $scope.romDtaShow=true;
                }
            });
        }
    }
    /**选择社区名称**/
    $scope.reference=false;
    $scope.areaStreet=true;
    $scope.room.street="请选择区域街道";
    $scope.romSelectName=function ($trm){
        $scope.reference=true;
        $scope.room.room_name=$scope.romData[$trm].room_name;//小区名称
        $scope.room.room_id=$scope.romData[$trm].room_id;//小区名称
        $scope.address=$scope.romData[$trm].address;//小区位置
        $scope.room.price=$scope.romData[$trm].price;//参考均价
        $scope.room.streetid=$scope.romData[$trm].streetid;//参考均价
        if(isEmpty($scope.romData[$trm].street)){
            $scope.areaStreet=true;
            $scope.room.street="请选择区域街道";
        }else{
            $scope.room.street=$scope.romData[$trm].street;//区域街道
            var myDate= new Date();
            $scope.room.age=myDate.getFullYear()-$scope.romData[$trm].age;//区域街道
            $scope.areaStreet=true;
        }
        $scope.romDtaShow=false;
    }
    /**-选择区域*街道-**/
    var regionUrl =$rootScope.URL_ROOT+"/product/street/";
    $http({
        method:'POST',
        url:regionUrl,
        data:{
            source:"webapp",
            version:"1.0",
        },
        headers:{'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    }).success(function(response) {
        if(response.status=="200"){
            $scope.areaLogs=response.data;
            if(response.data.length==0){
                $scope.areaShow=false;
                $scope.rapidShow=true;
                $(".area_box").slideUp();
                $(".area_box").fadeOut(1000);
                $(".rapid").fadeIn(1000);
            }
        }
    });
    /**选择区域**/
    $scope.selectIndex=function ($indexs) {
        $scope.streets=$scope.areaLogs[$indexs].streetlist;//街道数组
        $scope.reginStreet=$scope.areaLogs[$indexs].area;//区域
        var $this=$(".coord"+$indexs);
        var $that=$("#street"+$indexs);
        for(var i=0;i<$scope.areaLogs.length;i++){
            if($indexs==i){
                $this.show();
                $that.show();
            }else{
                $("#street"+i).hide();
            }
        }
        if ($this.find(".ara_div").children(".are-btn").hasClass("pysIcon")) {
            return false;
        } else {
            $this.find(".ara_div").children(".are-btn").addClass("pysIcon");
            $this.siblings().find(".are-btn").removeClass("pysIcon");
        }
    }
    /**请选择区域与街道**/
    $scope.areaShow=false;
    $scope.rapidShow=true;
    $scope.area=function () {
        $scope.areaShow=true;
        $scope.rapidShow=false;
        $scope.romDtaShow=false;
        $(".rapid").slideUp();
        $(".rapid").fadeOut(1000);
        $(".area_box").fadeIn(1000);
    }
    /**选择街道**/
    $scope.selectStreet=function ($ins) {
        var $trn=$(".street_li"+$ins);
        if ($trn.find(".str_div").children(".are-btn").hasClass("pysIcon")) {
            return false;
        } else {
            $trn.find(".str_div").children(".are-btn").addClass("pysIcon");
            $trn.siblings().find(".are-btn").removeClass("pysIcon");
        }
        //街道名称
        $scope.streetNames=$scope.streets[$ins].street;
        //街道名称ID
        $scope.streetId=$scope.streets[$ins].id;
        if(!isEmpty($scope.streetId)){
            $scope.areaShow=false;
            $scope.rapidShow=true;
            $(".area_box").slideUp();
            $(".area_box").fadeOut(1000);
            $(".rapid").fadeIn(1000);
            $scope.room.street=$scope.reginStreet+$scope.streetNames;//区域+街道
            $scope.address=$scope.reginStreet+$scope.streetNames;
            $scope.room.price=$scope.streets[$ins].street_price;
            $scope.room.streetid=$scope.streets[$ins].id;//街道id
            $scope.reference=true;
        }
    }
    /**房屋面积**/
    /**-redpackets-**/
    $scope.diaLog=false;
    $scope.modalLog=false;
    $scope.freeVal=function () {
        /**楼盘名称**/
        if(isEmpty($scope.room.room_name)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入楼盘名称";
            return false;
        }
        if(isEmpty($scope.room.street)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入楼盘名称";
            return false;
        }
        var spaceNum=/^([1-9][0-9]*)+(.[0-9]{1,2})?$/;//房屋面积必须为数字的正则表达式
        if(!spaceNum.exec($scope.room.area)==true){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "房屋面积必须为数字";
            return false;
        }
        if(isEmpty($scope.room.area)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入房屋面积";
            return false;
        }
        //房龄的正则判断
        var ageNum= /[0-9]/;
        if(!ageNum.exec($scope.room.age)==true){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "房龄必须为数字";
            return false;
        }
        if(isEmpty($scope.room.age)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入房龄年限";
            return false;
        }
        if(isEmpty($scope.room.mobile)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入手机号码";
            return false;
        }
        if(isEmpty($scope.room.code)){
            $rootScope.Ui.turnOn('showinfo');
            $scope.title = "信息提示：";
            $scope.msg = "请输入验证码";
            return false;
        }
        //免费评估
        var resultUrl =$rootScope.URL_ROOT+"/extension/result/";
        $http.post(resultUrl,$scope.room).success(function(response) {
            if(response.status=="200"){
                $scope.diaLog=true;
                $scope.modalLog=true;
                console.log(response);
                $scope.quota=($scope.room.price*$scope.room.area*((70-$scope.room.age)/70))/10000;//评估额度
                $scope.loanable=($scope.room.price*$scope.room.area*((70-$scope.room.age)/70)*0.8)/10000;//贷款可贷额度
            }
        });
    }
    /**链接可贷银行跳转下载页面**/
    $scope.modalPack=function () {
        window.location.href=$rootScope.SERVER+"/webapp/m/bk/guidance/download.html";
    }
    /**-关闭按钮-**/
    $scope.colserModal=function () {
        $scope.diaLog=false;
        $scope.modalLog=false;
        $(".close").click(function () {
            WeixinJSBridge.call('closeWindow');
            //this.window.opener=null;//关闭窗口时不出现提示窗口
            //window.close();
        });
    }

});