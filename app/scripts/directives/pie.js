'use strict';

/**
 * @ngdoc directive
 * @name pieGenApp.directive:pie
 * @description
 * # pie
 */
angular.module('pieGenApp')
  .directive('pieChart', function() {
    return {
      template: '<nvd3 options="options" data="data"></nvd3>',
      scope: {
        "slices": '@'
      },
      restrict: 'E',
      controller: 'PieCtrl'
    };
  });