import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-examdetails',
  templateUrl: './examdetails.component.html',
  styleUrls: ['./examdetails.component.css']
})
export class TeacherExamdetailsComponent implements OnInit {
  datalabel:any = [];
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });
     $( "#quiz_search_criteria_form" ).submit(function() {
       
      $(".quiz_search_criteria_list").show();
      return false;
   });
    $(".quiz_removelist").click(function(){
       $(".quiz_search_criteria_list").hide();
          return false;
     });
     $(".search_criteria_checkbox").click(function(){
      var selectedradioval =  $('input[name=search_criteria_checkbox]:checked').val();
      if(selectedradioval =='homework'){
         $(".search_criteria_div").show();
      }else{
         $(".search_criteria_div").hide();
      }
     
    });

    $('#select_all').on('click',function(){
   
      if(this.checked){
        var r = confirm("Are you sure you want to add the extension due date !");
          if (r == true) {
  
          } else {
            return false;
          }
          $('.graceperiod_checkbox').each(function(){
              this.checked = true;
          });
           
      }else{
           $('.graceperiod_checkbox').each(function(){
              this.checked = false;
          });
      }
      if($('.graceperiod_checkbox:checked').length >0){
         $('.extension_duedate').show();
         $('.old_duedate').hide();
        $(".graceperiod_showhide").show();
      }else{
         $('.extension_duedate').hide();
         $('.old_duedate').show();
         $(".graceperiod_showhide").hide();
      }
  });

  $('.graceperiod_checkbox').on('click',function(){
    
    if($('.graceperiod_checkbox:checked').length == $('.graceperiod_checkbox').length){
        $('#select_all').prop('checked',true);
    }else{
        $('#select_all').prop('checked',false);
    }
    if($('.graceperiod_checkbox:checked').length >0){
       var r = confirm("Are you sure you want to add the extension due date !");
        if (r == true) {

        } else {
          return false;
        }
       $('.extension_duedate').show();
       $('.old_duedate').hide();
       $(".graceperiod_showhide").show();

    }else{
       $(".graceperiod_showhide").hide();
       $('.extension_duedate').hide();
       $('.old_duedate').show();
    }
    
});

  
    
	});
  }
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"searchform":[{"search_criteria":"Search Criteria","topic":"Topic","subtopic":"Sub Topic","quiz_name":"Quiz Name","quiz_namepc":"Please Search Quiz Name","bsearch":"Search","breset":"Reset","due_date":"Due Date"}],"listform":[{"action":"Actions","hm_number":"HM Number","topic":"Topic","student_submitted":"Student Submitted","start_date	":"Start Date","due_date	":"Due Date","created_date	":"Created Date","marks_available":"Marks Available","grace_period":"Grace Period","quiz_number":"Quiz Number","topicq":"Topic","sub_topic":"Sub Topic","quiz_name":"Quiz Name","numberofquestions":"Number Of Questions","save":"save",}],"heading":[{"exam_details":"Exam Details","dashboard":"Dashboard","homework_list":"Homework List","quiz_list":"Quiz List","exam_list":"Exam List","projects_list":"Projects List","del_msgq":"Are you sure you want to close Quiz?","yes":"Yes","no":"No","del_msgh":"Are you sure you want to close Quiz?"}],"module":[{"re_duedate":"Review Extension Due Date","hmId":"Home Work Id","topic":"Topic","start_date":"Start Date","extension_due_date":"Extension Due Date","cancel":"Cancel","confirm":"Confirm"}]}],
      "Telugu":[{"searchform":[{"search_criteria":"శోధన ప్రమాణాలు","topic":"విషయం","subtopic":"ఉప విషయం","quiz_name":"క్విజ్ పేరు","quiz_namepc":"దయచేసి క్విజ్ పేరును శోధించండి","bsearch":"శోధన","breset":"రీసెట్","due_date":"గడువు తేది"}],"listform":[{"action":"చర్యలు","hm_number":"ఇంటి నంబర్","topic":"విషయం","student_submitted":"విద్యార్థి సమర్పించిన","start_date":"ప్రారంబపు తేది","due_date":"గడువు తేది","created_date":"సృష్టించిన తేదీ","marks_available":"అందుబాటులో ఉన్న గుర్తులు","grace_period":"గ్రేస్ కాలం","quiz_number":"క్విజ్ సంఖ్య","topicq":"విషయం","sub_topic":"ఉప విషయం","quiz_name":"క్విజ్ పేరు","numberofquestions":"ప్రశ్నల సంఖ్య","save":"సేవ్"}],"heading":[{"exam_details":"పరీక్షా వివరాలు","dashboard":"డాష్బోర్డ్","homework_list":"గృహకార్యాల జాబితా","quiz_list":"క్విజ్ జాబితా","exam_list":"పరీక్షా జాబితా","projects_list":"ప్రాజెక్ట్స్ జాబితా","del_msgq":"మీరు ఖచ్చితంగా క్విజ్ని మూసివేయాలనుకుంటున్నారా?","yes":"అవును","no":"లేద","del_msgh":"మీరు ఖచ్చితంగా ఇంటి పనిని మూసివేయాలనుకుంటున్నారా?"}],"module":[{"re_duedate":"పొడిగింపు గడువు తేదీని సమీక్షించండి","hmId":"ఇంటి పని ఐడి","topic":"విషయం","start_date":"ప్రారంబపు తేది","extension_due_date":"పొడిగింపు గడువు తేదీ","cancel":"రద్దు","confirm":"నిర్ధారించండి"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

