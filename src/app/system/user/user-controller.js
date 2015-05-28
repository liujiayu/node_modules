(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$modal', 'UserService', '$state'];
    function UserCtrl($scope, $modal, UserService, $state) {
      // Scope variables
      $scope.users = UserService.getUsers();
      $scope.displayedusers = [].concat($scope.users);
      $scope.showColumn1 = true;
      $scope.showColumn2 = true;
      $scope.showColumn3 = true;
      $scope.showColumn4 = true;
      $scope.showColumn5 = true;
      

      // Scope actions
      $scope.AddUser = AddUser;
      $scope.displayUser = displayUser;
      $scope.editUser = editUser;
      $scope.deleteUser = deleteUser;
      $scope.AddUserByModal = AddUserByModal;
      $scope.displayUserByModal = displayUserByModal;
      $scope.editUserByModal = editUserByModal;


      // Functions
      function AddUser() {
        $state.go('user-detail', { isEditable: true, isNewUser: true });
      }

      function displayUser(user) {
        $state.go('user-detail', { userId: user.id });
      }

      function editUser(user) {
        $state.go('user-detail', { userId: user.id, isEditable: true });
      }

      function deleteUser(index) {
        UserService.deleteUser(index);
      }

      function AddUserByModal(size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/system/user/user-modal.html',
          controller: 'UserModalCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return {};
            }
          }
        });
      }

      function displayUserByModal(user, size) {
        var displayedUser = angular.copy(user);
        displayedUser.readOnly = true;

        var modalInstance = $modal.open({
          templateUrl: 'app/system/user/user-modal.html',
          controller: 'UserModalCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return displayedUser;
            }
          }
        });
      }

      function editUserByModal(user, size) {
        var modalInstance = $modal.open({
          templateUrl: 'app/system/user/user-modal.html',
          controller: 'UserModalCtrl',
          size: size,
          windowClass: 'user-modal',
          resolve: {
            user: function () {
              return angular.copy(user);
            }
          }
        });
      }
    }

})();