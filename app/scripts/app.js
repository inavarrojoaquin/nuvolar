'use strict';

/**
 * @ngdoc overview
 * @name nuvolarwebApp
 * @description
 * # nuvolarwebApp
 *
 * Main module of the application.
 * Here the app module name is declared and the router is configured to manage the url path
 */
angular
  .module('nuvolarwebApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
       .when('/index', {
        templateUrl:'views/main.html',
        controller:'SearchUsersController',
        controllerAs: 'searchUser'
      })
      .when('/details/:username', {
        templateUrl:'views/userDetails.html',
        controller:'UserDetailsController',
        controllerAs: 'userDetails',
        resolve: {
            user: getUser,
            repositories: getRepositories,
            followers: getFollowers,
            followings: getFollowings
        }
      })
      .otherwise({
        redirectTo: '/index'
      });


    function getUser(SearchUserFactory, $route) {
      var username = $route.current.params.username;
      return SearchUserFactory.getUser(username);;
    };

    function getRepositories(SearchUserFactory, $route) {
      var username = $route.current.params.username;
      return SearchUserFactory.getRepositories(username);
    };

    function getFollowers(SearchUserFactory, $route) {
      var username = $route.current.params.username;
      return SearchUserFactory.getFollowers(username);
    };

    function getFollowings(SearchUserFactory, $route) {
      var username = $route.current.params.username;
      return SearchUserFactory.getFollowings(username);
    };
  });
