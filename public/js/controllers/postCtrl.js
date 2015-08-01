angular.module('PostController', ['PostFactory',]).controller('PostController',
    function ($scope, PostFactory, $routeParams) {

    $scope.tagline = 'To the moon and back!';

    $scope.getPost = function () {
        console.log($routeParams);
        PostFactory.getPost($routeParams.postId)
            .then(function (data) {
                $scope.post = data;
            });
    };

    $scope.searchItem = function () {
        alert('hi');
    }
});