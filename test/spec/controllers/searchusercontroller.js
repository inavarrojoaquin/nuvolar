'use strict';

describe('Controller: SearchusercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('nuvolarwebApp'));

  var SearchusercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchusercontrollerCtrl = $controller('SearchusercontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchusercontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
