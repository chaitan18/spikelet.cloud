import { Component, OnInit , ElementRef ,ViewChild} from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { PagerService } from '../_services/index';
import * as CryptoJS from 'crypto-js';
import { MatHorizontalStepper } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
export interface Food {
  value: string;
  display: string;
}
declare global {
  interface Array<T> {
    success: any;
  }
}
declare global {
  interface Array<T> {
    dbdata: any;
  }
}

declare global {
  interface Array<T> {
    error: any;
  }
}


declare var $:any;
//declare var stepper:any;
///declare var publish:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-batchad',
  templateUrl: './batchad.component.html',
  styleUrls: ['./batchad.component.css']
})

export class AdminBatchadComponent implements OnInit {

  tab = 1;
	keepSorted = true;
	key: string;
	display: any;
	filter = false;
	source: Array<any>;
	confirmed: Array<any>;
	userAdd = '';
	disabled = false;

	sourceLeft = true;
	format: any = DualListComponent.DEFAULT_FORMAT;

	private sourceTube: Array<string>;
	private sourceStations: Array<any>;
	private sourceChessmen: Array<any>;

	private confirmedTube: Array<string>;
	private confirmedStations: Array<any>;
	private confirmedChessmen: Array<any>;

	arrayType = [
		{ name: 'Rio Grande', detail: '(object array)', value: 'station' },
		{ name: 'Chessmen', detail: '(object array)', value: 'chess' },
		{ name: 'Underground', detail: '(string array)', value: 'tube' }
	];

	type = this.arrayType[0].value;

	private stations: Array<any> = [
		{ key: 1, station: 'Mathematics', state: 'CO' },
		{ key: 2, station: 'Telugu', state: 'NM' },
		{ key: 3, station: 'Hindi', state: 'NM' },
		{ key: 4, station: 'Sanskrit', state: 'NM' },
		{ key: 5, station: 'English', state: 'CO' },
		{ key: 6, station: 'EVS', state: 'NM'},
		{ key: 7, station: 'General Science', state: 'NM' },
		{ key: 8, station: 'Physical Science', state: 'NM' },
		{ key: 9, station: 'Biology', state: 'NM' },
		{ key: 10, station: 'Social Science', state: 'NM' },
		{ key: 11, station: 'Value Education & Life Skills', state: 'CO' },
		{ key: 12, station: 'Art Education', state: 'CO' },
		{ key: 13, station: 'Health and Physical', state: 'CO' },
		{ key: 14, station: 'Computer Education', state: 'CO' },
		{ key: 15, station: 'Sports', state: 'CO' },
		{ key: 16, station: 'Work Education', state: 'CO' },
		{ key: 17, station: 'Non-Teaching', state: 'CO' },
		{ key: 18, station: 'Cultural Education', state: 'CO' },
		{ key: 19, station: 'Music', state: 'CO' },
		{ key: 20, station: 'Biscuit Making', state: 'BM' },
		{ key: 21, station: 'Art and Cultural Education', state: 'AC' },
		{ key: 22, station: 'Work and Computer Education', state: 'WC' }
	];

	private chessmen: Array<any> = [
		{ _id: 1, name: 'Pawn' },
		{ _id: 2, name: 'Rook' },
		{ _id: 3, name: 'Knight' },
		{ _id: 4, name: 'Bishop' },
		{ _id: 5, name: 'Queen' },
		{ _id: 6, name: 'King' }
	];

	private tube: Array<string> = [
		'Harrow & Wealdstone',
		'Kenton',
		'South Kenton',
		'North Wembley',
		'Wembley Central',
		'Stonebridge Park',
		'Harlesden',
		'Willesden Junction',
		'Kensal Green',
		"Queen's Park",
		'Kilburn Park',
		'Maida Vale',
		'Warwick Avenue',
		'Paddington',
		'Edgware Road',
		'Marylebone',
		'Baker Street',
		"Regent's Park",
		'Oxford Circus',
		'Piccadilly Circus',
		'Charing Cross',
		'Embankment',
		'Waterloo',
		'Lambeth North',
		'Elephant & Castle'
  ];
  
  //private stepper: any;
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;
  firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   batchdbdata:any;
   topiccout:any;
   access_details:any;
  //error msg for add batch
  bwsItemserrorMsg:any;
  addbatcherrorMsg:any;
  addstartdateerrorMsg:any;
  addenddateerrorMsg:any;
  addmsgsucess:any;
  addmsgerror:any;
  interests:any;
  selected: any;
  constructor(private spinnerService: Ng4LoadingSpinnerService,public router: Router,private httpClient : HttpClient,private pagerService: PagerService,private _formBuilder: FormBuilder,private formBuilder: FormBuilder) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
     });

  });
  
  }
  // paged items
  ngOnInit() {
    this.doReset();
    this.spinnerService.show();
    //setTimeout(()=>this.spinnerService.hide(),3000)
    this.addbatcherrorMsg= null;
    this.addstartdateerrorMsg=null;
    this.addenddateerrorMsg=null;
    this.bwsItemserrorMsg=null;
    // this.listdata();
    this.firstFormGroup = this._formBuilder.group({
      // batch_name: ['', Validators.required]
      batch_name: ['']
   });
   this.secondFormGroup = this._formBuilder.group({
      batchitemCtrl: [''],
      batchId:[''],
      interests: this.formBuilder.array([])
   });
   setTimeout((res) => {
    this.interests = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  }); 
   
  }

  
