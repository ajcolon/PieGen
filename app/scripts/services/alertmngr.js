'use strict';

/**
 * @ngdoc service
 * @name pieGenApp.alertmngr
 * @description
 * # alertmngr
 * Service in the pieGenApp.
 */
angular.module('pieGenApp')
	.factory('AlertMngr', function($rootScope, $timeout) {
		var AlertMngr = {};

		AlertMngr.alerts = [];

		AlertMngr.addAlert = function(msg, type) {

			var alrt = {
				type: type,
				msg: msg
			}
			AlertMngr.alerts.push(alrt);
			$timeout(function() {
				if (AlertMngr.alerts.length > 0) {
					angular.forEach(AlertMngr.alerts, function(value, key) {
						AlertMngr.alerts.splice(key, 1);
					});
				}
			}, 8000);
		};

		return AlertMngr;
	});