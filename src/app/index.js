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


    var doPreLoad = function doPreLoad__(TheAppLoad) {
      return TheAppLoad.fetch();
    };

    markdownConverterProvider.config({
      extensions: ['table']
    });

    localStorageServiceProvider
      .setPrefix('efficiel.technologie.drpres');

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
      //.state('login', {
      //  url: '/login',
      //  templateUrl: 'app/login/login.html',
      //  controller: 'LoginCtrl',
      //  controllerAs: 'vm',
      //  resolve: {
      //    preload: doPreLoad
      //  }
      //})


    ;

    $urlRouterProvider.otherwise('/');

  });
