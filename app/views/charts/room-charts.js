// var data = {
//     labels: ["January", "February", "March", "April", "May"],
//     datasets: [{
//         label: "My First dataset",
//         fillColor: "rgba(220,220,220,0.2)",
//         strokeColor: "rgba(220,220,220,1)",
//         pointColor: "rgba(220,220,220,1)",
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "rgba(220,220,220,1)",
//         data: [65, 59, 80, 81, 56]
//     }, {
//         label: "My Second dataset",
//         fillColor: "rgba(151,187,205,0.2)",
//         strokeColor: "rgba(151,187,205,1)",
//         pointColor: "rgba(151,187,205,1)",
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "rgba(151,187,205,1)",
//         data: [28, 48, 40, 19, 86]
//     }]
// };
// var pdata = [{
//     value: 300,
//     color: "#F7464A",
//     highlight: "#FF5A5E",
//     label: "Red"
// }, {
//     value: 50,
//     color: "#46BFBD",
//     highlight: "#5AD3D1",
//     label: "Green"
// }, {
//     value: 100,
//     color: "#FDB45C",
//     highlight: "#FFC870",
//     label: "Yellow"
// }]

// var ctxl = $("#lineChartDemo").get(0).getContext("2d");
// var lineChart = new Chart(ctxl).Line(data);

// var ctxb = $("#barChartDemo").get(0).getContext("2d");
// var barChart = new Chart(ctxb).Bar(data);

// var ctxr = $("#radarChartDemo").get(0).getContext("2d");
// var radarChart = new Chart(ctxr).Radar(data);

// var ctxpo = $("#polarChartDemo").get(0).getContext("2d");
// var polarChart = new Chart(ctxpo).PolarArea(pdata);

// var ctxp = $("#pieChartDemo").get(0).getContext("2d");
// var pieChart = new Chart(ctxp).Pie(pdata);

// var ctxd = $("#doughnutChartDemo").get(0).getContext("2d");
// var doughnutChart = new Chart(ctxd).Doughnut(pdata);


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

        vt.chartLineCharts = [];

        // API Request
        $http.get('http://www.json-generator.com/api/json/get/clayCfTkzm?indent=2').
        then(function(data) {
            angular.forEach(data, function(chartLineData) {
                vt.chartLineCharts.push(chartLineData.chart)
            });
        });

        vt.chartLineOptions = {
            maintainAspectRatio: false,
            responsive: true
        };

        vt.chartLineColours = ['#494750', '#cc3321'];
    }
})();