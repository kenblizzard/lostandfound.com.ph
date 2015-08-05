angular.module('PostsController', ['PostsFactory']).controller('PostsController', function ($scope, PostsFactory) {
    $scope.regine = "hello";
    $scope.click = function () {
        alert("hello kenneth ;)");
    }
      PostsFactory.getPosts().then(function (data) {
         $scope.testfactory = data;
    });
});