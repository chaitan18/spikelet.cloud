import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 
  }
  ngOnInit() {
    
 
  }

}

