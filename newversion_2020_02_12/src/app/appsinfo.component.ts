import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-appsinfo',
  templateUrl: './appsinfo.component.html',
  styleUrls: ['./appsinfo.component.css']
})
export class AppsInfoComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 
  }
  ngOnInit() {
    
 
  }

}