private stationLabel(item: any) {
  return item.station + ', ' + item.state;
}

private useStations() {
  this.key = 'key';
  this.display = this.stationLabel;
  this.keepSorted = true;
  this.source = this.sourceStations;
  this.confirmed = this.confirmedStations;
}

private useChessmen() {
  this.key = '_id';
  this.display = 'name';
  this.keepSorted = false;
  this.source = this.sourceChessmen;
  this.confirmed = this.confirmedChessmen;
}

private useTube() {
  this.key = undefined;
  this.display = undefined;
  this.keepSorted = false;
  this.source = this.sourceTube;
  this.confirmed = this.confirmedTube;
}

swapSource() {
  switch (this.type) {
  case this.arrayType[0].value:
    this.useStations();
    break;
  case this.arrayType[1].value:
    this.useChessmen();
    break;
  case this.arrayType[2].value:
    this.useTube();
    break;
  }
}

doReset() {
  this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
  this.sourceStations = JSON.parse(JSON.stringify(this.stations));
  this.sourceTube = JSON.parse(JSON.stringify(this.tube));
  this.confirmedChessmen = new Array<any>();
  this.confirmedStations = new Array<any>();
  this.confirmedTube = new Array<string>();

  // Preconfirm some items.
  this.confirmedStations.push( this.stations[31] );
  this.confirmedTube.push( this.tube[13] );
  this.confirmedTube.push( this.tube[23] );

  switch (this.type) {
  case this.arrayType[0].value:
    this.useStations();
    break;
  case this.arrayType[1].value:
    this.useChessmen();
    break;
  case this.arrayType[2].value:
    this.useTube();
    break;
  }
}

doDelete() {
  if (this.source.length > 0) {
    this.source.splice(0, 1);
  }
}

doCreate() {
  if (typeof this.source[0] === 'object') {
    const o = {};
    o[this.key] = this.source.length + 1;
    o[this.display] = this.userAdd;
    this.source.push( o );
  } else {
    this.source.push(this.userAdd);
  }
  this.userAdd = '';
}

doAdd() {
  for (let i = 0, len = this.source.length; i < len; i += 1) {
    const o = this.source[i];
    const found = this.confirmed.find( (e: any) => e === o );
    if (!found) {
      this.confirmed.push(o);
      break;
    }
  }
}

doRemove() {
  if (this.confirmed.length > 0) {
    this.confirmed.splice(0, 1);
  }
}

doFilter() {
  this.filter = !this.filter;
}

filterBtn() {
  return (this.filter ? 'Hide Filter' : 'Show Filter');
}

doDisable() {
  this.disabled = !this.disabled;
}

disableBtn() {
  return (this.disabled ? 'Enable' : 'Disabled');
}

swapDirection() {
  this.sourceLeft = !this.sourceLeft;
  this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
}

onChange(event) {
  const interests = <FormArray>this.secondFormGroup.get('interests') as FormArray;

  if(event.checked) {
    interests.push(new FormControl(event.source.value))
  } else {
    const i = interests.controls.findIndex(x => x.value === event.source.value);
    interests.removeAt(i);
  }
}

// listdata(){
//   this.spinnerService.show();
//   let session_details = localStorage.getItem('login_session_details');
//   this.access_details = $.parseJSON(session_details);
//   let logsiddetails ={
//           "userroleflag":"admin",
//           "admincheckval": {
//           "FilterExpression":"id = :id and refreshToken = :refreshToken", 
//           "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
//           },
//           "methodrole": "batchwiseclass",
//           "method": "list",
//           "payload": {
//             "FilterExpression":'adminId = :adminId', 
//             "ExpressionAttributeValues":{ ":adminId" : this.access_details.loginId }
//           }
//       };
//       var lencryptpostval = new Buffer(JSON.stringify(logsiddetails)).toString('base64');
//        var listvalue = {"send":lencryptpostval}
//   this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',listvalue).subscribe((res : any[])=>{
//  console.log(res);
//  this.spinnerService.hide();
//   this.topiccout = res.Count;
   
//   });  
// }

