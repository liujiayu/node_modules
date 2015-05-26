(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('settings', settings);

    settings.$inject = ['$rootScope'];
    function settings ($rootScope) {
        // supported languages
        var settings = {
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
            layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
        };

        $rootScope.settings = settings;

        return settings;
    }
})();