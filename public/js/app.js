var lostAndFoundApp = angular.module('lostAndFoundApp',
    ['ngRoute',
        'appRoutes',
        'MainController',
        'UserProfileController',
        'PostController',
        'PostFactory',
        'ui.bootstrap',
        'appMaps',
        'PostsController'
    ]);