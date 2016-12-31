'use strict';

angular.module("dynamicClass", []).directive('dynamicClass', function() {
    function link(scope, element, attrs, controller, transcludeFn) {
        var prevClass = '';

        var update = function(value) {
            for (var i = 0; i < scope.options.length; i++) {
                if (value >= scope.options[i].min && value < scope.options[i].max) {
                    element.removeClass(prevClass);

                    prevClass = scope.options[i].class;
                    element.addClass(prevClass);

                    break;
                }
            }
        };

        scope.$watch('value', function (newVal, oldVal) {
            update(newVal);
        }, true);
    }

    /*
     * Given the following comparison, it just finds the first match:
     * <= <
     * {min: 0, max: 5, class: 'low'},
     */
    return {
        link: link,
        restrict: 'A',
        scope: {
            options: '=',
            value: '=',
        },
    };
});
