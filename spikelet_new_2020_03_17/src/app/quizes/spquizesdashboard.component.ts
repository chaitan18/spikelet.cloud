import { Component, OnInit,ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { HttpClient } from '@angular/common/http';

// import { Component, OnInit ,ViewChild ,ElementRef} from '@angular/core';

declare var $:any;
declare global {
  interface Array<T> {
    ip(): any;
  }
}
import { Router } from '@angular/router';
@Component({
  selector: 'app-spquizesdashboard',
  templateUrl: './spquizesdashboard.component.html',
  styleUrls: ['./spquizesdashboard.component.css']
})
// @ViewChild('nav') slider: NgImageSliderComponent;
export class SpquizesDashboardComponent implements OnInit {
 
  constructor(public router: Router,private httpClient : HttpClient) { 
    
  }
  ngAfterViewInit(){ 
    
  }
  //public ipAddress:any;
  ngOnInit() {
   
    
  }

 
   

}

