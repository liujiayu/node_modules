(function() {
  'use strict';

  angular.module('qcs', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tool', {
          url: '/',
          templateUrl: 'app/tool/tool.html',
          controller: 'ToolCtrl'
        })
        .state('user', {
          url: '/user',
          templateUrl: 'app/user/user.html',
          controller: 'UserCtrl'
        });

      $urlRouterProvider.otherwise('/');
    })
  ;
})();