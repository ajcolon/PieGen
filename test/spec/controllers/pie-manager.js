'use strict';

describe('Controller: PieManagerCtrl', function () {

  // load the controller's module
  beforeEach(module('pieGenApp'));

  var PieManagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PieManagerCtrl = $controller('PieManagerCtrl', {
      $scope: scope
    });
  }));

  it('should have a default pie value', function () {
    expect(scope.pie).toBe({
      "title": "title",
      "description": "description"
    });
  });
});
