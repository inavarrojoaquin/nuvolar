'use strict';

/**
 * @ngdoc function
 * @name nuvolarwebApp.controller:SearchusercontrollerCtrl
 * @description
 * # SearchusercontrollerCtrl
 * Controller of the nuvolarwebApp
 * 
 * It is responsible for search users calling the factory 
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
    searchVm.changeTheme = changeTheme;
    searchVm.username = '';

    // This function call the factory to get all the users that match with "username"
    function searchUser() {
        SearchUserFactory.getUsers(searchVm.username)
          .then(function(data) {
            searchVm.users = data.items;
          });
    };

    // Navigates to details user page
    function userDetails(user) {
       $location.path('/details/' + user.login);
    };

    function changeTheme(colorName) {
      $(document.body).removeClass().toggleClass("theme-"+colorName);
    };
}