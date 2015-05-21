(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserDetailCtrl', UserDetailCtrl);

    UserDetailCtrl.$inject = ['$scope', '$modalInstance', 'UserService', 'user'];
    function UserDetailCtrl($scope, $modalInstance, UserService, user) {
      // Scope variables
      $scope.welcomeMessage = 'This is user detail';
      $scope.user = user;

      // Scope actions
      $scope.updateUser = updateUser;
      $scope.cancelEdit = cancelEdit;


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