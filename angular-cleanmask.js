angular.module('ngCleanMask', ['ui.mask']).directive('cleanMask', [
    '$compile', '$timeout', function($compile, $timeout) {
      return {
        require: 'ngModel',
        compile: function(el, attr) {
          el.removeAttr('clean-mask');
          el.attr('ui-mask', attr.cleanMask);
          return function(scope, element, attrs, controller) {
            var parser;
            
            if (!controller) {
              return;
            }
            
            parser = function(text) {
              var ret;
              ret = text;
              if (text !== controller.$viewValue) {
                ret = controller.$viewValue;
              }
              return ret.replace(/_/g, '');
            };
            
            $compile(element)(scope, function(clone) {
              element.replaceWith(clone);
              
              $timeout(function() {
                controller = clone.data('$ngModelController');
                controller.$parsers.push(parser);
              }, 0, false);
            });
          };
        }
      };
    }
  ]);
