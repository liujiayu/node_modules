(function() {
  'use strict';

  angular
  	.module('qcs')
    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope'];
  	function UserCtrl($scope) {
      $scope.welcomeMessage = 'Hello, everyone :)';
    }

})();