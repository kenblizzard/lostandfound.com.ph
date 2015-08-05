angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/user/:username', {
            templateUrl: 'views/userProfile.html',
            controller: 'UserProfileController'
        })
        .when('/post/:postId', {
            templateUrl: 'views/post.html',
            controller: 'PostController'
        })
        .when('/posts', {
            templateUrl: 'views/posts.html',
            controller: 'PostsController'
        })
                
    $locationProvider.html5Mode(true);

}]);