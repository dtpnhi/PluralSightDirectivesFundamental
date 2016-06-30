angular.module('com.phuongnhi.directives')
    .directive('spacebarSupport', function () {
        return {
            restrict: 'A',

            link: function (scope, element, attrs) {

                console.log('invoked link');

                $('body').on('keypress', function (evt) {
                    if (evt.keyCode === 32) {
                        console.log('pressed spacebar');

                        var vidEl = element[0];
                        if (vidEl.paused) {
                            vidEl.play();
                        } else {
                            vidEl.pause();
                        }
                    }
                })
            }
        }
    })

    .directive('eventPause', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var func = $parse(attrs['eventPause']);
                console.log(func);

                element.on('pause', function (event1) {
                    scope.$apply(function () {
                        func(scope, {evt:event1});
                    })
                });
            }
        }
    })

    /*.directive('eventPause', function () {
        return {
            restrict: 'A',
            scope: {
                eventPause: '&'
            },
            link: function (scope, element, attrs) {

                element.on('pause', function (evt) {
                    scope.$apply(function () {
                        scope.eventPause();
                    })
                });
            }
        }
    })*/;