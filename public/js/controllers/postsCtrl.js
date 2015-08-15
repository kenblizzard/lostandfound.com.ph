angular.module('lostAndFoundApp')
    .controller('PostsController', ['$scope', 'PostsFactory', '$routeParams',
        function ($scope, PostsFactory, $routeParams) {
            var params = $routeParams.query.trim().replace(/\s{2,}/g, ' ');
            $scope.params = params;
            params = params.replace(/ /g, '|')
            console.log("Params: ", params);
            PostsFactory.getPosts(params).then(function (data) {
                console.log("postsCtrl getPosts data: ", data);
                $scope.data = data;
            });
        }
    ]);