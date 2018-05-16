'use strict';

/**
 * @ngdoc function
 * @name nuvolarwebApp.controller:UserdetailscontrollerCtrl
 * @description
 * # UserdetailscontrollerCtrl
 * Controller of the nuvolarwebApp
 * 
 * Here all the details user are ready to use by the respective view
 */

angular
    .module('nuvolarwebApp')
    .controller('UserDetailsController', UserDetailsController);

UserDetailsController.$inject = ['$location', 'user', 'repositories', 'followers', 'followings'];

function UserDetailsController($location, user, repositories, followers, followings) {

      var userDetails = this;
      userDetails.user = user;
      userDetails.repositories = repositories;
      userDetails.followers = followers;
      userDetails.followings = followings;
      userDetails.back = back;
      
      // Nativates to the main page
      function back() {
        $location.path('/');
      };
}