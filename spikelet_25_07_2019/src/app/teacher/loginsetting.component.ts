import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {UserLoginService} from "../service/user-login.service";
import {Callback, CognitoUtil,LoggedInCallback} from "../service/cognito.service";
import {UserParametersService} from "../service/user-parameters.service";

declare var $:any;
@Component({
  selector: 'app-teacherloginsetting',
  templateUrl: './loginsetting.component.html',
  styleUrls: ['./loginsetting.component.css']
})
export class TeacherLoginSittingComponent implements OnInit, LoggedInCallback {
  class: string='';
  subject: string ='';
  datalabel:any = [];
  
   title = 'ng 5';
   public parameters: Array<Parameters> = [];
    public cognitoId: String;
   constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService, public cognitoUtil: CognitoUtil) {
      this.userService.isAuthenticated(this);
    
    }

    
    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/teacher']);
        }else {
          //console.log(this.cognitoUtil);
          this.userParams.getParameters(new GetParametersCallback(this, this.cognitoUtil));
          
         // console.log("=======Testing===="+JSON.stringify(this.userParams));
      }
    }
  public localisation_language:any;
  public session_details:any;
  ngOnInit() {
    // let session_details = localStorage.getItem('login_details');
    //            console.log("Testinsgssss======"+JSON.stringify(session_details));
    let data = {
      "English":[{"menu":[{"teacher_select_class":"Teacher Select Class","next":"Next","home":"Home"}],"module":[{"grade_weightage":"Grade Weightage","quiz":"QUIZ","homeworks":"HOMEWORKS","projects":"PROJECTS","exams":"EXAMS","exam_type":"Exam Type","academic_calendar":"Academic Calendar","course_duration":"Course Duration","from_date":"From Date","end_date":"End Date","total_weightage":"Total Weightage","exam_name":"Exam Name","exam_date":"Exam Date","homework_name":"Homework Name","homework_date":"Homework Date","quiz_name":"Quiz Name","quiz_date":"Quiz Date","project_name":"Project Name","project_date":"Project Date","save":"Save","discussion":"Discussion","syllabus":"Syllabus","grades":"Grades","calendar":"Calendar","zoom":"Zoom","exam_details":"Exam Details","upload_youtube_videos":"Upload Youtube Videos","community_assignment":"Community Assignment","audio_files":"Audio files","post_class_behaviour":"Post Class Behaviour","student_performance":"Student Performance","vacancy_schedule":"Vacancy Schedule","post_lecturee_material":"Post Lecturer Material"}]}],
      "Telugu":[{"menu":[{"teacher_select_class":"గురువు ఎంచుకోండి క్లాస్","next":"తరువాత","home":"హోమ్"}],"module":[{"grade_weightage":"గ్రేడ్ వెయిటేజ్","quiz":"క్విజ్","homeworks":"ఇంటి పని","projects":"ప్రాజెక్ట్స్","exams":"పరీక్షలన్నింటికి","exam_type":"పరీక్షా పద్ధతి","academic_calendar":"విద్యా క్యాలెండర్","course_duration":"కోర్సు వ్యవధి","from_date":"తేదీ నుంచి","end_date":"ఆఖరి తేది","total_weightage":"మొత్తం బరువు","exam_name":"పరీక్ష పేరు","exam_date":"పరీక్ష తేదీ","homework_name":"ఇంటిపేరు పేరు","homework_date":"పథకం తేదీ","quiz_name":"క్విజ్ పేరు","quiz_date":"క్విజ్ తేదీ","project_name":"ప్రాజెక్ట్ పేరు","project_date":"ప్రాజెక్ట్ తేదీ","save":"సేవ్","discussion":"చర్చా","syllabus":"సిలబస్","grades":"తరగతులు","calendar":"క్యాలెండర్","zoom":"జూమ్","exam_details":"పరీక్షా వివరాలు","upload_youtube_videos":"Youtube వీడియోలు అప్లోడ్ చేయండి","community_assignment":"కమ్యూనిటీ అసైన్మెంట్","audio_files":"ఆడియో ఫైళ్లు","post_class_behaviour":"పోస్ట్ క్లాస్ బిహేవియర్","student_performance":"విద్యార్థి ప్రదర్శన","vacancy_schedule":"ఖాళీ షెడ్యూల్","post_lecturee_material":"పోస్ట్ లెక్చరర్ మెటీరియల్"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
  }

  OnSubmit(form: NgForm){
    //alert(JSON.stringify(form.value));
  console.log("=======Testing===="+JSON.stringify(form.value));
  if(form.value.class){

    if(form.value.subject){
     
      this.router.navigate(['/dashboard']); 

    }else{
      alert("Please select Subject");
    }
    
    
    
  }else{
    alert("Please select Class");
  }
   
     
   }

   
   ngAfterViewInit(){ 
    $(".conacform").on('change', function(){
     
      var classs = $("#class").val();
      var subject = $("#subject").val();
      
      if(classs !='' && subject !=''){
       
        $(".wrapper").hide();
        $(".addexam_hide").show();
      }else{
        $(".addexam_hide").hide();
        $(".wrapper").show();
      }
     
      
    })

    $(".cls_csc").on('click', function(){
     
      $(".addexam_hide").hide();
        $(".wrapper").show();
    })

    
   }

}
export class Parameters {
  name: string;
  value: string;
}

export class GetParametersCallback implements Callback {

  constructor(public me: TeacherLoginSittingComponent, public cognitoUtil: CognitoUtil) {

  }

  callback() {

  }

  callbackWithParam(result: any) {
    // console.log("=======Testing===="+JSON.stringify(result));
      for (let i = 0; i < result.length; i++) {
          let parameter = new Parameters();
          parameter.name = result[i].getName();
          parameter.value = result[i].getValue();
          this.me.parameters.push(parameter);
      }
      let param = new Parameters()
      param.name = "cognito ID";
      param.value = this.cognitoUtil.getCognitoIdentity();
      this.me.parameters.push(param)
  }
}

