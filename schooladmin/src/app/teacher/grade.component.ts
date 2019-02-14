import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class TeacherGradeComponent implements OnInit {
 
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

