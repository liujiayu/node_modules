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
      
    }

})();