angular.module('app', ['com.phuongnhi.directives'])

    .controller('videoCtrl', ['$scope', function($scope) {

        $scope.messages = [];

        $scope.handlePause = function (event) {

            $scope.messages.push({text: 'paused!'});
            console.log('invoked handlePause func', $scope.messages, event);
        }
    }])

    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.user1 = {
            name: 'PN Dang',
            address: {
                street: 'Gwayang-dong 1491-61',
                city: 'Anyang-si',
                planet: '302'
            },
            friends: [
                'SH',
                'GJ',
                'JK'
            ]
        };

        $scope.user2 = {
            name: 'SH Kang',
            address: {
                street: 'Jungang-dong 1491-61',
                city: 'Changwon-si',
                planet: '301'
            },
            friends: [
                'TK',
                'MH',
                'JK'
            ]
        };
    }])
    .controller('CustomClickCtrl', function ($scope) {
        $scope.data = {};
        $scope.data.message = "I haven't been clicked";
        
        $scope.handleClick = function (data) {
            data.message = "I clicked";
        }
    })


;

    
