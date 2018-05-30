app.controller('WkIndexController', ['$rootScope', '$scope', '$http', '$routeParams', '$location','commonService',
    function($rootScope, $scope, $http, $routeParams, $location,service) {
        setDefaultValue($scope, $rootScope);
        //console.log(sessionStorage.getItem("session"));
        $scope.vers={};//初始化vers
        $scope.vers.source="webapp";
        $scope.vers.version="1.0";
        $scope.vers.class="1";
        service.loadAction({
            url: $rootScope.URL_ROOT + "/ad/index/",
            data:$scope.vers
        },$scope).success(function(response){
            if(response.status=="200"){
                //轮播图
                $scope.banners = response.data;
            }
        });
    }
]);