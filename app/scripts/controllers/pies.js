'use strict';

/**
 * @ngdoc function
 * @name pieGenApp.controller:PiesCtrl
 * @description
 * # PiesCtrl
 * Controller of the pieGenApp
 */
angular.module('pieGenApp')
  .controller('PiesCtrl', function($scope, pieData, $location) {
    $scope.pies = [];

    $scope.loadPies = function() {
      pieData.getPies().then(function(d) {
        $scope.pies = d;

        angular.forEach($scope.pies, function(value, key) {
          pieData.getSlices(value.id).then(function(dSlices) {
            $scope.pies[key].slices = dSlices;
          });
        }, $scope.pies);

      });
    }
    $scope.loadPies();
    $scope.createPie = function() {

      var pie = {
        "title": "Pie " + $scope.pies.length++,
        "description": "description"
      };
      pieData.createPie(pie).then(function(d) {
        $location.url("/pies/" + d.id);
      });

    };

    $scope.editPie = function(pie) {
      $location.url("/pies/" + pie.id);

    };

    $scope.deleteChart = function(pie) {
      pieData.deletePie(pie.id).then(function(d) {
        $scope.loadPies();
      });
    };
  });