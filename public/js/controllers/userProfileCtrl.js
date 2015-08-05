angular.module('lostAndFoundApp').controller('UserProfileController',
    ['$scope', 'UserFactory', '$routeParams',
    function ($scope, UserFactory, $routeParams) {

    UserFactory.getUser($routeParams.username)
    .then(function (data) {
        $scope.currentUser = data;
    });

    console.log($scope.currentUser);
    $scope.tagline = 'To the moon and back!';

    $scope.searchItem = function () {
        alert('hi');
    }
}]);