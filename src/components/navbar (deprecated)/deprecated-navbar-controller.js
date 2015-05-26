(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('NavbarCtrl', NavbarCtrl);

    NavbarCtrl.$inject = ['$scope'];
    function NavbarCtrl($scope) {
      $scope.date = new Date();
    }

})();
