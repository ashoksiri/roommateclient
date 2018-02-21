(function() {
    'use strict';

    angular
        .module('roommate')
        .controller('chartsController', chartsController)

    chartsController.$inject = ['$location', '$http', '$state', '$scope'];

    //https://codepen.io/it-labs/pen/BjQVym --refer this

    function chartsController($location, $http, $state, $scope) {
        var vt = this;
        console.log(vt);
        // Line Chart

        vt.chartLineLabels = ["January", "February", "March", "April", "May", "June", "July"];

        vt.chartLineSeries = ['New Users', 'Global Quizz Results in %'];

        vt.chartLineCharts = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        // // API Request
        // $http.get('http://www.json-generator.com/api/json/get/clayCfTkzm?indent=2').
        // then(function(data) {
        //     angular.forEach(data, function(chartLineData) {
        //         vt.chartLineCharts.push(chartLineData.chart)
        //     });
        // });

        vt.chartLineOptions = {
            maintainAspectRatio: false,
            responsive: true
        };

        vt.chartLineColours = ['#494750', '#cc3321'];

        vt.chartRadarLabels = ["Adobe PDF", "Video", "Text File", "Box.com", "Presentation"];

        // Radar Chart
        vt.chartRadarCharts = [
            [65, 59, 90, 81, 56]
        ];

        vt.chartRadarOptions = {
            maintainAspectRatio: true,
            responsive: true
        }

        vt.chartRadarColours = ['#cc3321'];

        // Pie Chart
        vt.chartPieLabels = ["Powerful-Strength Concentrate", "Hydro-Plumping Re-Texturizing Serum", "Iris Extract Activating Treatment Essence", "Daily Reviving Concentrate"];
        vt.chartPieCharts = [152, 51, 68, 210];
        vt.chartPieOptions = {
            maintainAspectRatio: true,
            responsive: true
        }
        vt.chartPieColours = ['#494750', '#999999', '#cc3321', '#2fb467'];
    }
})();