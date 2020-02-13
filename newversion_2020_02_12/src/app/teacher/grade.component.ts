import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class TeacherGradeComponent implements OnInit {
  datalabel:any = [];
  constructor(public router: Router) { }
  
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
     });

     $('#collapsed').simpleTreeTable({
      collapsed: true
      });
      
	});
  }
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"searchform":[{}],"listform":[{"name":"Name","exam":"Exam","quiz":"Quiz","homework":"HomeWork","projects":"Projects","total_weightage":"Total Weightage","marks":"Marks","total_marks":"Total Marks"}],"heading":[{"grade":"Grade","dashboard":"Dashboard"}]}],
      "Telugu":[{"searchform":[{}],"listform":[{"name":"పేరు","exam":"పరీక్షలో","quiz":"క్విజ్","homework":"ఇంటి పని","projects":"ప్రాజెక్టులు","total_weightage":"మొత్తం బరువు","marks":"మార్కులు","total_marks":"మొత్తం మార్కులు"}],"heading":[{"grade":"గ్రేడ్","dashboard":"డాష్బోర్డ్"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

