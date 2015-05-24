'use strict';

/**
 * @ngdoc function
 * @name pieGenApp.controller:PieManagerCtrl
 * @description
 * # PieManagerCtrl
 * Controller of the pieGenApp
 */
angular.module('pieGenApp')
  .controller('PieManagerCtrl', function($scope, pieData, $routeParams) {
    $scope.isEdit = ($routeParams.id === "newpie") ? false : true;
    $scope.pie = {
      "title": "title",
      "description": "description"
    };
    $scope.slices = [];

    if ($scope.isEdit) {
      pieData.getPie($routeParams.id).then(function(d) {
        $scope.pie = d;
        $scope.loadSlices();
      });
    }

  $scope.loadSlices = function() {
    pieData.getSlices($scope.pie.id).then(function(slices) {
      $scope.slices = slices;
    });
  }

    $scope.addSlice = function(sliceLbl, sliceVal) {
      if (sliceVal === "" || typeof sliceVal === "undefined" || isNaN(sliceVal)) {
        return;
      }

      $scope.newslicelbl = "";
      $scope.newsliceval = "";
      var newSlice = {
        "name": sliceLbl,
        "value": sliceVal
      };

      pieData.addSlice($scope.pie, newSlice).then(function(d) {
        $scope.slices.push({
          "id": d.id,
          "name": d.name,
          "value": d.value
        });
      });

    };

    $scope.updateSliceInfo = function(slice) {
      if (slice.name === "" || typeof slice.value === "undefined" || isNaN(slice.value)) {
        return;
      }

      pieData.updateSlice($scope.pie, slice).then(function(d) {
          $scope.loadSlices();
      });

    };

    $scope.deleteSlice = function(slice) {
      pieData.deleteSlice($scope.pie, slice).then(function(d) {
          $scope.loadSlices();
      });
    };

    $scope.updatePieInfo = function() {
      if ($scope.pie.title === "") {
        return;
      }

      pieData.updatePie($scope.pie).then(function(d) {
        $scope.pie = d;
      });

    };

  });