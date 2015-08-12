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
    ])
    .filter('formatMomentDate', function () {
        return function (val) {
            return moment().diff(val, 'hours') > 24 ? moment().diff(val, 'years') > 1 ? moment(val).format("MMM D YYYY [at] h:mm A") :
                moment(val).format("MMM D [at] h:mm A") : moment(val).fromNow();
        }
    });