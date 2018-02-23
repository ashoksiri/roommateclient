(function() {
    'use strict';

    angular
        .module('roommate')
        .factory('UserService', UserService)
        //.factory('SessionService', SessionService)
        // .factory('sessionInjector', ['$http', function($http) {
        //     var sessionInjector = {
        //         request: function(config) {
        //             console.log(config);
        //             // if (!SessionService.isAnonymus) {
        //             //     config.headers['x-session-token'] = SessionService.token;
        //             // }
        //             return config;
        //         }
        //     };
        //     return sessionInjector;
        // }])
        // .config(['$httpProvider', function($httpProvider) {
        //     $httpProvider.interceptors.push('sessionInjector');
        // }]);

    SessionService.$inject = ['$http', '$rootScope'];

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
                data: credentials,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
        }
    }

    function SessionService($http, $rootScope) {
        var isAnonymus = false;
        var token = '123456';
    }
})();