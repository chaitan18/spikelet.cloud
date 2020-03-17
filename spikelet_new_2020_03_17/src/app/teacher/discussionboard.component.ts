import { Component, OnInit , ElementRef ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';
import { PagerService } from '../_services/index';
import * as CryptoJS from 'crypto-js';
// import * as crypto from "crypto";
// import * as crypto from 'crypto-js';
// import * as crypto from "crypto";
declare var $:any;
declare global {
  interface Array<T> {
    Items(): any;
  }
}
declare global {
  interface Array<T> {
    Count(): any;
  }
}
declare global {
  interface Window { _config: any; }
}
///declare var publish:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherdiscussion',
  templateUrl: './discussionboard.component.html',
  styleUrls: ['./discussionboard.component.css']
})

export class TeacherDiscussionComponent implements OnInit {
  allTopics:any = [];
  datalabel:any = [];
  user: any;
  Items:any;
  topiccout:any;
  editdetails:any;
  deleteitem:any;
  addmsgsucess:any;
  updatemsgsucess:any;
  delmsgsucess:any;
  access_details:any;
  // publish:string="NO";
  @ViewChild('deleteClick') deleteClick: ElementRef;
  @ViewChild('closealertmsg') closealertmsg: ElementRef;
  constructor(public router: Router,private httpClient : HttpClient,private pagerService: PagerService) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
     });
	});
  }
  public localisation_language:any;
  pager: any = {};

  // paged items
  pagedItems: any[];
  ngOnInit() {
    setTimeout(() => {
      this.closealertmsg.nativeElement.click();
      }, 300);


    this.httpClient.post('https://mg9tfi5oqc.execute-api.us-east-2.amazonaws.com/contentmangement',{}).subscribe((label : any[])=>{
      
    //https://mg9tfi5oqc.execute-api.us-east-2.amazonaws.com/contentmangement
    //[{"search_criteria":"Search Criteria","add_descussion":"Add Discussion","bsearch":"Search","breset":"Reset","topic_number":"Topic Number","topic_numberpc":"Please Search Topic Number","topic_name":"Topic Name","topic_namepc":"Please Search Topic Name","discussion_list":"Discussion List","daction":"Action"}]
    // let data = {
    //       "English":[{"searchform":[{"search_criteria":"Search Criteria","add_descussion":"Add Discussion","bsearch":"Search","breset":"Reset","topic_number":"Topic Number","topic_numberpc":"Please Search Topic Number","topic_name":"Topic Name","topic_namepc":"Please Search Topic Name"}],"listform":[{"discussion_list":"Discussion List","daction":"Action","topic_number":"Topic Number","topic_name":"Topic Name"}],"heading":[{"discussion":"Discussion","dashboard":"Dashboard"}]}],
    //       "Telugu":[{"searchform":[{"search_criteria":"శోధన ప్రమాణాలు","add_descussion":"చర్చను జోడించండి","bsearch":"శోధన","breset":"రీసెట్","topic_number":"విషయం సంఖ్య","topic_numberpc":"దయచేసి టాపిక్ నంబర్ను శోధించండి","topic_name":"అంశం పేరు","topic_namepc":"దయచేసి అంశం పేరును శోధించండి"}],"listform":[{"discussion_list":"చర్చ జాబితా","daction":"యాక్షన్","topic_number":"విషయం సంఖ్య","topic_name":"అంశం పేరు"}],"heading":[{"discussion":"చర్చ","dashboard":"డాష్బోర్డ్"}]}]    
    //     }
        let data = label;
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];

    console.log(label);
  }); 
    this.resetForm();
    this.listdiscussion();
    // let session_details = localStorage.getItem('login_session_details');
    // this.access_details = $.parseJSON(session_details);
  }

  listdiscussion(){
    let session_details = localStorage.getItem('login_session_details');
    this.access_details = $.parseJSON(session_details);
    var dataset = [{id: 1}, {id: 2}];
    
    
    let logsiddetails ={
            "userroleflag":"teacher",
            "checkval": {
            "FilterExpression":"id = :id and refreshToken = :refreshToken", 
            "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
            },
            "operation": "list",
            "payload": {
              "FilterExpression":'teacherId = :teacherId', 
              "ExpressionAttributeValues":{ ":teacherId" : this.access_details.loginId }
          }
        };
        var lencryptpostval = new Buffer(JSON.stringify(logsiddetails)).toString('base64');
         var listvalue = {"send":lencryptpostval}
    this.httpClient.post('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist',listvalue).subscribe((res : any[])=>{
   console.log(res);
    this.allTopics = res.Items;
    this.topiccout = res.Count;
    this.setPage(1);
    });  
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      topicname: '',
      topicid:'',
      publish:'NO'
    }
  }

  OnSubmit(form: NgForm){
    //console.log("=======Testing===="+JSON.stringify(form.value));
    let session_details = localStorage.getItem('login_session_details');
    this.access_details = $.parseJSON(session_details);
    ///console.log(this.access_details);
    let tpoicid = this.topiccout+1;
    const createtopic ={
              "userroleflag":"teacher",
              "checkval": {
              "FilterExpression":"id = :id and refreshToken = :refreshToken", 
              "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
              },
              "operation": "create",
              "payload": {
                "Item": {
                  "id": tpoicid,
                  "topicname": form.value.topicname,
                  "publish": form.value.publish,
                  "teacherId": this.access_details.loginId
                }
            }
        }
        var cencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
         var createvalue = {"send":cencryptpostval}
    this.httpClient.post('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist',createvalue).subscribe((res : any[])=>{
   console.log(res);
    this.addmsgsucess="Topic Name Created Successfully";
    this.resetForm();
    this.listdiscussion();
    });
     
   }

   showForEdit(emp) {
    let dedit = Object.assign({}, emp);
    this.editdetails = dedit;
    console.log(this.editdetails);
  }

  OnEditSubmit(form: NgForm){
    let session_details = localStorage.getItem('login_session_details');
    this.access_details = $.parseJSON(session_details);
    console.log("=======Testing===="+JSON.stringify(form.value));
    const createtopic ={
                          "userroleflag":"teacher",
                          "checkval": {
                          "FilterExpression":"id = :id and refreshToken = :refreshToken", 
                          "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
                          },
                          "operation": "update",
                          "payload": {
                          "Key":{
                              "id": this.editdetails.id
                          },
                          "UpdateExpression": "set topicname = :topicname,publish = :publish",
                          "ExpressionAttributeValues":{
                              ":topicname":form.value.topicname,
                              ":publish":"YES",
                          },
                          "ReturnValues":"UPDATED_NEW"
                        }
                      }   
       var uencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
         var updatevalue = {"send":uencryptpostval}
    this.httpClient.post('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist',updatevalue).subscribe((res : any[])=>{
   console.log(res);
   this.updatemsgsucess="Topic Name Updated Successfully";
    this.listdiscussion();
    });
   }

   deleteselectItem(dId) {
    let deleteid = dId.id;
    this.deleteitem = deleteid;
    console.log(this.deleteitem);
  }


  deleteItem(){
    let session_details = localStorage.getItem('login_session_details');
    this.access_details = $.parseJSON(session_details);
    const createtopic ={
          "userroleflag":"teacher",
          "checkval": {
          "FilterExpression":"id = :id and refreshToken = :refreshToken", 
          "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
          },
          "operation": "delete",
          "payload": {
            "Key": {
              "id": this.deleteitem
            }
        }
    }
    var dencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
    var delvalue = {"send":dencryptpostval}
    this.httpClient.post('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist',delvalue).subscribe((res : any[])=>{
   console.log(res);
    this.delmsgsucess="Topic Name Deleted Successfully";
    this.listdiscussion();
    this.triggerFalseClick();
    });
   }

   triggerFalseClick() {
    this.deleteClick.nativeElement.click();
    }
    //function to get items by search
    OnSearchSubmit(form: NgForm){
      let topic_name =form.value.topicname;
      let infotopics;
      let session_details = localStorage.getItem('login_session_details');
      this.access_details = $.parseJSON(session_details);
      if(topic_name) {
        // infotopics ={
        //     "operation": "list",
        //     "payload": {
        //       "FilterExpression":'topicname = :topicname', 
        //       "ExpressionAttributeValues":{ ":topicname" : topic_name }
        //   }

          infotopics ={
            "userroleflag":"teacher",
            "checkval": {
            "FilterExpression":"id = :id and refreshToken = :refreshToken", 
            "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
            },    
            "operation": "list",
            "payload": {
              "FilterExpression": "contains (topicname,:t) and teacherId = :teacherId",
              "ExpressionAttributeValues":{ ":t" : topic_name ,":teacherId" : this.access_details.loginId },
              
          }
      }
    }else{
      infotopics ={
              "userroleflag":"teacher",
              "checkval": {
              "FilterExpression":"id = :id and refreshToken = :refreshToken", 
              "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
              },
            "operation": "list",
            "payload": {
              "FilterExpression":'teacherId = :teacherId', 
              "ExpressionAttributeValues":{ ":teacherId" : this.access_details.loginId }
          }
      }
    }
    
      var encryptpostval = new Buffer(JSON.stringify(infotopics)).toString('base64');
      var postvalue = {"send":encryptpostval}
     
      this.httpClient.post('https://bs95henbga.execute-api.us-east-2.amazonaws.com/discussionlist/discussionlist',postvalue).subscribe((res : any[])=>{
         console.log(res);
        this.allTopics = res.Items;
        this.topiccout = res.Count;
        this.setPage(1);
    });
    }
    //Fuction to get the pagination
    setPage(page: number) {
      // get pager object from service
      this.pager = this.pagerService.getPager(this.allTopics.length, page);
      // console.log(this.pager);
      // get current page of items
      this.pagedItems = this.allTopics.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
export class User {
  topicname: string;
  publish:string;
  topicid:number;
  
}