public moveToNextStep1(): void {
//   console.log(this.firstFormGroup.value);
//   let adderror=1;
//   if (this.firstFormGroup.value.batch_name == "") {
//     this.addbatcherrorMsg = "Please Enter The Batch Name";
//     adderror=0;
//   }else{
//     this.addbatcherrorMsg="";
//   }
//   if (this.firstFormGroup.value.start_date == "") {
//     this.addstartdateerrorMsg = "Please Enter The Start Date";
//     adderror=0;
//   }else{
//     this.addstartdateerrorMsg="";
//   }
//   if (this.firstFormGroup.value.end_date == "") {
//     this.addenddateerrorMsg = "Please Enter The End Date";
//     adderror=0;
//   }else{
//     this.addenddateerrorMsg="";
//   }
//   if(adderror ==0){
//     return;
//   }

//   let session_details = localStorage.getItem('login_session_details');
//   this.access_details = $.parseJSON(session_details);
//   let time = new Date();
//     let timestamp = time.getTime();
   
//   let tpoicid = this.topiccout+1;
  
//   const createtopic ={
//             "userroleflag":"admin",
//             "admincheckval": {
//             "FilterExpression":"id = :id and refreshToken = :refreshToken", 
//             "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
//             },
//             "methodrole": "batch",
//             "method": "create",
//             "checkval": {
//               "FilterExpression": "batchname = :batchname",
//               "ExpressionAttributeValues": {
//                 ":batchname": this.firstFormGroup.value.batch_name
//               }
//             },
//             "payload": {
//               "Item": {
//                 "batchId": tpoicid,
//                 "batchname": this.firstFormGroup.value.batch_name,
//                 "startdate": this.firstFormGroup.value.start_date,
//                 "enddate": this.firstFormGroup.value.end_date,
//                 "status": "1",
//                 "timestamp": timestamp,
//                 "adminId": this.access_details.loginId
//               }
//           }
//       }
//       var cencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
//        var createvalue = {"send":cencryptpostval}
//        this.spinnerService.show();
//   this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',createvalue).subscribe((res : any[])=>{
 
 
//  if(res.success){
//   this.stepper.next();
//   this.addmsgsucess=res.success;
//  }else if(res.error){
//   let dedit = Object.assign({}, res.dbdata.Items[0]);
//   this.batchdbdata= dedit;
//   this.stepper.next();
//   this.addmsgerror=res.error;
//  }
//  this.secondFormGroup.setValue({
//   batchitemCtrl: this.batchdbdata.batchname,
//   batchId:this.batchdbdata.batchId,
//   interests:[]
 
// })
//  console.log(this.batchdbdata.batchname);
//  this.listdata();
//  this.spinnerService.hide();
//   }); 
this.stepper.next();
}


public moveToNextStep2(): void {
// let adderror=1;
//  let checkedRoles = this.secondFormGroup.value.interests;
//  console.log(checkedRoles.length);
//  if(checkedRoles.length ==0) {
//   this.bwsItemserrorMsg = "Please select the class name";
//   adderror=0;
// }else{
//   this.bwsItemserrorMsg="";
// }
// if(adderror ==0){
//   return;
// }
// console.log(checkedRoles);
// var itemsArray = [];
// let tpoicid = this.topiccout+1;
// console.log(tpoicid);
// let time = new Date();
// let timestamp = time.getTime();
// let session_details = localStorage.getItem('login_session_details');
// this.access_details = $.parseJSON(session_details);
// checkedRoles.forEach(role=>{
 
//   var item = {
//                 "PutRequest": {
//                      "Item":{
//                       "batchwiseclassId": { "N": tpoicid.toString() },
//                       "batchId": { "N": this.secondFormGroup.value.batchId.toString() },
//                       "classId": { "N": role.toString() },
//                       "status": { "N": "1" },
//                       "timestamp": { "S": timestamp.toString() },
//                       "adminId": { "S": this.access_details.loginId }
//                      } 
//                 }
//              };
//  if (item) {
//     itemsArray.push(item);
//     tpoicid =tpoicid+1;
    
//   }    
// });


  
//   const createtopic ={
//             "userroleflag":"admin",
//             "admincheckval": {
//             "FilterExpression":"id = :id and refreshToken = :refreshToken", 
//             "ExpressionAttributeValues":{ ":id" : this.access_details.loginId,":refreshToken" : this.access_details.accesstoken }
//             },
//             "methodrole": "batchwiseclass",
//             "method": "create",
//             "params": {
//               "RequestItems": {
//                 "batchwiseclass": itemsArray
//               }
//           }
//       }
//       var cencryptpostval = new Buffer(JSON.stringify(createtopic)).toString('base64');
//        var createvalue = {"send":cencryptpostval}
//         this.httpClient.post('https://783vgvnfyd.execute-api.us-east-2.amazonaws.com/adminmasters',createvalue).subscribe((res : any[])=>{
//       console.log(res);
//       if(res.success){
//         this.addmsgsucess=res.success;
//       }else if(res.error){
//         this.addmsgerror=res.error;
//       }
//         this.listdata();
//         });
this.stepper.next();
}

public moveToPreviousStep(): void {
//console.log("======next");
this.stepper.previous();
// Here make your api call and your form validation
// if ( your all is good move to next step) {
//    this.stepper.next(); // <==== that's how you trigger moving to next step manually
// } else {
//    //display some message to the user
// }   
}

public countries: { [key: string]: Object; }[] = [
            { Name: 'A', Code: 'AU' },
            { Name: 'B', Code: 'BM' },
            { Name: 'C', Code: 'CA' },
            { Name: 'D', Code: 'CM' },
        ];
        // maps the local data column to fields property
        public localFields: Object = { text: 'Name', value: 'Code' };
        // set the placeholder to MultiSelect input element
        public localWaterMark: string = 'Select Section';

}


