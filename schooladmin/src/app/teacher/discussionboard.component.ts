import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherdiscussion',
  templateUrl: './discussionboard.component.html',
  styleUrls: ['./discussionboard.component.css']
})
export class TeacherDiscussionComponent implements OnInit {
 
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

