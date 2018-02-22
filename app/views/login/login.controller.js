(function() {
    'use strict';

    angular
        .module('roommate')
        .controller('loginController', loginController)

    loginController.$inject = ['$location', '$http', '$state', '$scope', 'UserService'];

    function loginController($location, $http, $state, $scope, UserService) {

        function processUser(data, status) {
            console.log(data);
        }

        $scope.title = "Room Mate";
        $scope.loginStatus = false;
        $scope.login = function(data) {
            console.log(data);
            UserService
                .login(data)
                .then(function(response) {
                    console.log(response.data);
                    if (response.data.status_code === 200) {
                        console.log(response.data);
                        response.data.password = data.password;
                        UserService
                            .access_token(response.data)
                            .then(function(response) {
                                console.log(response);
                            })
                            .catch(function(error) {
                                console.log(error);
                            })
                    }

                })
                .catch(function(error) {
                    console.log(error.data);
                });
            //localStorage.setItem('user', JSON.stringify(data));

            //$state.go('home')
            $('#login-spinner-login').removeClass().addClass('fa fa-spinner fa-spin');
        }

        $scope.register = function(data) {
            console.log(data);
            $('#login-spinner-egister').removeClass().addClass('fa fa-spinner fa-spin');
        }
    }
})();