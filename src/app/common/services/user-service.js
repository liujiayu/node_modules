(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = [];
    function UserService() {
      var users = [
        {
          id: 0,
          userName: 'admin',
          firstName: 'super',
          lastName: 'cool',
          email: 'super@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 1,
          userName: 'user1',
          firstName: 'Abbie',
          lastName: 'Huang',
          email: 'abbie@logicsolutions.com',
          role: 'UHG Employee',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 2,
          userName: 'user2',
          firstName: 'John',
          lastName: 'Lu',
          email: 'john@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Disabled',
          defaultLanguage: 'English'
        },
        {
          id: 0,
          userName: 'admin',
          firstName: 'super',
          lastName: 'cool',
          email: 'super@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 1,
          userName: 'user1',
          firstName: 'Abbie',
          lastName: 'Huang',
          email: 'abbie@logicsolutions.com',
          role: 'UHG Employee',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 2,
          userName: 'user2',
          firstName: 'John',
          lastName: 'Lu',
          email: 'john@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Disabled',
          defaultLanguage: 'English'
        },
        {
          id: 0,
          userName: 'admin',
          firstName: 'super',
          lastName: 'cool',
          email: 'super@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 1,
          userName: 'user1',
          firstName: 'Abbie',
          lastName: 'Huang',
          email: 'abbie@logicsolutions.com',
          role: 'UHG Employee',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 2,
          userName: 'user2',
          firstName: 'John',
          lastName: 'Lu',
          email: 'john@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Disabled',
          defaultLanguage: 'English'
        },
        {
          id: 0,
          userName: 'admin',
          firstName: 'super',
          lastName: 'cool',
          email: 'super@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 1,
          userName: 'user1',
          firstName: 'Abbie',
          lastName: 'Huang',
          email: 'abbie@logicsolutions.com',
          role: 'UHG Employee',
          lockStatus: 'Unlock',
          disabledStatus: 'Enabled',
          defaultLanguage: 'Simplified Chinese'
        },
        {
          id: 2,
          userName: 'user2',
          firstName: 'John',
          lastName: 'Lu',
          email: 'john@logicsolutions.com',
          role: 'Super-Admin',
          lockStatus: 'Unlock',
          disabledStatus: 'Disabled',
          defaultLanguage: 'English'
        }
      ];


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