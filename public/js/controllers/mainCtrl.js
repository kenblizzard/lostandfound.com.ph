angular.module('MainController', []).controller('MainController', function($scope) {

    $scope.tagline = 'To the moon and back!';   

    $scope.searchItem = function () {
        alert('hi');
    }
});