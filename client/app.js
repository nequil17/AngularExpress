var mainApp = angular.module("mainApp", ["ngRoute"]);
mainApp.config(function($routeProvider){
    $routeProvider
    .when('/api/',{
        templateUrl: "../views/characters.html"
    })
    .when('/api/:id',{
        templateUrl: "../views/class.html"
    })
    .when('/api/role/:Class',{
        templateUrl: "../views/onechar.html"
    })
});

mainApp.controller("CharacterController",['$scope', '$http','$location',function($scope,$http,$location) {
        $http.get('http://localhost:3000/api/')
            .then(function(response) {
                $scope.name=response.data
    });
            $scope.getName=function(id) {
            $location.path("/api/" + id)
        };
            $scope.getClass=function(Class) {
            $location.path("/api/class/" + Class)
        };
}]);

mainApp.controller("ClassController",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var role=$routeParams.Class;
    $http.get('http://localhost:3000/api/role/' + Class)
    .then(function(response) {
        $scope.class=response.data
    });
}]);

mainApp.controller("SingleController",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var id = $routeParams.id;
    $http.get('http://localhost:3000/api/' + id)
    .then(function(response) {
        $scope.single = response.data
    });
}]);