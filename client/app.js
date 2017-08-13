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

mainApp.controller("CharacterController",['$scope', '$http','$location',function($scope,$http,$location){
    console.log('i have been got')
        console.log('git clicked')
        $http.get('http://localhost:3000/api/')
            .then(function(response){
                console.log(response.data)
                $scope.name=response.data
    });
            $scope.getName=function(id){
            console.log(id)
            $location.path("/api/" + id)
        };
            $scope.getClass=function(Class){
            console.log(Class)
            $location.path("/api/class/" + Class)
        };
}])
mainApp.controller("SingleController",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
     var id=$routeParams.id;
    $http.get('http://localhost:3000/api/'+id)
        .then(function(response){
        console.log(response.data)
        $scope.single=response.data
        
    });
}]);
mainApp.controller("ClassController",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
     var role=$routeParams.Role;
    $http.get('http://localhost:3000/api/role/'+ Class)
        .then(function(response){
        console.log(response)
        $scope.role=response.data
    });
}]);