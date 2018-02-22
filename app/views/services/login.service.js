(function() {
    'use strict';

    angular
        .module('roommate')
        .factory('UserService', UserService)

    UserService.$inject = ['$http', '$rootScope'];

    function UserService($http, $rootScope) {
        var apiUrl = $rootScope.apiUrl;
        var service = {
            login: loginService,
            access_token: accessToken
        };

        return service;

        function loginService(credentials) {

            return $http({
                method: 'POST',
                url: apiUrl + 'login/',
                data: credentials
            })

        }

        function accessToken(credentials) {
            return $http({
                method: 'POST',
                url: apiUrl + 'o/token/',
                data: credentials
            })
        }
    }
})();