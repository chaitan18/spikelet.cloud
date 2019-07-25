import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-sidebarheader',
  templateUrl: './sidebarheader.component.html',
  styleUrls: ['./sidebarheader.component.css']
})

export class SidebarHeaderComponent {
  datalabel:any = [];
  access_details:any;
  
  constructor(public router: Router) {

    }
    public userroleflag:any;
    public logdetails:any;
    public localisation_language:any;
    ngOnInit() {
      let time = new Date();
      let timestamp = time.getTime();
      console.log("timestamp===="+timestamp);
      this.logdetails = localStorage.getItem('studentaccesstoken');
      let data = {
        "English":[{"menu":[{"dashboard":"Dashboard","discussion":"Discussion","syllabus":"Syllabus","grades":"Grades","calendar":"Calendar","zoom":"Zoom","exam_details":"Exam Details","upload_youtube_videos":"Upload Youtube Videos","community_assignment":"Community Assignment","audio_files":"Audio files","post_class_behaviour":"Post Class Behaviour","student_performance":"Student Performance","vacancy_schedule":"Vacancy Schedule","post_lecturee_material":"Post Lecturer Material"}]}],
        "Telugu":[{"menu":[{"dashboard":"డాష్బోర్డ్","discussion":"చర్చా","syllabus":"సిలబస్","grades":"తరగతులు","calendar":"క్యాలెండర్","zoom":"జూమ్","exam_details":"పరీక్షా వివరాలు","upload_youtube_videos":"Youtube వీడియోలు అప్లోడ్ చేయండి","community_assignment":"కమ్యూనిటీ అసైన్మెంట్","audio_files":"ఆడియో ఫైళ్లు","post_class_behaviour":"పోస్ట్ క్లాస్ బిహేవియర్","student_performance":"విద్యార్థి ప్రదర్శన","vacancy_schedule":"ఖాళీ షెడ్యూల్","post_lecturee_material":"పోస్ట్ లెక్చరర్ మెటీరియల్"}]}]    
      }
      this.localisation_language = localStorage.getItem('language_localisation');
      this.datalabel = data[this.localisation_language][0];
      let session_details = localStorage.getItem('login_session_details');
      this.access_details = $.parseJSON(session_details);
      this.userroleflag=this.access_details.userroleflag;
      console.log("this.access_details========"+this.access_details.userroleflag);
    }
}