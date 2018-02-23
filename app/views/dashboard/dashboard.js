(function() {
    'use strict';

    angular
        .module('roommate')
        .controller('dashboardController', dashboardController)

    dashboardController.$inject = ['$location', '$http', '$state', '$scope', 'UserService', 'toaster'];

    function dashboardController($location, $http, $state, $scope, UserService, toaster) {

        var db = this;

        db.logout = function() {
            UserService
                .logout()
                .then(function(res) {
                    console.log(res.status);
                    if (res.status === 200) {
                        toaster.pop('success', 'status', res.data.status_message);
                        console.log(res.data);
                        localStorage.clear();
                        $state.go('login');

                    }
                }, function(error) {
                    console.log(error);
                });
        }

        $scope.stacklabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.stackseries = ['2015', '2016'];
        $scope.stackoptions = {
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };

        $scope.stackdata = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        $scope.pielabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        $scope.piedata = [300, 500, 100];
        $scope.pieoptions = { legend: { display: false } };
    }
})();