import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherspikeletquestions',
  templateUrl: './spikeletquestions.component.html',
  styleUrls: ['./spikeletquestions.component.css']
})
export class TeacherSpikeletquestionsComponent implements OnInit {
  datalabel:any = [];
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
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"searchform":[{"search_criteria":"Search Criteria","topic":"Topic","subtopic":"Sub Topic","quiz_type":"Select Quiz Type","quiz_name":"Quiz Name","quiz_namepc":"Please Search Quiz Name","bsearch":"Search","breset":"Reset"}],"listform":[{"question_list":"Question List","action":"Actions","quiz_number":"Quiz Number","question":"Question","option1":"Option 1","option2":"Option 2","option3":"Option 3","option4":"Option 4","correction":"Correction"}],"heading":[{"squestion_list":"Spikelet Question List","dashboard":"Dashboard",}],"module":[{"update_question":"Update Question","topic":"Topic","sub_topic":"Sub Topic","quiz_type":"Select Quiz Type","question_name":"Question Name","option1":"Option 1","option2":"Option 2","option3":"Option 3","option4":"Option 4","correction":"Correction","hint":"Hint","cancel":"Cancel","update":"Update"}]}],
      "Telugu":[{"searchform":[{"search_criteria":"శోధన ప్రమాణాలు","topic":"విషయం","subtopic":"ఉప విషయం","quiz_type":"క్విజ్ టైప్ ఎంచుకోండి","quiz_name":"క్విజ్ పేరు","quiz_namepc":"దయచేసి క్విజ్ పేరును శోధించండి","bsearch":"శోధన","breset":"రీసెట్"}],"listform":[{"question_list":"ప్రశ్న జాబితా","action":"చర్యలు","quiz_number":"క్విజ్ సంఖ్య","question":"ప్రశ్న","option1":"ఎంపిక 1","option2":"ఎంపిక 2","option3":"ఎంపిక 3","option4":"ఎంపిక 4","correction":"దిద్దుబాటు"}],"heading":[{"squestion_list":"Spikelet ప్రశ్న జాబితా","dashboard":"డాష్బోర్డ్",}],"module":[{"update_question":"ప్రశ్నను నవీకరించండి","topic":"విషయం","sub_topic":"ఉప విషయం","quiz_type":"క్విజ్ టైప్ ఎంచుకోండి","question_name":"ప్రశ్న పేరు","option1":"ఎంపిక 1","option2":"ఎంపిక 2","option3":"ఎంపిక 3","option4":"ఎంపిక 4","correction":"దిద్దుబాటు","hint":"సూచన","cancel":"రద్దు","update":"నవీకరణ"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

