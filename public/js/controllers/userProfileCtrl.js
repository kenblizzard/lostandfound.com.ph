angular.module('UserProfileController', ['UserFactory','ui.bootstrap']).controller('UserProfileController', function ($scope, UserFactory,$routeParams) {

    UserFactory.getUser($routeParams.username)
    .then(function (data) {
        $scope.currentUser = data;
    });

    console.log($scope.currentUser);
    $scope.tagline = 'To the moon and back!';

    $scope.searchItem = function () {
        alert('hi');
    }
});