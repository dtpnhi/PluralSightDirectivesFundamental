angular.module('com.phuongnhi.directives')
    .directive('myClick', function ($parse) {
        return {
            link: function (scope, element, attrs) {
                
                var fn = $parse(attrs['myClick']);
                
                element.on('click', function (event) {
                    
                    scope.$apply(function () {
                        fn(scope);
                    })
                })
            }
        }
    });