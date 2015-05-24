'use strict';

/**
 * @ngdoc service
 * @name pieGenApp.pies
 * @description
 * # pies
 * Factory in the pieGenApp. Handles Requests to the backend
 */
angular.module('pieGenApp')
  .factory('pieData', function($http, AlertMngr, $q) {
    var serverAddr = "https://pie-chart.herokuapp.com/";
    var header = {
      //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      'Content-type': 'application/json'
    };
    var pieService = {
      getPies: function() {
        var req = serverAddr + 'pie_charts/';

        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: req,
          headers: header
        }).success(function(response) {
          deferred.resolve(response);
          AlertMngr.addAlert("Pie List Retrived", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie List could not be Retrieved", "danger");
          deferred.reject;
        })
        return deferred.promise;

      },
      getPie: function(id) {
        var req = serverAddr + 'pie_charts/' + id;

        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: req,
          headers: header
        }).success(function(response) {
          deferred.resolve(response);
          AlertMngr.addAlert("Pie Information Received", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie Information could not be Retrieved", "danger");
          deferred.reject;
        })
        return deferred.promise;
      },
      getSlices: function(id) {
        var req = serverAddr + 'pie_charts/' + id + "/slices/"
        var promise = $http.get(req).then(function(response) {
          return response.data;
        });
        return promise;
      },
      deletePie: function(id) {
        var req = serverAddr + 'pie_charts/' + id;
        var deferred = $q.defer();
        $http({
          method: 'DELETE',
          url: req,
          headers: header
        }).success(function(response) {
          deferred.resolve(response.data);
          AlertMngr.addAlert("Pie Deleted", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie could not be Deleted", "danger");
          deferred.reject;
        })
        return deferred.promise;
      },
      createPie: function(pie) {
        var req = serverAddr + 'pie_charts';
        var jsonString = $.param(pie);
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: req,
          headers: header,
          data: jsonString
        }).success(function(response) {
          deferred.resolve(response);
          AlertMngr.addAlert("Pie Created", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie could not be Created", "danger");
          deferred.reject;
        })
        return deferred.promise;

      },
      updatePie: function(pie) {
        var req = serverAddr + 'pie_charts/' + pie.id;
        var jsonString = $.param(pie);
        var deferred = $q.defer();
        $http({
          method: 'PATCH',
          url: req,
          headers: header,
          data: jsonString
        }).success(function(response) {
          deferred.resolve(response.data);
          AlertMngr.addAlert("Pie Updated", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie could not be Updated", "danger");
          deferred.reject;
        })
        return deferred.promise;
      },
      addSlice: function(pie, slice) {
        var req = serverAddr + 'pie_charts/' + pie.id + "/slices/";
        var jsonString = $.param(slice);
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: req,
          headers: header,
          data: jsonString
        }).success(function(response) {
          deferred.resolve(response);
          AlertMngr.addAlert("Pie Slice Added", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie Slice Could not Be Added", "danger");
          deferred.reject;
        })
        return deferred.promise;
      },
      updateSlice: function(pie, slice) {
        var req = serverAddr + 'pie_charts/' + pie.id + "/slices/";

        var jsonString = $.param(slice);
        var deferred = $q.defer();
        $http({
          method: 'PATCH',
          url: req,
          headers: header,
          data: jsonString
        }).success(function(response) {
          deferred.resolve(response.data);
          AlertMngr.addAlert("Pie Slice Updated", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie Slice Could not Be Updated", "danger");
          deferred.reject;
        })
        return deferred.promise;

      },
      deleteSlice: function(pie, slice) {
        var req = serverAddr + 'pie_charts/' + pie.id + "/slices/" + slice.id;
        var deferred = $q.defer();
        $http({
          method: 'DELETE',
          url: req,
          headers: header
        }).success(function(response) {
          deferred.resolve(response.data);
          AlertMngr.addAlert("Pie Slice Deleted", "success");
        }).error(function(response) {
          AlertMngr.addAlert("Pie Slice Could not Be Deleted", "danger");
          deferred.reject;
        })
        return deferred.promise;
      }
    };
    return pieService;
  });