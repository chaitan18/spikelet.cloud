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
  interface Array<T> {
    success: any;
  }
}
declare global {
  interface Array<T> {
    error: any;
  }
}

declare global {
  interface Window { _config: any; }
}
///declare var publish:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})

export class AdminBatchComponent implements OnInit {
  allTopics:any = [];
  datalabel:any = [];
  batch: any;
  Items:any;
  topiccout:any;
  editdetails:any;
  deleteitem:any;
  addmsgsucess:any;
  addmsgerror:any;
  updatemsgsucess:any;
  delmsgsucess:any;
  access_details:any;
  sbatchname:any;
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
  //error msg for add batch
  addbatcherrorMsg:any;
  addstartdateerrorMsg:any;
  addenddateerrorMsg:any;
  
  // paged items
  pagedItems: any[];
  ngOnInit() {
    setTimeout(() => {
      this.closealertmsg.nativeElement.click();
      }, 300);
    this.resetForm();
    this.listdata();
    this.addbatcherrorMsg= null;
    this.addstartdateerrorMsg=null;
    this.addenddateerrorMsg=null;
 
  }

  listdata(){
    let session_details = localStorage.getItem('login_session_details');
    this.access_details = $.parseJSON(session_details);
    let logsiddetails ={
            "userroleflag":"admin",
            "admincheckval": {
            "FilterExpression":"id = :id and refreshToken = :refreshToken", 
            "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
            },
            "methodrole": "batch",
            "method": "list",
            "payload": {
              "FilterExpression":'adminId = :adminId', 
              "ExpressionAttributeValues":{ ":adminId" : this.access_details.loginId }
            }
        };
        var lencryptpostval = new Buffer(JSON.stringify(logsiddetails)).toString('base64');
         var listvalue = {"send":lencryptpostval}
    this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',listvalue).subscribe((res : any[])=>{
   console.log(res);
    this.allTopics = res.Items;
    this.topiccout = res.Count;
    this.setPage(1);
    });  
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.batch = {
      batch_name: '',
      start_date:'',
      end_date:'',
      upbatchname:'',
      upstart_date:'',
      upend_date:'',
    }
  }

  OnSubmit(form: NgForm){
    let adderror=1;
    if (form.value.batch_name == "") {
      this.addbatcherrorMsg = "Please Enter The Batch Name";
      adderror=0;
    }else{
      this.addbatcherrorMsg="";
    }
    if (form.value.start_date == "") {
      this.addstartdateerrorMsg = "Please Enter The Start Date";
      adderror=0;
    }else{
      this.addstartdateerrorMsg="";
    }
    if (form.value.end_date == "") {
      this.addenddateerrorMsg = "Please Enter The End Date";
      adderror=0;
    }else{
      this.addenddateerrorMsg="";
    }
    if(adderror ==0){
      return;
    }

    
    let session_details = localStorage.getItem('login_session_details');
    this.access_details = $.parseJSON(session_details);
    let time = new Date();
      let timestamp = time.getTime();
     
    let tpoicid = this.topiccout+1;
    
    const createtopic ={
              "userroleflag":"admin",
              "admincheckval": {
              "FilterExpression":"id = :id and refreshToken = :refreshToken", 
              "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
              },
              "methodrole": "batch",
              "method": "create",
              "checkval": {
                "FilterExpression": "batchname = :batchname",
                "ExpressionAttributeValues": {
                  ":batchname": form.value.batch_name
                }
              },
              "payload": {
                "Item": {
                  "batchId": tpoicid,
                  "batchname": form.value.batch_name,
                  "startdate": form.value.start_date,
                  "enddate": form.value.end_date,
                  "status": "1",
                  "timestamp": timestamp,
                  "adminId": this.access_details.loginId
                }
            }
        }
        var cencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
         var createvalue = {"send":cencryptpostval}
    this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',createvalue).subscribe((res : any[])=>{
   console.log(res);
   if(res.success){
    this.addmsgsucess=res.success;
   }else if(res.error){
    this.addmsgerror=res.error;
   }
    this.resetForm();
    this.listdata();
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
                          "userroleflag":"admin",
                          "admincheckval": {
                          "FilterExpression":"id = :id and refreshToken = :refreshToken", 
                          "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
                          },
                          "methodrole": "batch",
                          "method": "update",
                          "payload": {
                          "Key":{
                              "batchId": this.editdetails.batchId
                          },
                          "UpdateExpression": "set batchname = :batchname,startdate = :startdate,enddate = :enddate",
                          "ExpressionAttributeValues":{
                              ":batchname":form.value.upbatchname,
                              ":startdate":form.value.upstart_date,
                              ":enddate":form.value.upend_date,
                          },
                          "ReturnValues":"UPDATED_NEW"
                        }
                      }   
       var uencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
         var updatevalue = {"send":uencryptpostval}
    this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',updatevalue).subscribe((res : any[])=>{
   console.log(res);
   this.updatemsgsucess=res.success;
    this.listdata();
    });
   }

   deleteselectItem(dId) {
    let deleteid = dId.batchId;
    this.deleteitem = deleteid;
    console.log(this.deleteitem);
  }

  
  deleteItem(){
    let session_details = localStorage.getItem('login_session_details');
    this.access_details = $.parseJSON(session_details);
    const createtopic ={
         "userroleflag":"admin",
          "admincheckval": {
          "FilterExpression":"id = :id and refreshToken = :refreshToken", 
          "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
          },
          "methodrole": "batch",
          "method": "delete",
          "payload": {
            "Key": {
              "batchId": this.deleteitem
            }
        }
    }
    var dencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
    var delvalue = {"send":dencryptpostval}
    this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',delvalue).subscribe((res : any[])=>{
      if(res.success){
        this.delmsgsucess=res.success;
       }else if(res.error){
        this.delmsgsucess=res.error;
       }
    this.listdata();
    this.triggerFalseClick();
    });
   }

   triggerFalseClick() {
    this.deleteClick.nativeElement.click();
    }
    //function to get items by search
    OnSearchSubmit(form: NgForm){
      let topic_name =form.value.sbatchname;
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
            "userroleflag":"admin",
            "admincheckval": {
            "FilterExpression":"id = :id and refreshToken = :refreshToken", 
            "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
            },
            "methodrole": "batch",
            "method": "list",
            "payload": {
              "FilterExpression": "contains (batchname,:t) and adminId = :adminId",
              "ExpressionAttributeValues":{ ":t" : topic_name ,":adminId" : this.access_details.loginId },
              
          }
      }
    }else{
      infotopics ={
            "userroleflag":"admin",
            "admincheckval": {
            "FilterExpression":"id = :id and refreshToken = :refreshToken", 
            "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
            },
            "methodrole": "batch",
            "method": "list",
            "payload": {
              "FilterExpression":'adminId = :adminId', 
              "ExpressionAttributeValues":{ ":adminId" : this.access_details.loginId }
          }
      }
    }
    
      var encryptpostval = new Buffer(JSON.stringify(infotopics)).toString('base64');
      var postvalue = {"send":encryptpostval}
     
      this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',postvalue).subscribe((res : any[])=>{
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
export class Batch {
  batch_name: string;
  start_date:string;
  end_date:string;
  upbatchname:string;
  upstart_date:string;
  upend_date:string;
  sbatchname:string;
  
}


