'use strict';

/**
 * @ngdoc function
 * @name nuvolarwebApp.controller:UserdetailscontrollerCtrl
 * @description
 * # UserdetailscontrollerCtrl
 * Controller of the nuvolarwebApp
 */

angular
    .module('nuvolarwebApp')
    .controller('UserDetailsController', UserDetailsController);

UserDetailsController.$inject = ['$location', 'user', 'repositories', 'followers', 'followings'];

function UserDetailsController($location, user, repositories, followers, followings) {

      var userVm = this;
      userVm.user = user;
      userVm.repositories = repositories;
      userVm.followers = followers;
      userVm.followings = followings;
      userVm.back = back;
      
      function back() {
        $location.path('/');
      };
}