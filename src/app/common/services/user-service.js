(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api'];
    function UserService($http, api) {
      var config = {
        headers: {
         'Content-Type': 'application/json'
        }
      }

      function assembleUserOptions(option) {
        return {
          pagingTool: {
            currentPage: option.pagination.current || 1,
            pageSize: option.pagination.perPage || 10
          },
          queryCriterias: [
            {
              connection: 'and',
              key: 'login_id',
              condition: 'like',
              value: option.search.value || '',
              isValueADigital: false
            }
          ]
        };
      }

      return {
        getUsers: function(queryOption) {
          // Get local data
          // return $http.get('../../../assets/data/users.json');
          return $http.post(api.user + 'list', assembleUserOptions(queryOption));
        },

        getUser: function(id) {
          return $http.get(api.user + id);
        },

        addUser: function(user) {
          return $http.post(api.user, user, config);
        },

        updateUser: function(user) {
          return $http.put(api.user, user, config);
        },

        deleteUser: function(id) {
          return $http.delete(api.user + id);
        }
      }
    }
})();