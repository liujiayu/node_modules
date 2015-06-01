(function() {
angular
  .module('qcs')
  .directive('thSortingStyle', thSortingStyle);

  function thSortingStyle() {
    return {
      restrict: 'A',
      scope: {
        ignore: '=ignoreTh'
      },
      link: function(scope, elem, attr) {
        var th = elem.find('th');

        th.addClass('sorting');

        jQuery.each(scope.ignore, function(i, val) {
          $(th[val]).removeClass();
        });

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