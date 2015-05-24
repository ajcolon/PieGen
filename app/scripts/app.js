'use strict';

/**
 * @ngdoc overview
 * @name pieGenApp
 * @description
 * # pieGenApp
 *
 * Main module of the application.
 */
angular
  .module('pieGenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3',
    'ui.bootstrap'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newpie', {
        templateUrl: 'views/pie-manager.html',
        controller: 'PieManagerCtrl'
      })
      .when('/pies/:id', {
        templateUrl: 'views/pie-manager.html',
        controller: 'PieManagerCtrl'
      })
      .when('/pies', {
        templateUrl: 'views/pies.html',
        controller: 'PiesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);