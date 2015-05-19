(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$modal', 'UserService'];
    function UserCtrl($scope, $modal, UserService) {
      // Scope variables
      $scope.welcomeMessage = 'Hello, everyone :)';
      $scope.users = UserService.getUsers();
      
      // Scope actions
      $scope.getUsers = getUsers;
      $scope.getUser = getUser;
      $scope.editUser = editUser;
      $scope.deleteUser = deleteUser;
      $scope.openUserModal = openUserModal;


      function getUsers() {

      }

      function getUser() {
        
      }

      function editUser() {
        
      }

      function deleteUser(index) {
        UserService.deleteUser(index);
      }

      function openUserModal(user, size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/user/user-detail.html',
          controller: 'UserDetailCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return user;
            }
          }
        });

        modalInstance.result.then(function (selectedUser) {
          $scope.selected = selectedUser;
        }, function () {
          //
        });
      };
    }

})();