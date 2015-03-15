'use strict';
var myApp = angular.module('myApp', ['oblador.lazytube', 'ngRoute', 'xngClearable']);

    myApp.config(["$routeProvider",
    function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'views/main.html', // dummy example
                controller: 'PhoneListCtrl'
            })
            .when("/about", {
                templateUrl: 'views/about.html'
            })
            .when("/composers", {
                templateUrl: 'views/composers.html',
                controller: 'ComposerCtrl'
            })
            .when("/biblio", {
                templateUrl: 'views/biblio.html'
            })
            .when("/links", {
                templateUrl: 'views/links.html'
            })
            .when("/contact", {
                templateUrl: 'views/contact.html'
            })
            .otherwise({redirectTo: '/'});
    }
 ]);
