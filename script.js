angular.module('app', ['com.phuongnhi.directives'])

    .controller('InnerCtrl', function ($scope) {
        console.log($scope);
    })

    .controller('videoCtrl', ['$scope', function($scope) {

        $scope.messages = [];

        $scope.handlePause = function (event) {

            $scope.messages.push({text: 'paused!'});
            console.log('invoked handlePause func', $scope.messages, event);
        }
    }])

    .controller('mainCtrl', ['$scope', function ($scope) {

        $scope.showit = false;

        $scope.clickToShowit = function () {

            $scope.showit = true;
            console.log($scope.showit);
        };
        
        $scope.items = [1, 2, 3, 57];
        
        $scope.answers = {baseLocation: 'Seoul'};
        $scope.message = 'Goodbye~';
        
        $scope.pn = {
            name: 'PN Dang',
            selected: true
        };
        
        $scope.clickToChangeColor = function(user) {
            user.selected = !user.selected;
            console.log('clickToChangeColor', user);
        }
        
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
        
        $scope.droid1 = {
            name: 'R2-D2',
            specifications: {
                manufacturer: 'Industrial Automation',
                type:'Astromech',
                productLine: 'R2 series'
            }
        };
    }])
    .controller('CustomClickCtr', function ($scope) {
        
        $scope.data = {};
        $scope.data.message = 'Hello'; 
        
        $scope.handleMyClick = function (data) {
            console.log('handleMyClick: ', data);
            data.message = 'goodbye';
        }
    })
    .controller('CssCtrl', function ($scope) {
        $scope.size = 150;
    })
;