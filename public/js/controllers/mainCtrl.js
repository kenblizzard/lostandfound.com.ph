angular.module('lostAndFoundApp').controller('MainController',
    ['$scope', 'uiGmapGoogleMapApi', 'PostFactory',
    function ($scope, uiGmapGoogleMapApi, PostFactory) {        
        PostFactory.getPost(1);
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


        $scope.map = { center: { latitude: 0, longitude: 0 }, zoom: 4 };
        $scope.options = { scrollwheel: false };
        $scope.searchbox = { template: 'searchbox.tpl.html', events: events };
        $scope.tagline = 'To the moon and back!';


        var geocoder = new google.maps.Geocoder();        

        $scope.searchItem = function () {
            alert('hi');
        }
    }]);