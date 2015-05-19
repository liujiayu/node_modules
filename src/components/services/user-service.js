(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = [];
    function UserService() {
      var users = [
        {
          userName: 'admin',
          name: 'super',
          role: 'Super-Admin',
          status: 'Enabled'  
        },
        {
          userName: 'user1',
          name: 'Abbie',
          role: 'UHG Employee',
          status: 'Enabled'  
        },
        {
          userName: 'user2',
          name: 'John',
          role: 'Super-Admin',
          status: 'Disabled'  
        }
      ];

      return {
        getUsers: function() {
          return users;
        },
        deleteUser: function(index) {
          users.splice(index, 1);
        }
      }
    }
})();