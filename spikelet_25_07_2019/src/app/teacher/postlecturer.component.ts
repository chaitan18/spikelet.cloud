import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-postlecturer',
  templateUrl: './postlecturer.component.html',
  styleUrls: ['./postlecturer.component.css']
})
export class TeacherPostlecturerComponent implements OnInit {
  datalabel:any = [];
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });
	});
  }
  public localisation_language:any;
  ngOnInit() {
    
    let data = {
      "English":[{"searchform":[{"search_criteria":"Search Criteria","add_descussion":"Add Discussion","bsearch":"Search","breset":"Reset","topic_number":"Topic Number","topic_numberpc":"Please Search Topic Number","topic_name":"Topic Name","topic_namepc":"Please Search Topic Name"}],"listform":[{"discussion_list":"Discussion List","daction":"Action","topic_number":"Topic Number","topic_name":"Topic Name"}],"heading":[{"discussion":"Discussion","dashboard":"Dashboard"}]}],
      "Telugu":[{"searchform":[{"search_criteria":"శోధన ప్రమాణాలు","add_descussion":"చర్చను జోడించండి","bsearch":"శోధన","breset":"రీసెట్","topic_number":"విషయం సంఖ్య","topic_numberpc":"దయచేసి టాపిక్ నంబర్ను శోధించండి","topic_name":"అంశం పేరు","topic_namepc":"దయచేసి అంశం పేరును శోధించండి"}],"listform":[{"discussion_list":"చర్చ జాబితా","daction":"యాక్షన్","topic_number":"విషయం సంఖ్య","topic_name":"అంశం పేరు"}],"heading":[{"post_class_behaviours":"పోస్ట్ క్లాస్ బిహేవియర్స్","dashboard":"డాష్బోర్డ్","class_wise_behaviour":"క్లాస్ వైజ్ బిహేవియర్"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];

 
  }

}

