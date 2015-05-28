(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserModalCtrl', UserModalCtrl);

    UserModalCtrl.$inject = ['$scope', '$modalInstance', 'UserService', 'user'];
    function UserModalCtrl($scope, $modalInstance, UserService, user) {
      // Scope variables
      $scope.welcomeMessage = 'This is user detail';
      $scope.isNewUser = jQuery.isEmptyObject(user);
      $scope.user = user;


      // Scope actions
      $scope.addUser = addUser;
      $scope.updateUser = updateUser;
      $scope.cancelEdit = cancelEdit;


      // Functions
      function addUser() {
        UserService.addUser($scope.user);
        $modalInstance.close();
      }

      function updateUser(id) {
        // Make a post action to update user.
        UserService.updateUser();
        $modalInstance.close($scope.user.id);
      }

      function cancelEdit() {
        $modalInstance.dismiss('cancel');
      }
    }

})();