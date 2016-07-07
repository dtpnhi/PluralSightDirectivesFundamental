angular.module('com.phuongnhi.directives')
    .directive('fontScale', function () {

        return {
            link: function (scope, ele, attrs) {

                scope.$watch(attrs['fontScale'], function (newValue) {

                    ele.css('font-size', newValue + '%');

                });
            }
        }
    });

    /*.directive('myClick', function ($parse) {
        return {
            link: function (scope, element, attrs) {
                
                element.on('click', function (evt) {
                    
                    console.log('element on click event');
                    var func = $parse(attrs['myClick']);
                    
                    scope.$apply(function () {
                        console.log('link scope: ', scope)
                        func(scope);
                    });
                });
            }
        }
    })
    .directive('userTile', function ($parse) {
        return {
            restrict: 'E',
            scope: {
                user: '=',
                userClick: '&'
            },
            templateUrl: 'userTile.html',
            link: function(scope, ele, attrs) {

                var func = $parse(attrs['clickOnText']);

                console.log('link func');
                console.log(func);

                ele.on('click', function(event) {
                    console.log('on click');
                    scope.$apply(function() {
                        console.log('execute func');
                        console.log(scope);
                        func(scope.$parent);
                    })
                })
            }
        }
    })
    .directive('clickOnText', function ($parse) {
        
        return {
            restrict: 'A',
            link: function(scope, ele, attrs) {
                
                var func = $parse(attrs['clickOnText']);
                
                console.log('link func');
                console.log(func);
                
                ele.on('click', function(event) {
                    console.log('on click');
                    scope.$apply(function() {
                        console.log('execute func');
                        console.log(scope);
                        func(scope);
                    })
                })
            }
        }
    });*/

/*
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
    });*/
