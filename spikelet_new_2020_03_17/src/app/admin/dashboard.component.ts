import { Component, OnInit ,ViewChild ,ElementRef} from '@angular/core';
// import { HttpClient } from '@angular/common/http';

declare var $:any;
declare var vis:any;
;
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
    
    datalabel:any = [];
    timeline: any;
    data: any;
    options: {};
    Language:any;
    baseUrl:string = "http://localhost:3000";
    datagradeweightageservice:any;
    getgradeweightageservice:any =  []; 
    getacademiccalendar:any =[]; 
    @ViewChild("label") container: ElementRef;
   // public getgradeweightageservice  = []; 
  constructor(public router: Router) { }
  
  

  public logdetails:any;
  
     public localisation_language:any;
  ngOnInit() {
    let data = {
        "English":[{"heading":[{"dashboard":"Dashboard",}],"module":[{"grade_weightage":"Grade Weightage","quiz":"QUIZ","homeworks":"HOMEWORKS","projects":"PROJECTS","exams":"EXAMS","exam_type":"Exam Type","academic_calendar":"Academic Calendar","course_duration":"Course Duration","from_date":"From Date","end_date":"End Date","total_weightage":"Total Weightage","exam_name":"Exam Name","exam_date":"Exam Date","homework_name":"Homework Name","homework_date":"Homework Date","quiz_name":"Quiz Name","quiz_date":"Quiz Date","project_name":"Project Name","project_date":"Project Date","save":"Save","discussion":"Discussion","syllabus":"Syllabus","grades":"Grades","calendar":"Calendar","zoom":"Zoom","exam_details":"Exam Details","upload_youtube_videos":"Upload Youtube Videos","community_assignment":"Community Assignment","audio_files":"Audio files","post_class_behaviour":"Post Class Behaviour","student_performance":"Student Performance","vacancy_schedule":"Vacancy Schedule","post_lecturee_material":"Post Lecturer Material"}]}],
        "Telugu":[{"heading":[{"dashboard":"డాష్బోర్డ్",}],"module":[{"grade_weightage":"గ్రేడ్ వెయిటేజ్","quiz":"క్విజ్","homeworks":"ఇంటి పని","projects":"ప్రాజెక్ట్స్","exams":"పరీక్షలన్నింటికి","exam_type":"పరీక్షా పద్ధతి","academic_calendar":"విద్యా క్యాలెండర్","course_duration":"కోర్సు వ్యవధి","from_date":"తేదీ నుంచి","end_date":"ఆఖరి తేది","total_weightage":"మొత్తం బరువు","exam_name":"పరీక్ష పేరు","exam_date":"పరీక్ష తేదీ","homework_name":"ఇంటిపేరు పేరు","homework_date":"పథకం తేదీ","quiz_name":"క్విజ్ పేరు","quiz_date":"క్విజ్ తేదీ","project_name":"ప్రాజెక్ట్ పేరు","project_date":"ప్రాజెక్ట్ తేదీ","save":"సేవ్","discussion":"చర్చా","syllabus":"సిలబస్","grades":"తరగతులు","calendar":"క్యాలెండర్","zoom":"జూమ్","exam_details":"పరీక్షా వివరాలు","upload_youtube_videos":"Youtube వీడియోలు అప్లోడ్ చేయండి","community_assignment":"కమ్యూనిటీ అసైన్మెంట్","audio_files":"ఆడియో ఫైళ్లు","post_class_behaviour":"పోస్ట్ క్లాస్ బిహేవియర్","student_performance":"విద్యార్థి ప్రదర్శన","vacancy_schedule":"ఖాళీ షెడ్యూల్","post_lecturee_material":"పోస్ట్ లెక్చరర్ మెటీరియల్"}]}]    
      }
      this.localisation_language = localStorage.getItem('language_localisation');
      this.datalabel = data[this.localisation_language][0];
      this.get_products();
      this.academiccalendar();
      //console.log(this.getgradeweightageservice);
      

      let  getacademiccalendar ={"academiccalendar":[
        {
         "examtypes":[
          {
            "name": "Exams"
          },
          {
            "name":"Home Work"
          },
          {
            "name":"Quiz"
          },
          {
            "name":"Projects"
          }
         
         ],
         "examdates":[
          
            {
              "id": 1,
              "content": "Exam 1",
              "start": "2019-04-20"
            },
            {
              "id": 2,
              "content": "Exam 1",
              "start": "2019-04-14"
            },
            {
              "id": 3,
              "content": "Quiz 1",
              "start": "2019-04-18"
            },
            {
              "id": 4,
              "content": "Quiz 2",
              "start": "2019-04-16"
            },
            {
              "id": 5,
              "content": "Home Work 1",
              "start": "2019-04-25"
              
            },
            {
              "id": 6,
              "content": "Home Work 2",
              "start": "2019-04-27"
            }
          
         ]
        } 
    ]}
   
  }

  
