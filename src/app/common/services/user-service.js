(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = [];
    function UserService() {
        }


      return {
        getUsers: function() {
          return users;
        },

        getUser: function(id) {
          return users[id];
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