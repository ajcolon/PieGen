'use strict';

/**
 * @ngdoc service
 * @name pieGenApp.pies
 * @description
 * # pies
 * Factory in the pieGenApp. Handles Requests to the backend
 */
angular.module('pieGenApp')
  .factory('pieData', function($http, AlertMngr) {
    var serverAddr = "https://pie-chart.herokuapp.com/";
    var pieService = {
      getPies: function() {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(serverAddr + 'pie_charts').then(function(response) {
          AlertMngr.addAlert("Pie List Retrieved", "success");
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      },
      getPie: function(id) {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(serverAddr + 'pie_charts/' + id).then(function(response) {
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      },
      getSlices: function(id) {
        var req = serverAddr + 'pie_charts/' + id + "/slices/"
        var promise = $http.get(req).then(function(response) {
          return response.data;
        });
        return promise;
      },
      deletePie: function(id) {
        var req = serverAddr + 'pie_charts/' + id
        var header = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        var promise = $http({
          method: 'DELETE',
          url: req,
          headers: header
        }).then(function(response) {
          AlertMngr.addAlert("Pie Deleted", "success");
          return response.data;
        });

        return promise;
      },
      createPie: function(pie) {
        var req = serverAddr + 'pie_charts';
        var header = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        var jsonString = $.param(pie);
        var promise = $http({
          method: 'POST',
          url: req,
          headers: header,
          data: jsonString
        }).then(function(response) {
          AlertMngr.addAlert("Pie Created", "success");
          return response.data;
        });
        return promise;
      },
      updatePie: function(pie) {
        var req = serverAddr + 'pie_charts/' + pie.id;
        var header = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        var jsonString = $.param(pie);
        var promise = $http({
          method: 'PATCH',
          url: req,
          headers: header,
          data: jsonString
        }).then(function(response) {
          AlertMngr.addAlert("Pie Information Updated", "success");
          return response.data;
        });
        return promise;
      },
      addSlice: function(pie, slice) {
        var req = serverAddr + 'pie_charts/' + pie.id + "/slices/";
        var header = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        var jsonString = $.param(slice);
        var promise = $http({
          method: 'POST',
          url: req,
          headers: header,
          data: jsonString
        }).then(function(response) {
          AlertMngr.addAlert("Pie Slice Added", "success");
          return response.data;
        });
        return promise;
      },
      updateSlice: function(pie, slice) {
        var req = serverAddr + 'pie_charts/' + pie.id + "/slices/";
        var header = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        var jsonString = $.param(slice);
        var promise = $http({
          method: 'PATCH',
          url: req,
          headers: header,
          data: jsonString
        }).then(function(response) {
          AlertMngr.addAlert("Pie Slice Updated", "success");
          return response.data;
        });
        return promise;
      },
      deleteSlice: function(pie, slice) {
        var req = serverAddr + 'pie_charts/' + pie.id + "/slices/" + slice.id;
        var header = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        var promise = $http({
          method: 'DELETE',
          url: req,
          headers: header
        }).then(function(response) {
          AlertMngr.addAlert("Pie Slice Deleted", "success");
          return response.data;
        });
        return promise;
      }
    };
    return pieService;
  });