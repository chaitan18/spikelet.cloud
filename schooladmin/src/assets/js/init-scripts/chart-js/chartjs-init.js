( function ( $ ) {
    "use strict";

   //radar chart
    var ctx = document.getElementById( "radarChart" );
    ctx.height = 100;
    var myChart = new Chart( ctx, {
        type: 'radar',
        data: {
            labels: [ [ "Exam 1", "25-05-2019" ], [ "Quiz", "25-01-2019 [Simple Present]" ], [ "HomeWork", "26-01-2019 [Simple Present]" ],[ "Quiz", "28-01-2019 [Present Perfect]" ], [ "HomeWork", "26-01-2019 [Simple Present]" ], [ "Quiz", "25-01-2019 [Simple Present]" ]],
            datasets: [
                {
                    label: "Exam Dates",
                    data: [ 100, 85, 85, 85, 85, 85, 85],
                    borderColor: "rgba(0, 123, 255, 0.6)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.4)"
                            },
                          
                
                                          
                ]
        },
        options: {
            legend: {
                position: 'top',
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    } );

   
    // single bar chart
    var ctx = document.getElementById( "singelBarChart" );
    ctx.height = 230;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "Exam 1", "Exam 2", "Exam 3"],
            datasets: [
                {
                    label: "Exam Trend",
                    data: [ 55, 40, 87,100],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );




} )( jQuery );