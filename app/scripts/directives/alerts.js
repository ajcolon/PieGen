'use strict';

/**
 * @ngdoc directive
 * @name pieGenApp.directive:alerts
 * @description
 * # alerts
 */
angular.module('pieGenApp')
	.directive('alertController', function() {
		return {
			template: '<alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</alert>',
			restrict: 'E',
			controller: function($scope, AlertMngr) {
				$scope.alerts = AlertMngr.alerts;

				$scope.closeAlert = function(index) {
					AlertMngr.alerts.splice(index, 1);
				};
			}
		};
	});