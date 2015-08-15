angular.module('lostAndFoundApp')
    .filter('momentDateFormatFilter', function () {
        return function (val) {
            return moment().diff(val, 'hours') > 24 ? moment().diff(val, 'years') > 1 ? moment(val).format("MMM D YYYY [at] h:mm A") :
                moment(val).format("MMM D [at] h:mm A") : moment(val).fromNow();
        }
    });