'use strict';

angular.module('qcs', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tools', {
        url: '/',
        templateUrl: 'app/tools/tools.html',
        controller: 'ToolsCtrl'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
