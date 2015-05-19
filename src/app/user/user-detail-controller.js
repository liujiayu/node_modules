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
      $scope.saveUser = saveUser;

      function saveUser() {
        $modalInstance.close();
      }
    }

})();