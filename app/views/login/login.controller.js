(function() {
    'use strict';

    angular
        .module('roommate')
        .controller('loginController', loginController)
        .directive('wjValidationError', function() {
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctl) {
                    scope.$watch(attrs['wjValidationError'], function(errorMsg) {
                        elm[0].setCustomValidity(errorMsg);
                        ctl.$setValidity('wjValidationError', errorMsg ? false : true);
                    });
                }
            };
        });

    loginController.$inject = ['$location', '$http', '$state', '$scope', 'UserService', '$timeout', 'toaster'];

    function loginController($location, $http, $state, $scope, UserService, $timeout, toaster) {

        var user = this;

        $scope.title = "Room Mate";
        $scope.loginStatus = false;

        //toaster.pop('success', "status", "Login Success");



        user.login = function(data) {

            $('#login-spinner-login').removeClass().addClass('fa fa-spinner fa-spin');

            UserService
                .login(data)
                .then(function(res) {
                    toaster.pop('success', 'status', "Login Success.")
                    var token = {
                        access: res.data.access_token,
                        refresh: res.data.refresh_token,
                        type: res.data.token_type,
                        expire: Date.now() + parseInt(res.data.expires_in) * 1000 // calculate time of expire
                    };
                    localStorage.token = JSON.stringify(token);
                    $state.go('home');

                }, function(error) {
                    $('#login-spinner-login').removeClass();
                    toaster.pop('error', 'status', error.data.status_message)
                });


        }


        user.register = function(data) {
            $('#login-spinner-register').removeClass().addClass('fa fa-spinner fa-spin');
            UserService
                .register(data)
                .then(function(res) {
                    console.log(res);
                    if (res.status === 201 || res.status === 200) {
                        $('#login-spinner-register').removeClass();
                        $('#acount_exist').click();
                        toaster.pop('success', "status", res.data.status_message);
                    }
                }, function(error) {
                    console.log(error);
                });

        }

    }



})();