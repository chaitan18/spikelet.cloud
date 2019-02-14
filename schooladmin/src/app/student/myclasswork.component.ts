import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-myclasswork',
  templateUrl: './myclasswork.component.html',
  styleUrls: ['./myclasswork.component.css']
})
export class MyclassworkComponent implements OnInit {
   //public local: LocalStorageService, public session: SessionStorageService
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
    $(document).ready(function(){
          
      $('#menuToggle').on('click', function(event) {
        $('body').toggleClass('open');
      });  
    $('#collapsed').simpleTreeTable({
      collapsed: true
      });

      $("#chat_button").click(function() {
        $('.popup-box').css('height', '285px'); 
        $("#qnimate").show();
      });
      $("#minmum").click(function() {
          $('#maxmium').show(); 
           $('#minmum').hide();
           $('.popup-box').css('height', '35px');
      });
      $("#close").click(function() {
        $("#qnimate").hide();
      });
      $("#maxmium").click(function() {
        $('#maxmium').hide(); 
           $('#minmum').show();
           $('.popup-box').css('height', '285px'); 
      });
      
      var SufeeAdmin = {
        pieFlot: function(){
            var data = [
               {
                    label: "QUIZ",
                    data: 3,
                    color: "gray"
                },
                {
                    label: "HOMEWORKS",
                    data: 9,
                    color: "#DC3545"
                },
                {
                    label: "PROJECTS",
                    data: 2,
                    color: "#ad4bde"
                },
                {
                    label: "EXAMS",
                    data: 30,
                    color: "#8fc9fb"
                }
                
            ];

            var plotObj = $.plot( $( "#flot-pie" ), data, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: false,

                        }
                    }
                },
                grid: {
                    hoverable: true
                },
                tooltip: {
                    show: true,
                    content: "%p.0%, %s", // , n=%n show percentages, rounding to 2 decimal places
                    shifts: {
                        x: 20,
                        y: 0
                    },
                    defaultTheme: false
                }
            } );
        }
    };
    SufeeAdmin.pieFlot();
       // single bar chart
    /*var ctx = document.getElementById( "singelBarChart" );
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
    } );*/


    });  


    
  }

  ngOnInit() {
    
   
  }

}

