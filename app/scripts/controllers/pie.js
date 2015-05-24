'use strict';

/**
 * @ngdoc function
 * @name pieGenApp.controller:PieCtrl
 * @description
 * # PieCtrl
 * Controller of the pieGenApp
 */
angular.module('pieGenApp')
    .controller('PieCtrl', function($scope, pieData) {

        console.log("pie loade: " + $scope.chartid);
        $scope.data = [];
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 180,
                x: function(d) {
                    return d.key;
                },
                y: function(d) {
                    return d.y;
                },
                showLabels: false,
                showLegend: false,
                pieLabelsOutside: false,
                noData: "No Pie Data Available",
                color: ["transparent"],
                transitionDuration: 500,
                labelThreshold: 0.01,
                color: ["#363534", "#8A8987", "#4A4948", "#C9C8C5", "#7F7F7D", "#403F3E", "#8C8B89"],
                //color: ["#079DFB", "#A8643F", "#39BF68", "#F2E96B", "#A60F0F", "#403F3E", "#8C8B89"],
                //color: ["#F2385A", "#F5A503", "#E9F1DF", "#4AD9D9", "#36B1BF", "#403F3E", "#8C8B89"],
                tooltipContent: function(key, y, e, graph) {
                    return '<div class="pie-tooltip"><h3 style="background-color: ' + e.color + '">' + key + '</h3>' + '<p>' + y + '</p></div>';
                },
                tooltips: true,
                legend: {
                    margin: {
                        top: 0,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.$watch("slices",
            function(newValue) {

                if (typeof $scope.slices === 'undefined') {
                    return;
                }

                if ($scope.slices.length == 0) {
                    return;
                }

                var slc = JSON.parse($scope.slices);
                if (slc.length > 0) {
                    $scope.data = slc.map(function(itm) {
                        return {
                            key: itm.name,
                            y: itm.value
                        };
                    });
                }
            }
        );
    });