angular.module('com.phuongnhi.directives')
    .directive('myLazyRender', function() {
        return {
            restrict: 'A',
            transclude: 'element',
            priority: 1000,
            link: function(scope, element, attrs, ctr, transclude) {
                var unWatchFn = scope.$watch(attrs.myLazyRender, function (newValue) {
                    var showit = JSON.parse(newValue);
                    var hasBeenShown = false;

                    if (showit && !hasBeenShown) {

                        transclude(scope, function(clone) {
                            element.after(clone);
                        });
                        hasBeenShown = true;
                        unWatchFn();
                    }
                })
            }
        }
    })
    .directive('echo', function() {
        return {
            restrict: 'A',
            priority: 800,
            link: function(scope, element, attrs, ctr, trans) {
                console.log('echo');
            }
        }
    });

    /*.directive('myTransclude', function() {
        return {
            restrict: 'A',
            transclude: 'element',
            link: function(scope, element, attrs, ctr, transc) {

                transc(scope, function(clone) {
                    element.after(clone);
                })
            }

        }
    });*/

    /*.directive('myQuestion', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'myQuestion.html',
            scope: {
                questionText: '@q'
            }
        }
    });*/
    /*.directive('displayBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'displayBox.html',
            controller: function ($scope) {
                
                console.log($scope);
                
                $scope.message = 'Hello from Nhi';
                $scope.hidden = false;

                $scope.close = function () {
                    $scope.hidden = !$scope.hidden;
                }
            },
            transclude: true,
            scope: true
        }
    });*/

    /*.directive('fontScale', function () {

        return {
            link: function (scope, ele, attrs) {

                scope.$watch(attrs['fontScale'], function (newValue) {

                    ele.css('font-size', newValue + '%');

                });
            }
        }
    })*/

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
