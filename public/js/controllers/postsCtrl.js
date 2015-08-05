lostAndFoundApp.controller('PostsController',
    ['$scope', 'PostsFactory',
        function ($scope, PostsFactory) {
            PostsFactory.getPosts().then(function (data) {
                $scope.testfactory = data;
            });
        }]);