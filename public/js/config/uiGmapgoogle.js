lostAndFoundApp
    .config(['uiGmapGoogleMapApiProvider',
        function (uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyATCiP7mlshHmtzSt4npaozSthjIMIOwFI',
                v: '3.17',
                libraries: 'places' // Required for SearchBox.
            });
        }]);
