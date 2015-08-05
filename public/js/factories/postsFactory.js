lostAndFoundApp.factory('PostsFactory',
    ['$http', '$q',
        function ($http, $q) {

    var socket = io.connect();

    return {
        // call to get all posts
        getPosts: function () {
            var defer = $q.defer();
            $http.get('api/posts/')
            .success(function (data) {
                defer.resolve(data);
            });

            return defer.promise;
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create: function (nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete: function (id) {
            return $http.delete('/api/nerds/' + id);
        }
    }
}]);