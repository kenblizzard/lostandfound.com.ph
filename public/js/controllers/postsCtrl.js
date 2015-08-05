angular.module('PostsController', ['PostsFactory']).controller('PostsController', function ($scope, PostsFactory) {
    PostsFactory.getPosts().then(function (data) {
        $scope.testfactory = data;
    });
});