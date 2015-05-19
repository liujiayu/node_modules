(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', 'UserService'];
    function UserCtrl($scope, UserService) {
      // Scope variables
      $scope.welcomeMessage = 'Hello, everyone :)';
      $scope.users = UserService.getUsers();
      
      // Scope actions
      $scope.getUsers = getUsers;
      $scope.getUser = getUser;
      $scope.editUser = editUser;
      $scope.deleteUser = deleteUser;


      function getUsers() {

      }

      function getUser() {
        
      }

      function editUser() {
        
      }

      function deleteUser(index) {
        UserService.deleteUser(index);
      }
    }

})();