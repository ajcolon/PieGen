'use strict';

describe('Directive: alerts', function () {

  // load the directive's module
  beforeEach(module('pieGenApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, AlertMngr) {
    scope = $rootScope.$new();
  }));

  AlertMngr.addAlert("msg","danger");

  it('should show alert inside the element', inject(function ($compile) {
    element = angular.element('<alerts></alerts>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('msg');
  }));
});
