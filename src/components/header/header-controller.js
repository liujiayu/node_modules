(function() {
  'use strict';

  /* Setup Layout Part - Header */
  angular
    .module('qcs')
    .controller('HeaderCtrl', ['$scope', function($scope) {
      $scope.$on('$includeContentLoaded', function() {
          Layout.initHeader(); // init header
          console.log('HeaderCtrl initialized.')
      });
  }]);

})();
