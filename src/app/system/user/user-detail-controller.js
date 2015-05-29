(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserDetailCtrl', UserDetailCtrl);

    UserDetailCtrl.$inject = ['$scope', '$state', '$stateParams', '$timeout', 'UserService'];
    function UserDetailCtrl($scope, $state, $stateParams, $timeout, UserService) {
      // Scope variables
      $scope.isNewUser = $stateParams.isNewUser;
      $scope.isEditable = $stateParams.isEditable;
      console.log('isNewUser: ', $stateParams.isNewUser);
      console.log('isEditable: ', $stateParams.isEditable);


      // Scope actions
      $scope.addUser = addUser;
      $scope.getUser = getUser;
      $scope.updateUser = updateUser;
      $scope.cancel = cancel;


      // Init
      UserService.getUser($stateParams.userId)
        .then(getUserSuccess, getUserFail);


      // Functions
      function addUser() {
        UserService.addUser($scope.user);
      }

      function getUser(userId) {
        UserService.getUser(userId);
      }

      function updateUser(id) {
        UserService.updateUser(id);
      }

      function cancel() {
        $state.go('user');
      }

      function getUserSuccess(response) {
        $scope.user = response.data.DATA;
        $scope.user.lockStatus = false;
        $scope.user.disabledStatus = false;
        $scope.user.defaultLang = 'English';

        console.log('response: ', response);
        console.log('$scope.user: ', $scope.user);

        // Update value to Uniform.js
        // Used to make sure that uniform.js works with angular by calling it's update method when the angular model value updates.
        $timeout(jQuery.uniform.update, 0);
      }

      function getUserFail(error) {
        console.log(error)
      }
    }

})();