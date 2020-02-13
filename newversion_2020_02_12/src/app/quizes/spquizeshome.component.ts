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
  selector: 'app-spquizeshome',
  templateUrl: './spquizeshome.component.html',
  styleUrls: ['./spquizeshome.component.css']
})
// @ViewChild('nav') slider: NgImageSliderComponent;
export class SpquizesHomeComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject: Array<object> = [{
    image: 'assets/images/apps/img1.jpg',
    thumbImage: 'assets/images/apps/img1.jpg',
    alt: 'alt of image',
    title: 'title of image'
}, {
    image: 'assets/images/apps/img2.jpg', // Support base64 image
    thumbImage: 'assets/images/apps/img2.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
 },
{
  image: 'assets/images/apps/img3.jpg', // Support base64 image
  thumbImage: 'assets/images/apps/img3.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}
];
  constructor(public router: Router,private httpClient : HttpClient) { 
    
  }
  ngAfterViewInit(){ 
    
  }
  //public ipAddress:any;
  ngOnInit() {
    
   
    
  }


  onLogin() {
    
    if (this.email == null || this.password == null) {
        //this.errorMessage = "";
        alert("Username and Password fields are required");
        return;
    }else{
        if(this.email =="student" && this.password=="123456"){
            this.router.navigate(['/spquiz-dashboard']);
        }else if(this.email =="teacher" && this.password=="123456"){
          this.router.navigate(['/teachersetting']);
      }else{
            alert("Invalid username and password!");
        }
    }
    
}
 
   

}

