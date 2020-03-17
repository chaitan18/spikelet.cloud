import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-studenthomework',
  templateUrl: './studenthomework.component.html',
  styleUrls: ['./studenthomework.component.css']
})
export class TeacherStudenthomeworkComponent implements OnInit {
  datalabel:any = [];
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });

       $('#example').DataTable({
           "bPaginate": false,
          "bLengthChange": false,
          "bFilter": false,
          "bInfo": false,
          "bAutoWidth": false
        });

      $( ".addmarks" ).keyup(function() {
         var sumofstudentmarks = 0;
        $('input[name^="addmarks"]').each(function() {  
            sumofstudentmarks += Number($(this).val());
           $(".sumofstudentmarks").val(sumofstudentmarks);
         });
      });
     
	});
  }
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"info":[{"homeworkId":"Home Work Id","topic":"Topic","numberofquestions":"Number Of Questions","start_date":"Start Date","created_date":"Created Date","submitted_count":"Submitted Count","not_submitted_count":"Not Submitted Count","correction_count":"Correction Count"}],"listform":[{"student_assignment_list":"Student Assignment List","student_name":"Student Name","status":"Status"}],"heading":[{"assignment_list_by_student":"Assignment List By Student","dashboard":"Dashboard"}]}],
      "Telugu":[{"info":[{"homeworkId":"ఇంటి పని ఐడి","topic":"విషయం","numberofquestions":"ప్రశ్నల సంఖ్య","start_date":"ప్రారంబపు తేది","created_date":"సృష్టించిన తేదీ","submitted_count":"సమర్పించిన కౌంట్","not_submitted_count":"సమర్పించిన కౌంట్ కాదు","correction_count":"సవరణ కౌంట్"}],"listform":[{"student_assignment_list":"స్టూడెంట్ అసైన్మెంట్ జాబితా","student_name":"విద్యార్థి పేరు","status":"స్థితి"}],"heading":[{"assignment_list_by_student":"విద్యార్థి ద్వారా అప్పగించిన జాబితా","dashboard":"డాష్బోర్డ్"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

