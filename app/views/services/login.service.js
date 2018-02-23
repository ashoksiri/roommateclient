(function() {
    'use strict';

    angular
        .module('roommate')
        .factory('UserService', UserService)

    UserService.$inject = ['$q', '$http', '$rootScope'];

    function UserService($q, $http, $rootScope) {
        var service = {
            login: loginService,
            logout: logoutService,
            register: registerSerivce
        };

        return service;

        function generateToken(auth_tokens) {
            return $http({
                method: 'POST',
                url: apiUrl + 'o/token/',
                data: auth_tokens,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

        }

        function loginService(credentials) {

            return $http({
                method: 'POST',
                url: apiUrl + 'login/',
                data: credentials
            }).then(function(res) {
                if (res.status === 200) {
                    var auth_tokens = {
                        client_id: res.data.client_id,
                        client_secret: res.data.client_secret,
                        grant_type: res.data.grant_type
                    }
                    localStorage.auth_tokens = JSON.stringify(auth_tokens);
                    auth_tokens.username = res.data.username;
                    auth_tokens.password = credentials.password;

                    return generateToken(auth_tokens);
                }
            });
        }

        function logoutService() {
            var token = JSON.parse(localStorage.getItem('token')) || {};
            var auth_tokens = JSON.parse(localStorage.getItem('auth_tokens')) || {};
            console.log(token);
            return $http({
                method: 'POST',
                url: apiUrl + 'logout/',
                data: {
                    token: token.access,
                    client_id: auth_tokens.client_id,
                    client_secret: auth_tokens.client_secret
                }
            });
        }

        function registerSerivce(data) {

            return $http({
                method: 'post',
                url: apiUrl + 'register/',
                data: data,
            })
        }
    }
})();