'use strict';

describe('Controller: PiesCtrl', function () {

  // load the controller's module
  beforeEach(module('pieGenApp'));

  var PiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PiesCtrl = $controller('PiesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
