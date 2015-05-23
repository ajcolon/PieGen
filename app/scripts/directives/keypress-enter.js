'use strict';

/**
 * @ngdoc directive
 * @name pieGenApp.directive:keypressEnter
 * @description
 * # keypressEnter
 */
angular.module('pieGenApp')
    .directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });