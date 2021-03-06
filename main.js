apiUrl = 'http://localhost:8000/accounts/';

(function() {
    'use strict';

    angular
        .module('roommate')
        .config(configConfig)

    configConfig.$inject = ['$interpolateProvider', '$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider'];

    function configConfig($interpolateProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');

        $urlRouterProvider.otherwise('/login');
        $stateProvider.state({
            name: 'login',
            url: '/login',
            templateUrl: '/app/views/login/login.view.html',
            controller: 'loginController',
            controllerAs: 'user',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', '$rootScope', function($ocLazyLoad, $rootScope) {
                    $rootScope.apiUrl = apiUrl;
                    return $ocLazyLoad.load('login'); // Resolve promise and load before view 
                }]
            }
        }).state({
            name: 'home',
            url: '/home',
            templateUrl: '/app/views/dashboard/dashboard.view.html',
            controller: 'dashboardController',
            controllerAs: 'db',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('dashboard'); // Resolve promise and load before view 
                }]
            }

        }).state({
            name: 'home.charts',
            url: '/charts',
            templateUrl: '/app/views/charts/charts.view.html',
            controller: 'chartsController',
            controllerAs: 'vt',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('charts'); // Resolve promise and load before view 
                }]
            }
        }).state({
            name: 'home.mail',
            url: '/mail',
            templateUrl: '/app/views/mail/mail.view.html',
            //controller: 'profileController'
        }).state({
            name: 'home.profile',
            url: '/profile',
            templateUrl: '/app/views/profile/profile.view.html',
            //controller: 'homeController'
        });

        $ocLazyLoadProvider.config({
                'debug': true, // For debugging 'true/false'
                'events': true, // For Event 'true/false'
                'modules': [{ // Set modules initially
                        name: 'login', // State1 module
                        files: ['./app/views/login/login.controller.js']
                    },
                    { // Set modules initially
                        name: 'dashboard', // State1 module
                        files: ['./app/views/dashboard/dashboard.js']
                    },
                    { // Set modules initially
                        name: 'charts', // State1 module
                        files: ['./app/views/charts/room-charts.js']
                    }
                ]
            })
            // $httpProvider.interceptors.push('sessionInjector');
            // $httpProvider.interceptors.push(['$q', '$scope', '$window', '$injector', function($q, $scope, $window, $injector) {

        //     //var $auth = $inject.inject('$auth');

        //     return {
        //         request: function(config) {
        //             var token = JSON.parse(sessionStorage.getItem('token'));
        //             console.log(title);
        //             return config;
        //         }
        //     }
        // }])

    }





}());