'use strict';

describe('Service: alertmngr', function () {

  // load the service's module
  beforeEach(module('pieGenApp'));

  // instantiate service
  var alertmngr;
  beforeEach(inject(function (_alertmngr_) {
    alertmngr = _alertmngr_;
  }));

  it('should do something', function () {
    expect(!!alertmngr).toBe(true);
  });

  it("should add an element to the alerts",function(){
    alertmngr.addAlert("msg","type");
    expect(alertmngr.alerts.length).toBe(1);
  });

});
