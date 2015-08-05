lostAndFoundApp.controller('PostController',
   ['$scope', 'PostFactory', 'uiGmapGoogleMapApi', '$routeParams',
    function ($scope, PostFactory, uiGmapGoogleMapApi, $routeParams) {

        uiGmapGoogleMapApi.then(function () {
            console.log('map is ready');
        });

        var events = {
            places_changed: function (searchBox) {
                var place = searchBox.getPlaces();
                if (!place || place == 'undefined' || place.length == 0) {
                    console.log('no place data :(');
                    return;
                }

                $scope.map = {
                    "center": {
                        "latitude": place[0].geometry.location.lat(),
                        "longitude": place[0].geometry.location.lng()
                    },
                    "zoom": 18
                };
                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: place[0].geometry.location.lat(),
                        longitude: place[0].geometry.location.lng()
                    }
                };
            }
        };


        $scope.map = { center: { latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
        $scope.options = { scrollwheel: false };
        $scope.searchbox = { template: 'searchbox.tpl.html', events: events };




        $scope.getPost = function () {
            console.log($routeParams);
            PostFactory.getPost($routeParams.postId)
                .then(function (data) {
                    $scope.post = data;
                });
        };

        $scope.searchItem = function () {
            alert('hi');
        }
    }]);