import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherpostclassbehaviour',
  templateUrl: './postclassbehaviour.component.html',
  styleUrls: ['./postclassbehaviour.component.css']
})
export class TeacherClassbehaviourComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });
     $(".search_criteria_checkbox").click(function(){
        var selectedradioval =  $('input[name=search_criteria_checkbox]:checked').val();
        if(selectedradioval =='classbehavior'){
           $(".search_criteria_div").show();
        }else{
           $(".search_criteria_div").hide();
        }
       
      });
      
     /* document.getElementById("remarks_button").disabled = true;
      var select_all = document.getElementById("select_all"); 
      var checkboxes = document.getElementsByClassName("checkbox"); 
      select_all.addEventListener("change", function(e){
        for (i = 0; i < checkboxes.length; i++) { 
          checkboxes[i].checked = select_all.checked;
        }
       
         document.getElementById("remarks_button").disabled = false;
      });


      for (var i = 0; i < checkboxes.length; i++) {

        checkboxes[i].addEventListener('change', function(e){ 
          item is unchecked
          if(this.checked == false){
            select_all.checked = false;
          }
         
          if(document.querySelectorAll('.checkbox:checked').length == checkboxes.length){
            select_all.checked = true;
           
          }

        });
      } */

	});
  }
  ngOnInit() {
    
 
  }

}

