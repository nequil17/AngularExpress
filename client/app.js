var mainApp = angular.module("mainApp", ["ngRoute"]);
mainApp.config(function($routeProvider){
    $routeProvider
    .when('/api/',{
        templateUrl: "../views/characters.html"
    })
    .when('/api/:id',{
        templateUrl: "../views/onechar.html"
    })
    .when('/api/role/:Class',{
        templateUrl: "../views/class.html"
    })
});

mainApp.controller("CharacterController",['$scope', '$http','$location',function($scope,$http,$location) {
        $http.get('http://localhost:3000/api/')
            .then(function(response) {
                $scope.name = response.data
    });
            $scope.getName = function(id) {
            $location.path("/api/" + id)
        };
            $scope.getClass = function(Class) {
            $location.path("/api/role/" + Class)
        };
}]);

mainApp.controller("ClassController",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var role = $routeParams.Class;
    $http.get('http://localhost:3000/api/role/' + role)
    .then(function(response) {
        $scope.role = response.data
    });
}]);

mainApp.controller("SingleController",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var id = $routeParams.id;
    $http.get('http://localhost:3000/api/' + id)
    .then(function(response) {
        $scope.single = response.data
    });
}]);