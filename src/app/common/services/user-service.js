(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api'];
    function UserService($http, api) {
      var getUsersOptions = {
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


      return {
        getUsers: function() {
          // Get local data
          // return $http.get('../../../assets/data/users.json');
          return $http(getUsersOptions);
        },

        getUser: function(id) {
          return $http.get(api.baseUrl + api.user + 'getUser/' + id);
        },

        addUser: function(newUser) {
          users.push(newUser);
        },

        updateUser: function(id) {

        },

        deleteUser: function(index) {
          users.splice(index, 1);
        }
      }
    }
})();