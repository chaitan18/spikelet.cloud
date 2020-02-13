import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherpostclassbehaviour',
  templateUrl: './postclassbehaviour.component.html',
  styleUrls: ['./postclassbehaviour.component.css']
})
export class TeacherClassbehaviourComponent implements OnInit {
  datalabel:any = [];
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
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"searchform":[{"search_criteria":"Search Criteria","student_name":"Student Name / Id Number","student_namepc":"Search With Student Name / Id Number","bsearch":"Search","breset":"Reset"}],"listform":[{"student_list":"Student List","selecct_all":"Selecct All","student_id":"Student Id","student_name":"Student Name","remarks":"Remarks","send_date":"Send Date","student_remarks":"Student Remarks","student_remarkspc":"Enter Remarks","send":"send"}],"heading":[{"post_class_behaviours":"Post Class Behaviours","dashboard":"Dashboard","class_wise_behaviour":"Class Wise Behaviour"}]}],
      "Telugu":[{"searchform":[{"search_criteria":"శోధన ప్రమాణాలు","student_name":"స్టూడెంట్ పేరు - ఐడి సంఖ్య","student_namepc":"స్టూడెంట్ పేరుతో శోధించండి - ఐడి సంఖ్య","bsearch":"శోధన","breset":"రీసెట్"}],"listform":[{"student_list":"విద్యార్థి జాబితా","selecct_all":"అన్ని ఎంచుకోండి","student_id":"స్టూడెంట్ ఐడి","student_name":"విద్యార్థి పేరు","remarks":"వ్యాఖ్యలు","send_date":"తేదీ పంపండి","student_remarks":"స్టూడెంట్ రిమార్క్స్","student_remarkspc":"వ్యాఖ్యలను నమోదు చేయండి","send":"పంపడానికి"}],"heading":[{"post_class_behaviours":"పోస్ట్ క్లాస్ బిహేవియర్స్","dashboard":"డాష్బోర్డ్","class_wise_behaviour":"క్లాస్ వైజ్ బిహేవియర్"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

