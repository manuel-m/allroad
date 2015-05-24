'use strict';

angular.module('allroad', ['drpres',
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'btford.markdown',
    'cfp.hotkeys',
    'angular-md5',
    'LocalStorageModule'
])
    .config(function ($stateProvider,
                      $urlRouterProvider,
                      localStorageServiceProvider,
                      markdownConverterProvider) {

        var doPreLoad = function doPreLoad__($q, TheAppLoad) {
            var dfd = $q.defer();
            TheAppLoad.fetch().then(
                function () {
                    TheAppLoad.localStateLoad();
                    dfd.resolve();
                }
            );
            return dfd.promise;
        };
        localStorageServiceProvider.setPrefix('efficiel');
        markdownConverterProvider.config({
            extensions: ['table']
        });
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'vm',
                resolve: {
                    preload: doPreLoad
                }
            })

        ;

        $urlRouterProvider.otherwise('/');

    });
