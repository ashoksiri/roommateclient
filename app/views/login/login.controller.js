(function() {
    'use strict';

    angular
        .module('roommate')
        .controller('loginController', loginController)

    loginController.$inject = ['$location', '$http', '$state', '$scope', 'UserService', '$timeout'];

    function loginController($location, $http, $state, $scope, UserService, $timeout) {

        function processUser(data, status) {
            console.log(data);
        }

        $timeout(function() {
            console.log("timeout called");
        }, 1000)

        $scope.title = "Room Mate";
        $scope.loginStatus = false;
        // $scope.login = function(data) {
        //     console.log(data);
        //     UserService
        //         .login(data)
        //         .then(function(response) {
        //             console.log(response.data);
        //             if (response.data.status_code === 200) {
        //                 var loginResponse = response.data;
        //                 loginResponse.password = data.password;
        //                 UserService
        //                     .access_token(loginResponse)
        //                     .then(function(response) {
        //                         console.log(response.data, response.status);
        //                         if (response.status === 200) {
        //                             angular.forEach(response.data, function(value, key) {
        //                                 console.log(key + ': ' + value);
        //                                 loginResponse[key] = value;
        //                             });
        //                         }
        //                         console.log(loginResponse);
        //                     })
        //                     .catch(function(error) {
        //                         console.log(error);
        //                     })
        //             }

        //         })
        //         .catch(function(error) {
        //             console.log(error.data);
        //         });
        //     //localStorage.setItem('user', JSON.stringify(data));

        //     //$state.go('home')
        //     $('#login-spinner-login').removeClass().addClass('fa fa-spinner fa-spin');
        // }

        $scope.register = function(data) {
            console.log(data);
            $('#login-spinner-egister').removeClass().addClass('fa fa-spinner fa-spin');
        }
    }
})();