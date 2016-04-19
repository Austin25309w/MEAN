var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: "loginController"
        })
        .when('/dashboard',{
            templateUrl: 'partials/dashboard.html',
            controller: "dashboardController"
        })
        .when('/polls/:id',{
            templateUrl: 'partials/poll.html',
            controller: "pollController"
        })
        .when('/create',{
            templateUrl: 'partials/create.html',
            controller: "pollController"
        })
        .otherwise({
            redirectTo: '/'
        })
});

myApp.factory('userFactory', function($http){
    var factory = {};

    return factory;
});

myApp.factory('pollFactory', function($http){
    var factory = {};

    return factory;
})

myApp.controller('loginController', function($scope,$location,userFactory){
    $scope.create = function(){
        userFactory.create($scope.newUser);
        $location.url('/dashboard');
    };
});

myApp.controller('dashboardController', function($scope,$location,userFactory,pollFactory){
    userFactory.showCurrentUser(function(data){
        $scope.currentUser = data;
    });

    pollFactory.show(function(data){
        $scope.polls = data;
    });

    $scope.showOne = function(poll){
        pollFactory.showOne(poll,function(){
            $location.url('/polls/'+poll._id);
        });
    };

    $scope.create = function(){
        $scope.newPoll.name = $scope.currentUser.name;
        pollFactory.create($scope.newPoll,function(data){
            $scope.polls = data;
        });
    };

    $scope.delete = function(poll){
        pollFactory.delete(poll,function(data){
            $scope.polls = data;
        });
    };
});

myApp.controller('pollController', function($scope,$location,pollFactory){
    pollFactory.showCurrentPoll(function(data){
        $scope.poll = data;
    });

    $scope.vote = function(optionNumber){
        pollFactory.vote(optionNumber,function(data){
            $scope.poll = data;
        });
    };

    $scope.create = function(){
        pollFactory.create($scope.newPoll,function(){
            $location.url('/dashboard')
        });
    }
});