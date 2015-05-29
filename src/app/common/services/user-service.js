(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api'];
    function UserService($http, api) {
      var postOptions = {
        method: 'POST',
        url: api.baseUrl + api.user + 'queryUser',
        headers: {
         'Content-Type': 'application/json'
        },
        data: {
          'loginId': '',
          'pageStart': '0',
          'pageLength': '-1'
        }
      }

      var updateOptions = {
        headers: {
         'Content-Type': 'application/json'
        }
      }


      return {
        getUsers: function() {
          // Get local data
          // return $http.get('../../../assets/data/users.json');
          return $http(postOptions);
        },

        getUser: function(id) {
          return $http.get(api.baseUrl + api.user + 'getUser/' + id);
        },

        addUser: function(newUser) {
          users.push(newUser);
        },

        updateUser: function(user) {
          return $http.put(api.baseUrl + api.user + 'updateUser', user, updateOptions);
        },

        deleteUser: function(id) {
          return $http.delete(api.baseUrl + api.user + 'deleteUser/' + id);
        }
      }
    }
})();