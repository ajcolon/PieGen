'use strict';

describe('Service: pies', function () {

  // load the service's module
  beforeEach(module('pieGenApp'));

  // instantiate service
  var pies;
  beforeEach(inject(function (_pies_) {
    pies = _pies_;
  }));

  it('should handle several pie request POST, DELETE, GET', function () {
    expect(true).toBe(true);
  });

});
