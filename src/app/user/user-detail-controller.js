(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserDetailCtrl', UserDetailCtrl);

    UserDetailCtrl.$inject = ['$scope', '$modalInstance', 'user'];
    function UserDetailCtrl($scope, $modalInstance, user) {
      // Scope variables
      $scope.welcomeMessage = 'This is user detail';
      $scope.user = user;

      // Scope actions
      $scope.updateUser = updateUser;
      $scope.cancelEdit = cancelEdit;


      function updateUser() {
        // Make a post action to update user.
        $modalInstance.close();
      }

      function cancelEdit() {
        $modalInstance.dismiss('cancel');
      }
    }

})();