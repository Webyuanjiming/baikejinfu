var app = angular.module('myApp',['infinite-scroll']);
var SERVER_ADDRESS = "";
function GetQueryString(name)
{
   /* var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;*/
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}
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
app.run(function($rootScope) {
    $rootScope.SERVER = SERVER_ADDRESS;
    $rootScope.URL_ROOT = $rootScope.SERVER; //全局地址
    $rootScope.ROOT = $rootScope.SERVER + "/m/bk/";
    $rootScope.IS_LOGIN = false;
});
//百客管理登录首页
app.controller('asideCtrl',function($scope,$http,$rootScope){
    /**登录**/
    var loginUrl=$rootScope.URL_ROOT+"/yang/login/";
    $scope.loginData={};//初始化
    $scope.loginData.source="webapp";
    $scope.loginData.version="1.0";
    $scope.loginData.action="in";
    $scope.inxs=false;
    //登录
    $scope.loginClick=function () {
        $http.post(loginUrl,$scope.loginData).success(function(response) {
            if(response.status=="200"){
                //session
                $scope.session=response.data.session;
                localStorage.setItem("session",$scope.session);
                window.location.href="/bkd-manager/m/bk/main.html";
            }else{
                $scope.inxs=true;
                $scope.msg =response.message;
            }
        });
    }
});
//百客管理后台页面
app.controller('mainCtrl',function($scope,$http,$rootScope){
    //后台首页
    var mainUrl=$rootScope.URL_ROOT+"/yang/main/";
    $scope.mainData={};//初始化
    $scope.mainData.source="webapp";
    $scope.mainData.version="1.0";
    $scope.mainData.session=localStorage.getItem("session");
    if(localStorage.getItem("session")==""||localStorage.getItem("session")=='null'||localStorage.getItem("session")=='undefined'){
        window.location.href="/bkd-manager/m/bk/index.html";
    }
    $http.post(mainUrl,$scope.mainData).success(function(response) {
        if(response.status=="200"){
            //注册用户数+信用卡用户数+公司产品
            $scope.userNum=response.data.user_num;
            $scope.productNum=response.data.product_num;
            $scope.marchNum=response.data.march_num;
        }else if(response.status=="208"){
            window.location.href="/bkd-manager/m/bk/index.html";
        }
    });
    //退出登录
    /**登录**/
    var loginUrl=$rootScope.URL_ROOT+"/yang/login/";
    $scope.loginData={};//初始化
    $scope.loginData.source="webapp";
    $scope.loginData.version="1.0";
    $scope.loginData.action="out";
    $scope.exitLogin=function () {
        $http.post(loginUrl,$scope.loginData).success(function(response) {
            if(response.status=="200"){
                window.location.href="/bkd-manager/m/bk/index.html";
            }
        });
    }
    //返回上一页
    $scope.getHistory=function () {
        window.location.href="/bkd-manager/m/bk/index.html";
    }
    $scope.changeColor=function(id,class1,class2) {
        $("#"+id).on("touchstart",function () {
            $(this).attr("class",class1)
        })
        $("#"+id).on("touchend",function () {
            $(this).attr("class",class2)
        })
    }
    $scope.changeColor("main1","color2","color1");
    $scope.changeColor("main2","color2","color1");
    $scope.changeColor("main3","color2","color1");
    //注册用户
    $scope.mainOneClick=function () {
        window.location.href="/bkd-manager/m/bk/registerUser.html";
    }
    //注册信用卡用户
    $scope.mainTwoClick=function () {
        window.location.href="/bkd-manager/m/bk/creditUser.html";
    }
    //公司产品click
    $scope.mainThreeClick=function () {
        window.location.href="/bkd-manager/m/bk/products.html";
    }
});
//百客公司产品
app.controller('productCtrl',function($scope,$http,$rootScope){
    //返回上一页
    $scope.getHistoryPro=function () {
        window.location.href="/bkd-manager/m/bk/main.html";
    }
    /**产品**/
    var yProductUrl=$rootScope.URL_ROOT+"/yang/product/";
    $scope.yProduct={};//初始化
    $scope.yProduct.source="webapp";
    $scope.yProduct.version="1.0";
    $scope.yProduct.session=localStorage.getItem("session");
    if(localStorage.getItem("session")==""||localStorage.getItem("session")=='null'||localStorage.getItem("session")=='undefined'){
        window.location.href="/bkd-manager/m/bk/index.html";
    }
    $scope.yProduct.page=0;
    setTimeout(
        function () {
            $http.post(yProductUrl,$scope.yProduct).success(function(response) {
                $scope.loading =true;
                if(response.status=="200"){
                    //列表内容
                    $scope.yangList=response.data.product_list;
                    //总数和总人数
                    $scope.bothAll=response.data;
                    //总页数
                    $scope.page_num=response.data.page_num;
                    $scope.loading = false;
                    $(".loads").hide();
                    if(response.data.product_list.length=="0"){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('暂无数据');
                    }
                    if(response.data.page_num=='1'){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('无加载数据');
                        return;
                    }
                }else if(response.status=="208"){
                    window.location.href="/bkd-manager/m/bk/index.html";
                }
            });
        },1000
    );
        $(window).scroll(function () {
            if ($(document).scrollTop() + $(window).height() == $(document).height()) {
                $scope.loadMore = function() {
                    if($scope.yProduct.page<=$scope.page_num){
                        $('.pull_icon').addClass('loading');
                        $('.more span').text('加载中');
                        $scope.yProduct.page=$scope.yProduct.page+1;
                        $scope.loading=true;
                        $http.post(yProductUrl,$scope.yProduct).success(function(response){
                            $scope.loading=false;
                            //列表内容
                            $scope.yangList=$scope.yangList.concat(response.data.product_list);
                            if(response.data.product_list.length=='0'){
                                $('.more i').removeClass('pull_icon flip loading');
                                $('.more span').text('无加载数据')
                                return;
                            }
                        });
                    }else{
                        return false;
                    }
                }
            }
        });
});
//数字变化
app.directive("incrementNumber",[function(){
    return {
        restrict: "A",
        scope:{
            incnum: "&"
        },
        link:function(scope,element,attrs){
            var totalNumber = scope.incnum;
            scope.$watch(totalNumber,function(newVal,oldVal){
                if(newVal != undefined){
                    //原来几位数
                    var diaNum = 0;
                    var numAry = newVal.split(".");
                    if(numAry.length > 1){
                        diaNum = numAry[1].length;
                    }
                    //间隔数
                    var intervalNum = parseFloat((newVal/5).toFixed(diaNum));
                    //自增数
                    var incNumber = 0;
                    function show(){
                        if(incNumber >= newVal){
                            //取消循环
                            clearInterval(intervalFuc);
                        }else{
                            incNumber = incNumber + intervalNum;
                            if(newVal-incNumber<10){
                                incNumber = newVal;
                            }
                            element.text(incNumber);
                        }
                    }
                    var intervalFuc=setInterval(show,100);
                }
            });
        }
    }
}]);

