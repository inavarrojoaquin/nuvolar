'use strict';

/**
 * @ngdoc function
 * @name nuvolarwebApp.controller:SearchusercontrollerCtrl
 * @description
 * # SearchusercontrollerCtrl
 * Controller of the nuvolarwebApp
 */

angular
    .module('nuvolarwebApp')
    .controller('SearchUsersController', SearchUsersController);

SearchUsersController.$inject = ['SearchUserFactory','$location', '$routeParams'];

function SearchUsersController(SearchUserFactory, $location) {
    var searchVm = this;
    searchVm.users = [];
    searchVm.searchUser = searchUser;
    searchVm.userDetails = userDetails;

    function searchUser() {
        SearchUserFactory.getUsers(searchVm.username)
          .then(function(data) {
            searchVm.users = data.items;
          });
    };

   function userDetails(user) {
      $location.path('/details/' + user.login);
   };
}