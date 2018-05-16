'use strict';

/**
 * @ngdoc service
 * @name nuvolarwebApp.SearchUserFactory
 * @description
 * # SearchUserFactory
 * Factory in the nuvolarwebApp.
 * 
 * Here the calls to the Github API are difined!
 */

angular
    .module('nuvolarwebApp')
    .factory('SearchUserFactory', SearchUserFactory);

SearchUserFactory.$inject = ['$q', '$http', '$location'];

function SearchUserFactory($q, $http, $location) {
    var githubApiUrl = 'https://api.github.com/';
    var service = {
        getUsers: getUsers,
        getUser: getUser,
        getRepositories: getRepositories,
        getFollowers: getFollowers,
        getFollowings: getFollowings,
    };

    return service;

    // This function returns all the users that match with username
    function getUsers(username) {
        return $http.get(githubApiUrl + "search/users?q=" + username + "+type:user")
            .then(requestComplete)
            .catch(requestFailed);
    };

    // This function returns a users that match with username
    function getUser(username) {
        return $http.get(githubApiUrl + "users/" + username)
            .then(requestComplete)
            .catch(requestFailed);
    };

    // This function returns the users's repos
    function getRepositories(username) {
        return $http.get(githubApiUrl + "users/" + username + "/repos")
            .then(requestComplete)
            .catch(requestFailed);
    };

    // This function returns the users's followers
    function getFollowers(username) {
        return $http.get(githubApiUrl + "users/" + username + "/followers")
            .then(requestComplete)
            .catch(requestFailed);
    };

    // This function returns the users folowed by a particular username
    function getFollowings(username) {
        return $http.get(githubApiUrl + "users/" + username + "/following")
            .then(requestComplete)
            .catch(requestFailed);
    };

    // This function returns a success data
    function requestComplete(response) {
        return response.data;
    };  

    // This function returns an error message
    function requestFailed(e) {
        var newMessage = 'XHR Failed'
        if (e.data && e.data.description) {
          newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        console.log(newMessage);
        return $q.reject(e);
    };
};
