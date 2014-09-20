  angular.module('ngCleanMask', ['ui.mask']).directive('cleanViewValue', [
    function() {
      return {
        restrict: 'A',
        priority: 500,
        require: 'ngModel',
        link: function(scope, element, attrs, controller) {
          var parser;
          if (controller === void 0) {
            return;
          }
          parser = function(text) {
            var ret;
            if (controller === void 0) {
              return text;
            }
            ret = text;
            if (text !== controller.$viewValue) {
              ret = controller.$viewValue;
            }
            return ret.replace(/_/g, '');
          };
          controller.$parsers.push(parser);
        }
      };
    }
  ]);
