'use strict';

/**
 * @ngdoc service
 * @name nuvolarwebApp.SearchUserFactory
 * @description
 * # SearchUserFactory
 * Factory in the nuvolarwebApp.
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

    function getUsers(username) {
        return $http.get(githubApiUrl + "search/users?q=" + username + "+type:user")
            .then(requestComplete)
            .catch(requestFailed);
    };

    function getUser(username) {
        return $http.get(githubApiUrl + "users/" + username)
            .then(requestComplete)
            .catch(requestFailed);
    };

    function getRepositories(username) {
        return $http.get(githubApiUrl + "users/" + username + "/repos")
            .then(requestComplete)
            .catch(requestFailed);
    };

    function getFollowers(username) {
        return $http.get(githubApiUrl + "users/" + username + "/followers")
            .then(requestComplete)
            .catch(requestFailed);
    };

    function getFollowings(username) {
        return $http.get(githubApiUrl + "users/" + username + "/following")
            .then(requestComplete)
            .catch(requestFailed);
    };

    function requestComplete(response) {
        return response.data;
    };  

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
