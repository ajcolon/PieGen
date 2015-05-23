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

		AlertMngr.removeAlert = function(alrt){

			var indx = AlertMngr.alerts.indexOf(alrt);
			if(indx >= 0){
				AlertMngr.alerts.splice(indx,1);
			}
		};

		AlertMngr.addAlert = function(msg, type) {

			var alrt = {
				type: type,
				msg: msg
			}

			AlertMngr.alerts.push(alrt);
			//$timeout(AlertMngr.removeAlert(alrt), 5000);
		};

		return AlertMngr;
	});