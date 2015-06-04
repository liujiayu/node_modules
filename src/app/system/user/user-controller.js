(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$modal', '$state', 'UserService'];
    function UserCtrl($scope, $modal, $state, UserService) {
      // Scope variables
      $scope.users = [];

      $scope.showColumn1 = true;
      $scope.showColumn2 = true;
      $scope.showColumn3 = true;
      $scope.showColumn4 = true;

      $scope.queryOption = {
        pagination: {
          current: 1,
          total: null,
          perPage: 10,
          maxSize: 5
        },
        search: {
          value: null
        }
      };


      // Scope actions
      $scope.AddUser = AddUser;
      $scope.displayUser = displayUser;
      $scope.editUser = editUser;
      $scope.deleteUser = deleteUser;
      $scope.searchUser = searchUser;
      $scope.AddUserByModal = AddUserByModal;
      $scope.displayUserByModal = displayUserByModal;
      $scope.editUserByModal = editUserByModal;


      // Init
      init();


      // Watcher
      $scope.$watch('queryOption', function() {
        init();
      }, true);


      // Functions
      function init(argument) {
        var total = $scope.queryOption.pagination.total,
            current = $scope.queryOption.pagination.current,
            perPage = $scope.queryOption.pagination.perPage,
            isLastPage = ((perPage * current) >= total);

        UserService.getUsers($scope.queryOption)
          .then(getUserSuccess, errorCallback);

        $scope.userIndex = {
          first: perPage * (current - 1) + 1,
          last: isLastPage ? total : perPage * current,
          total: total
        }
      }

      function AddUser() {
        $state.go('user-detail', { isEditable: true, isNewUser: true });
      }

      function displayUser(user) {
        $state.go('user-detail', { userId: user.id });
      }

      function editUser(user) {
        $state.go('user-detail', { userId: user.id, isEditable: true });
      }

      function deleteUser(id) {
        UserService.deleteUser(id)
          .then(deleteUserSuccess, errorCallback);
      }

      function searchUser(keyword) {
         $scope.queryOption.search.value = keyword;
      }

      function getUserSuccess(response) {
        $scope.users = response.data.DATA;
        $scope.queryOption.pagination.total = response.data.TOTAL_COUNT;

        console.log('response: ', response);
        console.log('$scope.users: ', $scope.users);
      }

      function deleteUserSuccess(response) {
        UserService.getUsers()
          .then(getUserSuccess, errorCallback);
      }

      function errorCallback(error) {
        console.log(error)
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