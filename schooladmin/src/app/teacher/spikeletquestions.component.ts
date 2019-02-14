import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherspikeletquestions',
  templateUrl: './spikeletquestions.component.html',
  styleUrls: ['./spikeletquestions.component.css']
})
export class TeacherSpikeletquestionsComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });
       $(".hint_textarea").hide();
       $(".hide").click(function(){
          $(".hint_textarea").hide();
      });
      $(".show").click(function(){
          $(".hint_textarea").show();
      });
      
      $(".quwstion_count").click(function(){
       // alert();
          //$("#nav-home-tab").click();
          $('#nav-home-tab').trigger('click');
      });
     
	});
  }
  ngOnInit() {
    
 
  }

}

