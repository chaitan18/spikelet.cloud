import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-manualreviewquestions',
  templateUrl: './manualreviewquestions.component.html',
  styleUrls: ['./manualreviewquestions.component.css']
})
export class TeacherManualreviewquestionsComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });
     
	});
  }
  ngOnInit() {
    
 
  }

}

