(function() {
    'use strict';

    var roommate = angular.module('roommate', ['ui.router', 'oc.lazyLoad', 'chart.js', 'ui.bootstrap']).
    config(function(ChartJsProvider) {
            // Configure all charts
            ChartJsProvider.setOptions({
                colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
            });
            // Configure all doughnut charts
            ChartJsProvider.setOptions('doughnut', {
                cutoutPercentage: 60
            });
            ChartJsProvider.setOptions('bubble', {
                tooltips: { enabled: false }
            });
        })
        .controller('chartsController', function($scope, $rootScope, $http) {
            $scope.sample = function() {
                console.log('charts Controller called')
            }
        }).controller('mailController', function($scope, $rootScope, $http) {
            $scope.sample = function() {
                console.log('mail Controller called')
            }
        }).controller('profileController', function($scope, $rootScope, $http) {
            $scope.sample = function() {
                console.log('profileController Controller called')
            }
        }).factory('UserService', ['$http', function($http) {

            return {
                get_access_token: function() {

                    var auth = JSON.parse(localStorage.getItem('auth'));

                    return $http.post('/accounts/access_token/', auth, { headers: { 'Content-Type': undefined } });
                },
                get_auth: function() {
                    return $http.post('/accounts/auth/');
                }
            }

        }]).run(['$rootScope', '$state', '$transitions',

            function($rootScope, $state, $transitions) {
                $transitions.onSuccess({}, function(transition) {
                    var user = localStorage.getItem('user');
                    if (user === null) {
                        $state.go('login');
                        return true;
                    }
                    if (user && transition.to().name === 'login') {
                        $state.go('home');
                        return false;
                    }
                });
            }
        ]);;

})();