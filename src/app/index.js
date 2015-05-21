(function() {
  'use strict';

  angular
    .module('qcs', [
      'ngAnimate', 
      'ngCookies', 
      'ngTouch', 
      'ngSanitize', 
      'ngResource', 
      'ui.router', 
      'ui.bootstrap',
      'oc.lazyLoad'
    ])
    .config(lazyLoad)
    .config(state)
    .run(run);


    /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
    lazyLoad.$inject = ['$ocLazyLoadProvider']
    function lazyLoad ($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
            // global configs go here
        });
    }

    state.$inject = ['$stateProvider', '$urlRouterProvider'];
    function state ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tool', {
          url: '/',
          templateUrl: 'app/tool/tool.html',
          controller: 'ToolCtrl',
          resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'qcs',
                      insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                      files: [] 
                  });
              }]
          }
        })
        .state('user', {
          url: '/user',
          templateUrl: 'app/user/user.html',
          controller: 'UserCtrl',
          resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'qcs',
                      insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                      files: [] 
                  });
              }]
          }
        });

      $urlRouterProvider.otherwise('/');
    }
    
    run.$inject = ['$rootScope', 'settings', '$state'];
    function run($rootScope, settings, $state) {
      $rootScope.$state = $state;
    }

})();