var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/table.html',
            controller: "loginController"
        })
        .when('/exercise/:name',{
            templateUrl: 'partials/show.html',
            controller: "showController"
        })
        .when('/data/:name',{
            templateUrl: 'partials/data.html',
            controller: "dataController"
        })
        // .when('/create',{
        //     templateUrl: 'partials/create.html',
        //     controller: "createController"
        // })
        .otherwise({
            redirectTo: '/'
        })
});

myApp.factory('userFactory', function($http){
    var factory = {};


    return factory;
});

myApp.factory('liftFactory', function($http){
    var factory = {};

    factory.show = function(callback){
        $http.get('/lifts').success(function(data){
            factory.lifts = data;
            callback(factory.lifts);
        });
    };

    factory.showOne = function(name,callback){
        $http.get('/lifts/'+name).success(function(data){
            factory.lift = data;
            callback(factory.lift);
        });
    };

    return factory;
})

myApp.controller('loginController', function($scope,$location,userFactory,liftFactory){
    liftFactory.show(function(data){
        $scope.lifts = data;
    })


    $scope.login = function(){
        if(!$scope.newUser)
            alert("Name cannot be blank")
        else{
            userFactory.create($scope.newUser,function(){
                $location.url('/dashboard');
            });
        }
    };
});

// myApp.controller('dashboardController', function($scope,$location,userFactory,liftFactory){
//     userFactory.showCurrentUser(function(data){
//         $scope.currentUser = data;
//         if(!data.name)
//             $location.url('/');
//     });

    

//     $scope.logout = function(){
//         userFactory.logout(function(data){
//             $scope.currentUser = data;
//             $location.url('/');
//         })
//     }
// });

myApp.controller('showController', function($scope,$location,liftFactory,userFactory,$route){
    // userFactory.showCurrentUser(function(data){
    //     $scope.currentUser = data;
    //     if(!data.name)
    //         $location.url('/');
    // });

    liftFactory.showOne($route.current.params,function(data){
        $scope.lift = data;
        $scope.lift.other_muscles = $scope.lift.other_muscles.split(", ");
    })

});

// myApp.controller('createController', function($scope,$location,pollFactory,userFactory){
//     userFactory.showCurrentUser(function(data){
//         $scope.currentUser = data;
//         if(!data.name)
//             $location.url('/');
//     });

    
// })