//注册用户
app.controller('registerUserCtrl',function($scope,$http,$rootScope){
    //返回上一页
    $scope.getHistoryOne=function () {
        window.location.href="/bkd-manager/m/bk/main.html";
    }
    /**用户**/
    var listUrl=$rootScope.URL_ROOT+"/yang/user/";
    $scope.listData={};//初始化
    $scope.listData.source="webapp";
    $scope.listData.version="1.0";
    $scope.listData.session=localStorage.getItem("session");
    if(localStorage.getItem("session")==""||localStorage.getItem("session")=='null'||localStorage.getItem("session")=='undefined'){
        window.location.href="/bkd-manager/m/bk/index.html";
    }
    $scope.listData.page=0;
    setTimeout(
        function () {
            $http.post(listUrl,$scope.listData).success(function(response) {
                $scope.loading =true;
                if(response.status=="200"){
                    //数据
                    $scope.userList=response.data.user_list;
                    //总页数
                    $scope.page_num=response.data.page_num;
                    $scope.loading = false;
                    $(".loads").hide();
                    if(response.data.user_list.length=="0"){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('暂无数据');
                    }
                    if(response.data.page_num=='1'){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('无加载数据');
                        return;
                    }
                }else if(response.status=="208"){
                    window.location.href="/bkd-manager/m/bk/index.html";
                }
            });
        },1000
    );
    $(window).scroll(function () {
        if ($(document).scrollTop() + $(window).height() == $(document).height()) {
            $scope.loadMore = function() {
                if($scope.listData.page<=$scope.page_num){
                    $('.pull_icon').addClass('loading');
                    $('.more span').text('加载中');
                    $scope.listData.page=$scope.listData.page+1;
                    $scope.loading=true;
                    $http.post(listUrl,$scope.listData).success(function(response){
                        $scope.loading=false;
                        //列表内容
                        $scope.userList=$scope.userList.concat(response.data.user_list);
                        if(response.data.user_list.length=='0'){
                            $('.more i').removeClass('pull_icon flip loading');
                            $('.more span').text('无加载数据')
                            return;
                        }
                    });
                }else{
                    return false;
                }
            }
        }
    });
    $scope.changeMore=function ($index) {
        $("#main"+$index).on("touchstart",function () {
            $(this).attr("class","color2");
        })
        $("#main"+$index).on("touchend",function () {
            $(this).attr("class","color1")
        })
    }
});
//信用卡用户列表
app.controller('creditUserCtrl',function($scope,$http,$rootScope){
    //返回上一页
    $scope.getHistoryTwo=function () {
        window.location.href="/bkd-manager/m/bk/main.html";
    }
    /**产品**/
    var marchUrl=$rootScope.URL_ROOT+"/yang/march/";
    $scope.marchData={};//初始化
    $scope.marchData.source="webapp";
    $scope.marchData.version="1.0";
    $scope.marchData.session=localStorage.getItem("session");
    if(localStorage.getItem("session")==""||localStorage.getItem("session")=='null'||localStorage.getItem("session")=='undefined'){
        window.location.href="/bkd-manager/m/bk/index.html";
    }
    $scope.marchData.page=0;
    setTimeout(
        function () {
            $http.post(marchUrl,$scope.marchData).success(function(response) {
                $scope.loading =true;
                if(response.status=="200"){
                    //数据
                    $scope.userList=response.data.user_list;
                    //总页数
                    $scope.page_num=response.data.page_num;
                    $scope.loading = false;
                    $(".loads").hide();
                    if(response.data.user_list.length=="0"){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('暂无数据');
                    }
                    if(response.data.page_num=='1'){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('无加载数据');
                        return;
                    }
                }else if(response.status=="208"){
                    window.location.href="/bkd-manager/m/bk/index.html";
                }
            });
        },1000
    );
    $(window).scroll(function () {
        if ($(document).scrollTop() + $(window).height() == $(document).height()) {
            $scope.loadMore = function() {
                if($scope.marchData.page<=$scope.page_num){
                    $('.pull_icon').addClass('loading');
                    $('.more span').text('加载中');
                    $scope.marchData.page=$scope.marchData.page+1;
                    $scope.loading=true;
                    $http.post(marchUrl,$scope.marchData).success(function(response){
                        $scope.loading=false;
                        //列表内容
                        $scope.userList=$scope.userList.concat(response.data.user_list);
                        if(response.data.user_list.length=='0'){
                            $('.more i').removeClass('pull_icon flip loading');
                            $('.more span').text('无加载数据')
                            return;
                        }
                    });
                }else{
                    return false;
                }
            }
        }
    });
    $scope.changeMore=function ($index) {
        $("#main"+$index).on("touchstart",function () {
            $(this).attr("class","color2");
        })
        $("#main"+$index).on("touchend",function () {
            $(this).attr("class","color1")
        })
    }
});
//信用卡用户详情列表
app.controller('creditingCtrl',function($scope,$http,$rootScope){
    //返回上一页
    $scope.getHistoryTw=function () {
        window.location.href="/bkd-manager/m/bk/creditUser.html";
    }
    /**产品**/
    var creditUrl=$rootScope.URL_ROOT+"/yang/march_order/";
    $scope.creditData={};//初始化
    $scope.creditData.source="webapp";
    $scope.creditData.version="1.0";
    $scope.creditData.session=localStorage.getItem("session");
    if(localStorage.getItem("session")==""||localStorage.getItem("session")=='null'||localStorage.getItem("session")=='undefined'){
        window.location.href="/bkd-manager/m/bk/index.html";
    }
    $scope.creditData.marchid=GetQueryString("marchid");
    $scope.creditData.amount=GetQueryString("amount");
    $scope.creditData.username=GetQueryString("username");
    $scope.creditData.true_name=GetQueryString("true_name");
/*    $scope.creditData.true_name=decodeURI(GetQueryString("true_name"));*/
    $scope.creditData.page=0;
    setTimeout(
        function () {
            $http.post(creditUrl,$scope.creditData).success(function(response) {
                $scope.loading =true;
                if(response.status=="200"){
                    //数据
                    $scope.orderList=response.data.order_list;
                    //总页数
                    $scope.page_num=response.data.page_num;
                    $scope.loading = false;
                    $(".loads").hide();
                    if(response.data.order_list.length=="0"){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('暂无数据');
                    }
                    if(response.data.page_num=='1'){
                        $('.more i').removeClass('pull_icon flip loading');
                        $('.more span').text('无加载数据');
                        return;
                    }
                }else if(response.status=="208"){
                    window.location.href="/bkd-manager/m/bk/index.html";
                }
            });
        },1000
    );
    $(window).scroll(function () {
        if ($(document).scrollTop() + $(window).height() == $(document).height()) {
            $scope.loadMore = function() {
                if($scope.marchData.page<=$scope.page_num){
                    $('.pull_icon').addClass('loading');
                    $('.more span').text('加载中');
                    $scope.marchData.page=$scope.marchData.page+1;
                    $scope.loading=true;
                    $http.post(marchUrl,$scope.marchData).success(function(response){
                        $scope.loading=false;
                        //列表内容
                        $scope.userList=$scope.userList.concat(response.data.user_list);
                        if(response.data.user_list.length=='0'){
                            $('.more i').removeClass('pull_icon flip loading');
                            $('.more span').text('无加载数据')
                            return;
                        }
                    });
                }else{
                    return false;
                }
            }
        }
    });
    $scope.changeMore=function ($index) {
        $("#main"+$index).on("touchstart",function () {
            $(this).attr("class","color2");
        })
        $("#main"+$index).on("touchend",function () {
            $(this).attr("class","color1")
        })
    }
});


