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
          userName: 'admin',
          name: 'super',
          role: 'Super-Admin',
          status: 'Enabled'  
        },
        {
          userName: 'admin',
          name: 'super',
          role: 'Super-Admin',
          status: 'Enabled'  
        }
      ];

      return {
        getUsers: function() {
          return users;
        }
      }
    }
})();