get_products(){

this.getgradeweightageservice = [  
    {
      "quiz": 10,
      "homeworks":25,
      "projects":10,
      "exams":30
      }
    ]
     /// console.log(datagradeweightageservice);
// this.httpClient.get(this.baseUrl + '/gradeweightage').subscribe((res : any[])=>{
//    console.log(res);
//     this.getgradeweightageservice = res;
//     });   

// this.httpClient.get('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist').subscribe((res : any[])=>{
//    console.log(res);
//    // this.getgradeweightageservice = res;
//     }); 
// let body = new FormData();
//     body.append('operation', 'list');
//     body.append('tableName', 'discussion');
//     body.append('payload', '');
// this.httpClient.post('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist',{"operation": "create","payload": {"Item": {"id": 2,"topicname": "Bob"}}}).subscribe((res : any[])=>{
//    console.log(res);
//     //this.getgradeweightageservice = res;
//     });
// this.httpClient.post('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist',{"operation": "create","payload": {"Item": {"id": 2,"topicname": "Bob"}}}).subscribe((res : any[])=>{
//    console.log(res);
//     //this.getgradeweightageservice = res;
//     });  
}

academiccalendar(){
    this.getacademiccalendar=[
        {
         "examtypes":[
          {
            "name": "Exams"
          },
          {
            "name":"Home Work"
          },
          {
            "name":"Quiz"
          },
          {
            "name":"Projects"
          }
         
         ],
         "examdates":[
          
            {
              "id": 1,
              "content": "Exam 1",
              "start": "2019-04-20"
            },
            {
              "id": 2,
              "content": "Exam 1",
              "start": "2019-04-14"
            },
            {
              "id": 3,
              "content": "Quiz 1",
              "start": "2019-04-18"
            },
            {
              "id": 4,
              "content": "Quiz 2",
              "start": "2019-04-16"
            },
            {
              "id": 5,
              "content": "Home Work 1",
              "start": "2019-04-25"
              
            },
            {
              "id": 6,
              "content": "Home Work 2",
              "start": "2019-04-27"
            }
          
         ]
        } 
    ]
// this.httpClient.get(this.baseUrl + '/academiccalendar').subscribe((res : any[])=>{
//     //console.log(res);
//     this.getacademiccalendar = res;
//     });   
}  
        ngAfterViewInit(){ 
    
            $(document).ready(function(){
             
              $('#menuToggle').on('click', function(event) {
                $('body').toggleClass('open');
              });
   
              $(".close").click(function(){
              $(".addexam_hide").hide();
              });
              $(".add_exam").click(function(){
              $(".addexam_hide").show();
              $('#from_date').datepick();
              $('#end_date').datepick();
              $('#exam_date').datepick();
              $('#homework_date').datepick();
              $('#quiz_date').datepick();
              $('#project_date').datepick();
              });
              this.logdetails = localStorage.getItem('studentaccesstoken');
             
              if(this.logdetails !='STUDENT_ACCESS_TOKEN'){
              var SufeeAdmin = {
                  pieFlot: function(){
                      var data = [
                         {
                              label: "QUIZ",
                              data: $("#quiz_weightage").val(),
                              color: "gray"
                          },
                          {
                              label: "HOMEWORKS",
                              data: $("#homework_weightage").val(),
                              color: "#DC3545"
                          },
                          {
                              label: "PROJECTS",
                              data: $("#projcet_weightage").val(),
                              color: "#ad4bde"
                          },
                          {
                              label: "EXAMS",
                              data: $("#exam_weightage").val(),
                              color: "#8fc9fb"
                          }
                          
                      ];
   
                      var plotObj = $.plot( $( "#flot-pie" ), data, {
                          series: {
                              pie: {
                                  show: true,
                                  radius: 1,
                                  label: {
                                      show: false,
   
                                  }
                              }
                          },
                          grid: {
                              hoverable: true
                          },
                          tooltip: {
                              show: true,
                              content: "%p.0%, %s", // , n=%n show percentages, rounding to 2 decimal places
                              shifts: {
                                  x: 20,
                                  y: 0
                              },
                              defaultTheme: false
                          }
                      } );
                  }
              };
              SufeeAdmin.pieFlot();
              }
   
           });
   
           // create a timeline with some data
       //   var txtData = document.getElementById('data') as HTMLInputElement;
       //   var btnSave = document.getElementById('save');
       //   var textloaddata = JSON.parse(txtData.value);
       //   var container = document.getElementById('visualization');
       //   var items = new vis.DataSet();
       //   var options = { editable: true };
       //   var timeline = new vis.Timeline(container, items, options);
       
       //  function loadData () { 
       //   var data = JSON.parse(txtData.value);
       //   items.clear();
       //   items.add(data);
       //   timeline.fit();
       //  }
       //   /**
       //    * Move the timeline a given percentage to left or right
       //    * @param {Number} percentage   For example 0.1 (left) or -0.1 (right)
       //    */
       //   function move (percentage) {
       //       var range = timeline.getWindow();
       //       var interval = range.end - range.start;
     
       //       timeline.setWindow({
       //           start: range.start.valueOf() - interval * percentage,
       //           end:   range.end.valueOf()   - interval * percentage
       //       });
       //   }
     
        
       //   document.getElementById('zoomIn').onclick    = function () { timeline.zoomIn( 0.2); };
       //   document.getElementById('zoomOut').onclick   = function () { timeline.zoomOut( 0.2); };
       //   document.getElementById('moveLeft').onclick  = function () { move( 0.2); };
       //   document.getElementById('moveRight').onclick = function () { move(-0.2); };
        
       //   function saveData() {
       //   var data = items.get({
       //     type: {
       //       start: 'ISODate',
       //       end: 'ISODate'
       //     }
       //   });
       //   txtData.value = JSON.stringify(data, null, 2);
       //   loadData();
       // }
       // btnSave.onclick = saveData;
       // // load the initial data
       // loadData(); 
   
         // create a couple of HTML items in various ways
   
           var item1 = document.createElement('div');
           item1.appendChild(document.createTextNode('Exam 1'));
   
           var item2 = document.createElement('div');
           item2.innerHTML = '<span>Exam 2</span>';
   
           var item3 = document.createElement('div');
           var span3 = document.createElement('span');
           span3.className = 'large';
           span3.appendChild(document.createTextNode('Quiz 1'));
           item3.appendChild(span3);
   
           var item4 = 'Quiz 2 <br><a href="spikelet" style="color:white;" >click here</a>';
   
           // var item5 = document.createElement('div');
           // item5.appendChild(document.createTextNode('item 5'));
           // item5.appendChild(document.createElement('br'));
           // var img5 = document.createElement('img');
           // img5.src = '../resources/img/attachment-icon.png';
           // img5.style.width = '48px';
           // img5.style.height = '48px';
           // item5.appendChild(img5);
           // <br><img src="../resources/img/comments-icon.png" style="width: 48px; height: 48px;">
           var item6 = 'Home Work 1';
           
           var item7 = 'Home Work 2<br><a href="posthomework" style="color:white;" >click here</a>';
   
           // create data and a Timeline
           var container = document.getElementById('visualization');
           var items = new vis.DataSet([
               {id: 1, content: item1, start: '2019-04-20'},
               {id: 2, content: item2, start: '2019-04-14'},
               {id: 3, content: item3, start: '2019-04-18'},
               {id: 4, content: item4, start: '2019-04-16'},
               // {id: 5, content: item5, start: '2013-04-25'},
               {id: 6, content: item6, start: '2019-04-25'},
               {id: 7, content: item7, start: '2019-04-27'}
           ]); 
          // var txtData = document.getElementById('data') as HTMLInputElement;
          // var textloaddata = JSON.parse(txtData.value);
           //var items = new vis.DataSet(textloaddata);
           var options = {editable: true };
           var timeline = new vis.Timeline(container, items, options);
           function move (percentage) {
                 var range = timeline.getWindow();
                 var interval = range.end - range.start;
           
                 timeline.setWindow({
                     start: range.start.valueOf() - interval * percentage,
                     end:   range.end.valueOf()   - interval * percentage
                 });
           }
   
           document.getElementById('zoomIn').onclick    = function () { timeline.zoomIn( 0.2); };
           document.getElementById('zoomOut').onclick   = function () { timeline.zoomOut( 0.2); };
           document.getElementById('moveLeft').onclick  = function () { move( 0.2); };
           document.getElementById('moveRight').onclick = function () { move(-0.2); };
   
        }
  

}

    
   
