import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  
  constructor(public router: Router) { }
  
  ngAfterViewInit(){ 
    
         $(document).ready(function(){
         
           $('#menuToggle').on('click', function(event) {
             $('body').toggleClass('open');
           });

           $(".close").click(function(){
           $(".addexam_hide").hide();
           });
           $(".add_exam").click(function(){
           $(".addexam_hide").show();
           $('#from_date').datepick();
           $('#end_date').datepick();
           $('#exam_date').datepick();
           $('#homework_date').datepick();
           $('#quiz_date').datepick();
           $('#project_date').datepick();
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


        });
     }
    
  ngOnInit() {
    
   
   
  }

  

  
  

}

