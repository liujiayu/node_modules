(function() {
  'use strict';

  angular
    .module('qcs')
    .directive('thSorting', thSorting);

    function thSorting() {
      return {
        restrict: 'A',
        scope: {
          ignored: '=thIgnored'
        },
        link: function(scope, elem, attr) {
          var th = elem.find('th');
          var ignored = scope.ignored;

          th.addClass('sorting');

          if (ignored) {
            if (jQuery.isNumeric(ignored)) {
              $(th[ignored]).removeClass();
            }
            else if (jQuery.isArray(ignored)) {
              jQuery.each(ignored, function(i, val) {
                $(th[val]).removeClass();
              });
            }
          }

          th.click(function () {
              var target = $(this);

              if ( !target.hasClass('sorting_asc') && !target.hasClass('sorting_desc') ) {
                  clearClass();
                  target.addClass('sorting_asc');
              } 
              else if (target.hasClass('sorting_asc')) {
                  clearClass();
                  target.addClass('sorting_desc');
              } 
              else if (target.hasClass('sorting_desc')) {
                  clearClass();
                  target.addClass('sorting_asc');
              } 
          });

          function clearClass() {
              th.removeClass('sorting_asc sorting_desc');
          }
        }
      };
    };

})();