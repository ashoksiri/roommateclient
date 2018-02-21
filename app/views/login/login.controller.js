(function() {
    'use strict';

    angular
        .module('roommate')
        .controller('loginController', loginController)

    loginController.$inject = ['$location', '$http', '$state', '$scope'];

    function loginController($location, $http, $state, $scope) {
        $scope.title = "Room Mate";
        $scope.loginStatus = false;
        $scope.login = function(data) {
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
            $state.go('home')
            $('#login-spinner-login').removeClass().addClass('fa fa-spinner fa-spin');
        }

        $scope.register = function(data) {
            console.log(data);
            $('#login-spinner-egister').removeClass().addClass('fa fa-spinner fa-spin');
        }
    }
})();