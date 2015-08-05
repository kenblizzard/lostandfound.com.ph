angular.module('lostAndFoundApp').factory('PostFactory', ['$http', '$q', function ($http, $q) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/nerds');
        },

        getPost: function (id) {            
            var defer = $q.defer();
            $http.get('api/post/' + id)
            .success(function (data) {                                
                defer.resolve(data);
            });

            return defer.promise;
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

}]);