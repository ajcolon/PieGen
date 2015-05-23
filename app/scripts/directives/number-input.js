'use strict';

/**
 * @ngdoc directive
 * @name pieGenApp.directive:numberInput
 * @description
 * # numberInput
 */
angular.module('pieGenApp')
	.directive('toNumber', function() {
		return {
			require: 'ngModel',
			link: function(scope, elem, attrs, ctrl) {
				ctrl.$parsers.push(function(value) {
					return parseFloat(value || '');
				});
			}
		};
	});