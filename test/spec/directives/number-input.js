'use strict';

describe('Directive: numberInput', function () {

  // load the directive's module
  beforeEach(module('pieGenApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should not allow elements to have letters', inject(function ($compile) {
    element = angular.element('<div number-input></div>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
