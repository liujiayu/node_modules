(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api'];
    function UserService($http, api) {
      var postOptions = {
        method: 'POST',
        url: api.user + 'list',
        headers: {
         'Content-Type': 'application/json'
        },
        data: {
          "pagingTool": {
            "currentPage": 1,
            "pageSize": 100
          }
        }
      }

      var options = {
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
          return $http.get(api.user + id);
        },

        addUser: function(user) {
          return $http.post(api.user, user, options);
        },

        updateUser: function(user) {
          return $http.put(api.user, user, options);
        },

        deleteUser: function(id) {
          return $http.delete(api.user + id);
        }
      }
    }
})();