import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherstudents',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class TeacherStudentsComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
     });
     $(".submit_type").on('click', function(){
      var submit_type = $(this).val();
      if(submit_type =='bulktype'){
        $(".individual").hide();
        $(".bulktype").show();
      }else if(submit_type =='individual'){
        $(".bulktype").hide();
        $(".individual").show();
       
      }
    });
	});
  }
  ngOnInit() {
    
 
  }

}

