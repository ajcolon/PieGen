'use strict';

describe('Directive: pie', function () {

  // load the directive's module
  beforeEach(module('pieGenApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have an nvd3 element inside', inject(function ($compile) {
    element = angular.element('<pie></pie>');
    element = $compile(element)(scope);
    expect(element.text()).toContain('nvd3');
  }));
});
