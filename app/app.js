var chApp = angular.module('chApp', ['ngRoute']).config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/', {
            template: '<div>This is main content</div>'
        }).when('/state', {
            template: '<state-page></state-page>'
        }).otherwise('/');
    }
]);



var domLoaded = false,
    loadApp = function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['chApp']);
        });
    };
$(document).ready(function () {
    domLoaded = true;
    if (domLoaded && lessLoaded) {
        loadApp();
    }
});

if (typeof less !== 'undefined') {
    less.pageLoadFinished.then(function () {
        lessLoaded = true;
        if (domLoaded && lessLoaded) {
            loadApp();
        }
    });
} else {
    lessLoaded = true;
}