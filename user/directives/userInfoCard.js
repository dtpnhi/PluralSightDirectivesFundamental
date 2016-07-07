angular.module('com.phuongnhi.directives', [])
    
    .directive('stateDisplay', function () {
        return {
            link: function (scope, element, attrs) {

                var params = attrs['stateDisplay'].split(' ');
                var classes = params.slice(1);

                scope.$watch(params[0], function (newValue) {


                    element.removeClass(classes.join(' '));
                    element.addClass(classes[newValue]);
                })
                
            }
        }
    })
    
    .directive('userInfoCard', function () {

        console.log('userInfoCard');

        return {
            restrict: 'EA',
            scope: {
                user: '=',
                initialCollapsed: '@collapsed'
            },

            controller: function ($scope) {

                console.log('controller');

                $scope.nextState = function() {

                    $scope.user.level = $scope.user.level || 0;
                    $scope.user.level++;
                    console.log('nextState: ', $scope.user.level);
                    $scope.user.level = $scope.user.level % 4;
                };

                $scope.knightMe = function (user) {
                    user.rank = 'knight';
                };

                $scope.collapsed = ($scope.initialCollapsed === 'true');

                $scope.collapse = function () {
                    $scope.collapsed = !$scope.collapsed;
                    console.log("$scope.collapsed: ", $scope.collapsed);
                    console.log("userInfoCard $scope: ", $scope);
                };

                $scope.removeFriend = function (friendName) {

                    console.log('invoked removeFriend name: ', friendName);

                    $scope.user.friends.splice($scope.user.friends.indexOf(friendName), 1);
                    $scope.removing = false;
                    console.log("$scope.user", $scope.user);
                };
            },
            templateUrl: 'userInfoCard.html',
            replace: true
        }
    })

    .directive('userAddress', [function () {
        return {
            scope: {
                nhiPhuong: '='
            },

            controller: ['$scope', function ($scope) {

                $scope.addressPaneCollapsed = false
                $scope.collapseAddressPane = function () {
                    $scope.addressPaneCollapsed = !$scope.addressPaneCollapsed;
                }

                console.log('userAddress: ', $scope);
            }],

            templateUrl: 'address.html'
        }
    }])
    .directive('removeFriend', function () {
        return {
            templateUrl: 'removeFriend.html',

            scope: {
                notifyParent: '&method'
            },

            controller: function ($scope) {
                $scope.removing = false;

                $scope.startRemove = function () {
                    $scope.removing = true;
                }

                $scope.confirmRemove = function () {
                    $scope.notifyParent();
                }

                $scope.cancelRemove = function () {
                    $scope.removing = false;
                }
            }
        }
    });