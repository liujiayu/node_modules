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
      'oc.lazyLoad',
      'smart-table'
    ])
    .config(lazyLoad)
    .config(state)
    .run(run)
    .controller('AppCtrl', AppCtrl);


    state.$inject = ['$stateProvider', '$urlRouterProvider'];
    function state ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tool', {
          url: '/',
          templateUrl: 'app/system/tool/tool.html',
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
          templateUrl: 'app/system/user/user.html',
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
        })
        .state('user-detail', {
          url: '/user/:userId',
          templateUrl: 'app/system/user/user-detail.html',
          controller: 'UserDetailCtrl',
          params: { 
            userId: null, 
            isEditable: null,
            isNewUser: null
          }
        });

      $urlRouterProvider.otherwise('/');
    }
   
    
    run.$inject = ['$rootScope', 'settings', '$state'];
    function run($rootScope, settings, $state) {
      $rootScope.$state = $state;
    }


    /* Metronic: Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
    lazyLoad.$inject = ['$ocLazyLoadProvider']
    function lazyLoad ($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
            // global configs go here
        });
    }


    /* Metronic: Setup App Main Controller */
    AppCtrl.$inject = ['$scope', '$rootScope'];
    function AppCtrl($scope, $rootScope) {
      $scope.$on('$viewContentLoaded', function() {
          Metronic.initComponents(); // init core components
          //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
      });
    }

})();