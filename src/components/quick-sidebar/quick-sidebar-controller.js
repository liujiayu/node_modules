(function() {
  'use strict';

  angular
    .module('qcs')
    .controller('QuickSidebarCtrl', function ($scope) {
      $scope.$on('$includeContentLoaded', function() {
        setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar        
        }, 2000);
        console.log('QuickSidebarCtrl initialized.')
      });
  });

})();