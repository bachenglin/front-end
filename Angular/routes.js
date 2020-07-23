var app = angular.module('app',['ngRoute'])

//routing configuration - $routerProvider

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/first-msg',{
        //template:"<strong>This is FIRST message</strong>"
        templateUrl:"msg1.html"
    })
}])

app.controller('message1',['$scope',function(){

    $scope.a = 10,
    $scope.b = 20
}]);

