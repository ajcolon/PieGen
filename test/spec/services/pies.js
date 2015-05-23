'use strict';

describe('Service: pies', function () {

  // load the service's module
  beforeEach(module('pieGenApp'));

  // instantiate service
  var pies;
  beforeEach(inject(function (_pies_) {
    pies = _pies_;
  }));

  it('should do something', function () {
    expect(!!pies).toBe(true);
  });

});
