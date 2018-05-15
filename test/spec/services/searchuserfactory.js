'use strict';

describe('Service: SearchUserFactory', function () {

  // load the service's module
  beforeEach(module('nuvolarwebApp'));

  // instantiate service
  var SearchUserFactory;
  beforeEach(inject(function (_SearchUserFactory_) {
    SearchUserFactory = _SearchUserFactory_;
  }));

  it('should do something', function () {
    expect(!!SearchUserFactory).toBe(true);
  });

});
